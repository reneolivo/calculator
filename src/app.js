import * as operations from './operations';
import BinaryOperation from './binary-operation';
import CalculatorForSpecificOperations from './calculator-for-specific-operations';

export default class Calculator {
  static orderOfOperations = [
    [ operations.Multiplication, operations.Division ],
    [ operations.Addition, operations.Subtraction ]
  ];

  static calculate(stringToCalculate) {
    let tokens = this._parseStringToTokens(stringToCalculate);

    this._executeOrderOfOperationsOnTokens(tokens);

    return tokens.pop();
  }

  static _parseStringToTokens(stringtoParse) {
    return stringtoParse.split(' ');
  }

  static _executeOrderOfOperationsOnTokens(tokens) {
    this.orderOfOperations.forEach((operationsForThisOrder) => {
      for(var i = 0; i < tokens.length; i += 2) {
        let binaryOperation = new BinaryOperation({
          lefthandValue: tokens[i],
          operator: tokens[i + 1],
          righthandValue: tokens[i + 2]
        });

        let calculator = new CalculatorForSpecificOperations(
          binaryOperation,
          operationsForThisOrder
        );

        calculator.calculate();

        if (calculator.isResolved) {
          tokens[i] = calculator.value;
          tokens.splice(i + 1, 2);
          i -= 2;
        }
      }
    });
  }

}
