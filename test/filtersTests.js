import {
  removeTransactionsWithAmountOfZero,
  removeTransfers,
  removeCreditCardPayments
} from 'filters';
import exampleData from './data.example.json';

describe('filters', () => {
  let data;

  describe('removeTransfers', () => {
    beforeEach(() => {
      data = exampleData;
    });

    it('removes transactions with an amount of $0', () => {
      const result = removeTransactionsWithAmountOfZero(data);
      expect(result.map(item => parseFloat(item.Amount))).not.to.include(0.0);
    });

    it('removes transfers', () => {
      const result = removeTransfers(data);
      expect(result.map(item => item.Category.toUpperCase())).not.to.include('TRANSFER');
    });

    it('removes credit card payments', () => {
      const result = removeCreditCardPayments(data);
      expect(result.map(item => item.Category.toUpperCase())).not.to.include('CREDIT CARD PAYMENT');
    })
  });
});
