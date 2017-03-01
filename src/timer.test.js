//@flow
import Timer from './timer'

test('it has defaults', () => {
  var timer = new Timer();
  expect(timer.minutes).toBe(25);
});
