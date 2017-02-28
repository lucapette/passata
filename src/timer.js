//@flow

export default class Timer {
  constructor(minutes = 25) {
    this.minutes = minutes;
    this.callbacks = [];
  }
}
