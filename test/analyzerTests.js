import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
  checkForEvenTransferBalance,
  checkForEvenCreditCardPaymentBalance,
} from 'analyzer';
import data, { dataWithEvenTransferBalance, dataWithEvenCreditCardPaymentBalance } from './data';

chai.use(sinonChai);

describe('analyzer', () => {
  let consoleWarnSpy;

  beforeEach(() => {
    consoleWarnSpy = sinon.stub(console, 'warn');
  });

  afterEach(() => consoleWarnSpy.restore());

  describe('when checking the net total amount for transfers', () => {
    describe('when the net total amount is not 0', () => {
      it('provides a warning', () => {
        checkForEvenTransferBalance(data);
        expect(consoleWarnSpy).to.have.been.called;
      });
    });

    describe('when the net total amount is 0', () => {
      it('does not provide a warning', () => {
        checkForEvenTransferBalance(dataWithEvenTransferBalance);
        expect(consoleWarnSpy).not.to.have.been.called;
      });
    });

    it ('returns the same set of data that it was provided', () => {
      const result = checkForEvenTransferBalance(data);
      expect(result).to.deep.equal(data);
    });
  });

  describe('when checking the net total amount for credit card payments', () => {
    describe('when the net total amount is not 0', () => {
      it('provides a warning', () => {
        checkForEvenCreditCardPaymentBalance(data);
        expect(consoleWarnSpy).to.have.been.called;
      });
    });

    describe('when the net total amount is 0', () => {
      it('does not provide a warning', () => {
        checkForEvenCreditCardPaymentBalance(dataWithEvenCreditCardPaymentBalance);
        expect(consoleWarnSpy).not.to.have.been.called;
      });
    });

    it ('returns the same set of data that it was provided', () => {
      const result = checkForEvenCreditCardPaymentBalance(data);
      expect(result).to.deep.equal(data);
    });
  });
});
