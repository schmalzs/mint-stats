const getBalance = (category, data) => {
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

  return balance;
};

export const checkForEvenTransferBalance = (data) => {
  const balance = getBalance('Transfer', data);
  if (balance !== 0) {
    console.warn(`The net amount of transactions with type "Transfer" is not balanced! [${balance}]`);
  }

  return data;
};

export const checkForEvenCreditCardPaymentBalance = (data) => {
  const balance = getBalance('Credit Card Payment', data);
  if (balance !== 0) {
    console.warn(`The net amount of transactions with type "Credit Card Payment" is not balanced! [${balance}]`);
  }

  return data;
};
