const removeTransactionsWithAmountOfZero = data =>
  data.filter(item => parseFloat(item.Amount) !== 0);

const removeTransfers = data =>
  data.filter(item => item.Category.toUpperCase() !== 'TRANSFER');

const removeTransfersToShared = data =>
  data.filter(item => item.Category.toUpperCase() !== 'TRANSFER TO SHARED');

const removeCreditCardPayments = data =>
  data.filter(item => item.Category.toUpperCase() !== 'CREDIT CARD PAYMENT');

const removeInvestments = data =>
  data.filter(item => item.Category.toUpperCase() !== 'INVESTMENTS');

const removeInvestmentTransfers = data =>
  data.filter(item => item.Category.toUpperCase() !== 'INVESTMENT TRANSFER');

export default data =>
  removeInvestmentTransfers(
    removeInvestments(
      removeCreditCardPayments(
        removeTransfers(
          removeTransactionsWithAmountOfZero(removeTransfersToShared(data))
        )
      )
    )
  );
