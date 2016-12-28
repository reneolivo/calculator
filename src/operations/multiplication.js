import AbstractOperation from './operation';

export default class Multiplication extends AbstractOperation {
  static operator = '*';

  static calculate(lefthandValue, righthandValue) {
    return lefthandValue * righthandValue;
  }
}
