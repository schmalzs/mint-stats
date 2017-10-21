import parser from 'csvParser';
import {
  checkForEvenTransferBalance,
  checkForEvenCreditCardPaymentBalance,
} from 'analyzer';
import filter from 'filter';

parser('/Users/n0199601/Downloads/transactions (9).csv')
.then(data => {
  checkForEvenTransferBalance(data);
  checkForEvenCreditCardPaymentBalance(data);
  const filteredData = filter(data);
  console.info(filteredData.length);
})
.catch(error => {
  console.error(error);
});
