const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should round numbers and add them', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('should round numbers and subtract the second from the first', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
  });

  describe('DIVIDE', () => {
    it('should round numbers and divide the first by the second', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should return "Invalid type" for unknown types', () => {
      assert.strictEqual(calculateNumber('INVALID', 1.4, 4.5), 'Invalid type');
    });
  });
});
