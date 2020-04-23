export default abstract class Money {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  public static franc(amount: number) {
    return new Franc(amount);
  }

  public abstract times(amount: number): Money;

  public equals(money: Money) {
    return this.amount === money.amount && this.constructor.name === money.constructor.name; // money에서 private 변수인 amount에 접근 가능. Money 클래스 안이니까.
  }
}

import Dollar from './dollar'; // 순환 참조 문제가 발생하기 때문에 아래에서 import 해줘야 함
import Franc from './franc';


