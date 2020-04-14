import Money from './money';

export default class Franc extends Money {
  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }

  equals(dollar: Franc) {
    return this.amount === dollar.amount;
  }
}