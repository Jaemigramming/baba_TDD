export default class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(money: Money) {
    return this.amount === money.amount;
  }
}