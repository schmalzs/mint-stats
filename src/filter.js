const removeTransactionsWithAmountOfZero = data => data.filter(item => parseFloat(item.Amount) !== 0);

const removeTransfers = data => data.filter(item => item.Category.toUpperCase() !== 'TRANSFER');

const removeCreditCardPayments = data => data.filter(item => item.Category.toUpperCase() !== 'CREDIT CARD PAYMENT');

const removeInvestments = data => data.filter(item => item.Category.toUpperCase() !== 'INVESTMENTS');

export default data => removeInvestments(removeCreditCardPayments(removeTransfers(removeTransactionsWithAmountOfZero(data))));
