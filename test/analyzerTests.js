import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { checkForEvenBalance } from 'analyzer';
import data, { dataWithEvenTransferBalance } from './data';

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
        checkForEvenBalance('Transfer')(data);
        expect(consoleWarnSpy).to.have.been.called;
      });
    });

    describe('when the net total amount is 0', () => {
      it('does not provide a warning', () => {
        checkForEvenBalance('Transfer')(dataWithEvenTransferBalance);
        expect(consoleWarnSpy).not.to.have.been.called;
      });
    });

    it('returns the same set of data that it was provided', () => {
      const result = checkForEvenBalance('Transfer')(data);
      expect(result).to.deep.equal(data);
    });
  });
});
