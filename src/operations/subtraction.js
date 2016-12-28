import AbstractOperation from './operation';

export default class Subtraction extends AbstractOperation {
  static operator = '-';

  static calculate(lefthandValue, righthandValue) {
    return lefthandValue - righthandValue;
  }
}
