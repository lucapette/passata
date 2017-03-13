//@flow

type CallbackType = 'tick' | 'done';
type Callback = (any) => void;

export default class Timer {
  callbacks: Map<CallbackType, Callback>;
  interval: number;

  constructor() {
    this.callbacks = new Map();
  }

  start(seconds: number = 25 * 60) {
    let start = Date.now();
    let elapsed = 0;
    let lastElapsed = 0;

    this.interval = setInterval(() => {
      elapsed = Math.floor((Date.now() - start) / 1000);

      if (elapsed != lastElapsed) {
        lastElapsed = elapsed;
        let callback = this.callbacks.get('tick');
        if (callback) {
          callback(Math.floor((elapsed/seconds) * 100));
        }
      }

      if (elapsed >= seconds) {
        let callback = this.callbacks.get('done');
        if (callback) {
          callback();
        }
        return
      }
    }, 1000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  isRunning() {
    return this.interval != undefined;
  }


  on(type : CallbackType, callback : Callback) {
    this.callbacks.set(type, callback);
  }
}
