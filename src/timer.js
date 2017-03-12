//@flow

type CallbackType = 'tick' | 'done';
type Callback = (number | void) => void;

export default class Timer {
  seconds: number;
  callbacks: Map<CallbackType, Callback>;

  constructor(seconds: number = 25 * 60) {
    this.seconds = seconds;
    this.callbacks = new Map();
  }

  start() {
    let start = Date.now();
    let elapsed = 0;
    let lastElapsed = 0;

    setInterval(() => {
      elapsed = Math.floor((Date.now() - start) / 1000);

      if (elapsed != lastElapsed) {
        lastElapsed = elapsed;
        let callback = this.callbacks.get('tick');
        if (callback) {
          callback(Math.floor((elapsed/this.seconds) * 100));
        }
      }

      if (elapsed >= this.seconds) {
        let callback = this.callbacks.get('done');
        if (callback) {
          callback();
        }
        return
      }
    }, 1000);
  }

  on(type : CallbackType, callback : Callback) {
    this.callbacks.set(type, callback);
  }
}
