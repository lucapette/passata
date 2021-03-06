import Timer from './timer'

jest.useFakeTimers();

beforeEach(() => {
  Date.now = jest.fn().
    mockReturnValueOnce(new Date(2015, 10, 21, 7, 28, 0)).
    mockReturnValue(new Date(2015, 10, 21, 7, 28, 1));
});

test('it ticks correctly', () => {
  var timer = new Timer();

  const tick = jest.fn();

  timer.on('tick', tick);

  timer.start(1);

  jest.runTimersToTime(1000);

  expect(tick).toHaveBeenCalledTimes(1);
});

test('it finishes correctly', () => {
  var timer = new Timer();

  const done = jest.fn();

  timer.on('done', done);

  timer.start(1);

  jest.runTimersToTime(1000);

  expect(done).toHaveBeenCalledTimes(1);
});

test('it stops correctly', () => {
  var timer = new Timer();

  const tick = jest.fn();

  timer.on('tick', tick);

  timer.start(2);

  jest.runTimersToTime(1000);

  timer.stop();

  jest.runTimersToTime(1000);

  expect(tick).toHaveBeenCalledTimes(1);
});

describe('clockFormat', () => {
  test('returns undefined when not running', () => {
    var timer = new Timer();

    expect(timer.clockFormat()).toBeUndefined();
  });

  test('formats no elapsed time correctly', () => {
    var timer = new Timer();

    timer.start(60);

    expect(timer.clockFormat()).toEqual('01:00');
  });

  test('formats elapsed time correctly', () => {
    var timer = new Timer();

    timer.start();

    jest.runTimersToTime(1000);

    expect(timer.clockFormat()).toEqual('24:59');
  });
});
