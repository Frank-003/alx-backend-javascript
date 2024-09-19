const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should round numbers and add them', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should round numbers and subtract the second from the first', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
  });

  describe('DIVIDE', () => {
    it('should round numbers and divide the first by the second', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should return "Invalid type" for unknown types', () => {
      expect(calculateNumber('INVALID', 1.4, 4.5)).to.equal('Invalid type');
    });
  });
});
