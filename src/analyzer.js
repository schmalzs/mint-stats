const isBalanceEven = (category, data) => {
  const balance = data
    .filter(transaction => transaction.Category.toUpperCase() === category.toUpperCase())
    .map(transaction => {
      let amount = parseFloat(transaction.Amount);
      if (transaction['Transaction Type'].toUpperCase() === 'DEBIT') {
        return amount * -1
      }
      return amount;
    })
    .reduce((accumulator, amount) => accumulator + parseFloat(amount), 0);

  return balance === 0;
};

export const checkForEvenTransferBalance = (data) => {
  if (!isBalanceEven('Transfer', data)) {
    console.warn('The net amount of transactions with type "Transfer" is not balanced!');
  }

  return data;
};

export const checkForEvenCreditCardPaymentBalance = (data) => {
  if (!isBalanceEven('Credit Card Payment', data)) {
    console.warn('The net amount of transactions with type "Credit Card Payment" is not balanced!');
  }

  return data;
};
