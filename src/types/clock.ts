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

export const isClockRunning = (clock: Clock) => {
  return (
    clock.state === ClockState.WORKING || clock.state === ClockState.RESTING
  );
};
