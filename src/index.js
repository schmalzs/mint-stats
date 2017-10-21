import parser from 'csvParser';
import { removeTransfers } from 'filters';

parser('/Users/n0199601/Downloads/transactions.csv')
.then(data => {
  console.info(data.length);
  console.info(removeTransfers(data).length);
})
.catch(error => {
  console.error(error);
});
