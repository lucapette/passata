export enum ClockState {
  NOT_READY = "NOT_READY",
  READY = "READY",
  WORKING = "WORKING",
  DONE_WORKING = "DONE_WORKING",
  RESTING = "RESTING",
}

export interface Clock {
  state: ClockState;
  title: string;
  value: string;
  progress: number;
}
