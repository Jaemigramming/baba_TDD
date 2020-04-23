import Money from './money';
import Franc from './franc';

describe('다중 통화를 지원하는 money 객체', () => {
  test('동치성 테스트', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(new Franc(2).equals(new Franc(2))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
    expect(Money.dollar(5).equals(new Franc(5))).toBe(false);
  });

  test('달러에 곱하기 테스트', () => {
    const five = Money.dollar(5);
    console.log(five.times(2)); // five 변수가 Money 타입일 뿐, 실제 리터럴 값은 Dollar 객체임으로 times의 구현체가 있는 것!!
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test('franc에 곱하기 테스트', () => {
    const five = new Franc(5);
    expect(five.times(2)).toEqual(new Franc(10));
    expect(five.times(3)).toEqual(new Franc(15));
  });
});

