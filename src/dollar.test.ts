import Dollar from './dollar';

test('곱하기 테스트', () => {
  const five = new Dollar(5);
  expect(five.times(2)).toBe(10);
});