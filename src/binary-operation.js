export default class BinaryOperation {
  constructor(data) {
    this.lefthandValue = parseFloat(data.lefthandValue);
    this.operator = data.operator;
    this.righthandValue = parseFloat(data.righthandValue);
  }
}
