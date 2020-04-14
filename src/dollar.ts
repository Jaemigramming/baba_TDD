import Money from './money';

export default class Dollar extends Money {
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Dollar) {
    return this.amount === dollar.amount;
  }
}