import * as operations from './operations';
import CalculatorForSpecificOperations from './calculator-for-specific-operations';
import TokensWalker from './tokens-walker';

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
    let tokensWalker = new TokensWalker(tokens);

    this.orderOfOperations.forEach((operationsForThisOrder) => {
      tokensWalker.walk((binaryOperation) => {
        let calculator = new CalculatorForSpecificOperations(
          binaryOperation,
          operationsForThisOrder
        );

        calculator.calculate();

        if (calculator.isResolved) {
          tokensWalker.replaceValueAtCurrentIndex(calculator.value);
        }
      });
    });
  }
}
