import Money from './money';

describe('다중 통화를 지원하는 money 객체', () => {
  test('팩토리 메소드 테스트', () => {
    expect(Money.dollar(1)).toEqual(new Money(1, 'USD'));
    expect(Money.franc(1)).toEqual(new Money(1, 'CHF'));
  });

  test('동치성 테스트', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.franc(2).equals(Money.franc(2))).toBe(true);
    expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
  });

  test('곱하기 테스트', () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  test('통화 테스트', () => {
    expect(Money.dollar(1).getCurrency()).toBe('USD');
    expect(Money.franc(1).getCurrency()).toBe('CHF');
  });
});

