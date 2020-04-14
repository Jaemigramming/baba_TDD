import Dollar from './dollar';
import Franc from './franc';

describe('다중 통화를 지원하는 money 객체', () => {
  test('동치성 테스트', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Franc(2).equals(new Franc(2))).toBe(true);
  });

  test('달러에 곱하기 테스트', () => {
    const five = new Dollar(5);
    expect(five.times(2)).toEqual(new Dollar(10));
    expect(five.times(3)).toEqual(new Dollar(15));
  });

  test('franc에 곱하기 테스트', () => {
    const five = new Franc(5);
    expect(five.times(2)).toEqual(new Franc(10));
    expect(five.times(3)).toEqual(new Franc(15));
  });
});

