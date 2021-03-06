export default class Money {
  protected amount: number;
  protected currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  public static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  public times(multiplier: number) {
    return new Money(this.amount * multiplier, this.currency);
  }

  public getCurrency() {
    return this.currency;
  }

  public equals(money: Money) {
    return this.amount === money.amount && this.getCurrency() === money.getCurrency();
  }
}


