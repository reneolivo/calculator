import AbstractOperation from './operation';

export default class Division extends AbstractOperation {
  static operator = '/';

  static calculate(lefthandValue, righthandValue) {
    return lefthandValue / righthandValue;
  }
}
