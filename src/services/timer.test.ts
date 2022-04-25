import Timer from "./timer";

jest.useFakeTimers();

beforeEach(() => {
  Date.now = jest
    .fn()
    .mockReturnValueOnce(new Date(2015, 10, 21, 7, 28, 0))
    .mockReturnValue(new Date(2015, 10, 21, 7, 28, 1));
});

test("it ticks correctly", () => {
  const timer = new Timer(1);

  const tick = jest.fn();

  timer.on("tick", tick);

  timer.start(1);

  jest.advanceTimersByTime(1000);

  expect(tick).toHaveBeenCalledTimes(1);
});

test("it finishes correctly", () => {
  const timer = new Timer(1);

  const done = jest.fn();

  timer.on("done", done);

  timer.start(1);

  jest.advanceTimersByTime(1000);

  expect(done).toHaveBeenCalledTimes(1);
});

test("it stops correctly", () => {
  const timer = new Timer(25 * 60);

  const tick = jest.fn();

  timer.on("tick", tick);

  timer.start(2);

  jest.advanceTimersByTime(1000);

  timer.stop();

  jest.advanceTimersByTime(1000);

  expect(tick).toHaveBeenCalledTimes(1);
});

describe("clockFormat", () => {
  test("formats no elapsed time correctly", () => {
    const timer = new Timer(60);

    timer.start(60);

    expect(timer.clockFormat()).toEqual("01:00");
  });

  test("formats elapsed time correctly", () => {
    const timer = new Timer(25 * 60);

    timer.start(25 * 60);

    jest.advanceTimersByTime(1000);

    expect(timer.clockFormat()).toEqual("24:59");
  });
});
