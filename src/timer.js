//@flow

import _ from 'lodash';

type CallbackType = 'tick' | 'done';
type Callback = (any) => void;

export default class Timer {
  secondsToRun: number;
  elapsed: number;
  callbacks: Map<CallbackType, Callback>;
  interval: number | void;

  constructor() {
    this.callbacks = new Map();
  }

  start(seconds: number = 25 * 60) {
    this.secondsToRun = seconds;
    this.elapsed = 0;

    let start = Date.now();
    let lastElapsed = 0;

    this.interval = setInterval(() => {
      this.elapsed = Math.floor((Date.now() - start) / 1000);

      if (this.elapsed != lastElapsed) {
        lastElapsed = this.elapsed;
        let callback = this.callbacks.get('tick');
        if (callback) {
          callback(Math.floor((this.elapsed/seconds) * 100));
        }
      }

      if (this.elapsed >= seconds) {
        let callback = this.callbacks.get('done');
        if (callback) {
          callback();
        }
        this.stop();
      }
    }, 1000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  isRunning() {
    return this.interval != undefined;
  }

  clockFormat() {
    if (!this.isRunning()) {
      return;
    }

    let secondsLeft = this.secondsToRun - this.elapsed;
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;

    return `${_.padStart(minutes, 2, '0')}:${_.padStart(seconds, 2, '0')}`;
  }

  on(type : CallbackType, callback : Callback) {
    this.callbacks.set(type, callback);
  }
}
