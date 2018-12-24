import { flow } from 'lodash';
import * as logger from 'logger';

const getBalance = (category, data) => {
  const balance = data
    .filter(
      transaction =>
        transaction.Category.toUpperCase() === category.toUpperCase()
    )
    .map(transaction => {
      const amount = parseFloat(transaction.Amount);
      if (transaction['Transaction Type'].toUpperCase() === 'DEBIT') {
        return amount * -1;
      }
      return amount;
    })
    .reduce((accumulator, amount) => accumulator + parseFloat(amount), 0);

  return balance;
};

export const checkForEvenBalance = category => (data = []) => {
  const balance = getBalance(category, data);

  if (balance !== 0) {
    logger.warn(
      `The net amount of transactions with type "${category}" is not balanced! [${balance}]`
    );
  }

  return data;
};

export default flow([
  checkForEvenBalance('Transfer'),
  checkForEvenBalance('Credit Card Payment')
]);
