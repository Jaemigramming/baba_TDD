export default class Dollar {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    return this.amount * multiplier;
  }
}