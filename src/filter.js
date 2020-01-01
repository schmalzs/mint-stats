import { flow } from 'lodash';

const filterCategories = (categories = []) => (data = []) =>
  data.filter(item => !categories.includes(item.Category.toUpperCase()));

const filterAmount = amount => (data = []) =>
  data.filter(item => parseFloat(item.Amount) !== amount);

export default flow([
  filterCategories([
    'TRANSFER',
    'TRANSFER TO SHARED',
    'INVESTMENT TRANSFER',
    'INVESTMENTS',
    'CREDIT CARD PAYMENT',
    'HIDE FROM BUDGETS & TRENDS',
    'KATE TO SHARED'
  ]),
  filterAmount(0)
]);
