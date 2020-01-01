import { expect } from 'chai';
import filter from 'filter';
import data from './data';

describe('filter', () => {
  it('removes transactions with an amount of $0', () => {
    const result = filter(data);
    expect(result.map(item => parseFloat(item.Amount))).not.to.include(0.0);
  });

  it('removes transfers', () => {
    const result = filter(data);
    expect(result.map(item => item.Category.toUpperCase())).not.to.include(
      'TRANSFER'
    );
  });

  it('removes credit card payments', () => {
    const result = filter(data);
    expect(result.map(item => item.Category.toUpperCase())).not.to.include(
      'CREDIT CARD PAYMENT'
    );
  });

  it('removes investments', () => {
    const result = filter(data);
    expect(result.map(item => item.Category.toUpperCase())).not.to.include(
      'INVESTMENTS'
    );
  });

  it('removes investment transfers', () => {
    const result = filter(data);
    expect(result.map(item => item.Category.toUpperCase())).not.to.include(
      'INVESTMENT TRANSFER'
    );
  });

  it('removes kate to shared transfers', () => {
    const result = filter(data);
    expect(result.map(item => item.Category.toUpperCase())).not.to.include(
      'KATE TO SHARED'
    );
  });

  it('retains transactions that should not be filtered', () => {
    const result = filter(data);
    expect(result).to.not.be.empty;
  });
});
