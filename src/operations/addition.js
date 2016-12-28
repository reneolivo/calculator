import AbstractOperation from './operation';

export default class Addition extends AbstractOperation {
  static operator = '+';

  static calculate(lefthandValue, righthandValue) {
    return lefthandValue + righthandValue;
  }
}
