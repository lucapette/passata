type CallbackType = "tick" | "done";
type Callback = (x?: any) => void;

class Timer {
  secondsToRun: number;
  elapsed: number;
  callbacks: Map<CallbackType, Callback>;
  interval?: number;

  constructor(seconds: number) {
    this.callbacks = new Map();
    this.secondsToRun = seconds;
    this.elapsed = 0;
    this.interval = undefined;
  }

  start(seconds: number) {
    this.reset(seconds);
    let start = Date.now();
    let lastElapsed = 0;

    this.interval = window.setInterval(() => {
      this.elapsed = Math.floor((Date.now() - start) / 1000);

      if (this.elapsed !== lastElapsed) {
        lastElapsed = this.elapsed;
        let callback = this.callbacks.get("tick");
        if (callback) {
          callback(Math.floor((this.elapsed / seconds) * 100));
        }
      }

      if (this.elapsed >= seconds) {
        let callback = this.callbacks.get("done");
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
    return this.interval !== undefined;
  }

  reset(seconds: number) {
    this.secondsToRun = seconds;
    this.elapsed = 0;
  }

  clockFormat() {
    let secondsLeft = this.secondsToRun - this.elapsed;
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;

    return [minutes, seconds].map((e) => `${e}`.padStart(2, "0")).join(":");
  }

  on(type: CallbackType, callback: Callback) {
    this.callbacks.set(type, callback);
  }
}

export default Timer;
