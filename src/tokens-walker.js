import BinaryOperation from './binary-operation';

export default class TokensWalker {
  index = 0;

  constructor(tokens) {
    this.tokens = tokens;
  }

  walk(callback) {
    for(this.index = 0; this.index < this.tokens.length; this.index += 2) {
      let binaryOperation = new BinaryOperation({
        lefthandValue: this.tokens[ this.index ],
        operator: this.tokens[ this.index + 1],
        righthandValue: this.tokens[ this.index + 2]
      });

      callback(binaryOperation);
    }
  }

  replaceValueAtCurrentIndex(value) {
    this.tokens[ this.index ] = value;
    this.tokens.splice(this.index + 1, 2);
    this.index -= 2;
  }
}
