import Money from './money';

export default class Dollar extends Money {
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}
