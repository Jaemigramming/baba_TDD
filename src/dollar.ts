import Money from './money';

export default class Dollar extends Money {
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}

// 원시 타입
// 클래스 타입
// 객체 리터럴 타입
// 원시 리터럴 타입