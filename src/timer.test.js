import Timer from './timer'

jest.useFakeTimers();

beforeEach(() => {
  Date.now = jest.fn().
    mockReturnValueOnce(new Date(2015, 10, 21, 7, 28, 0)).
    mockReturnValue(new Date(2015, 10, 21, 7, 28, 1));
});

test('it ticks correctly', () => {
  var timer = new Timer(1);

  const tick = jest.fn();

  timer.on('tick', tick);

  timer.start();

  jest.runTimersToTime(1000);

  expect(tick.mock.calls.length).toBe(1);
});

test('it finishes correctly', () => {
  var timer = new Timer(1);

  const done = jest.fn();

  timer.on('done', done);

  timer.start();

  jest.runTimersToTime(1000);

  expect(done.mock.calls.length).toBe(1);
});
