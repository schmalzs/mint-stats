// TODO: how to handle investments...

export const removeTransactionsWithAmountOfZero = data => data.filter(item => parseFloat(item.Amount) !== 0);

export const removeTransfers = data => data.filter(item => item.Category.toUpperCase() !== 'TRANSFER');

export const removeCreditCardPayments = data => data.filter(item => item.Category.toUpperCase() !== 'CREDIT CARD PAYMENT');
