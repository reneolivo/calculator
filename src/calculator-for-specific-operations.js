export default class CalculatorForSpecificOperations {
  value = null;
  isResolved = false;

  constructor(binaryOperation, specificOperations) {
    this.binaryOperation = binaryOperation;
    this.specificOperations = specificOperations;
  }

  calculate() {
    let operationToCalculate = this._getOperationToCalculate();

    if (!operationToCalculate) return;

    this.value = this._getValueFromOperation(operationToCalculate);

    this.isResolved = true;
  }

  _getOperationToCalculate() {
    return this.specificOperations
    .filter((op) => op.operator === this.binaryOperation.operator)
    .pop();
  }

  _getValueFromOperation(operation) {
    return operation.calculate(
      this.binaryOperation.lefthandValue,
      this.binaryOperation.righthandValue
    );
  }
}
