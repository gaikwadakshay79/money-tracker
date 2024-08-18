export const calculateCurrentMonthTotals = (transactions) => {
  const currentMonth = new Date().getMonth();
  let totalLent = 0;
  let totalPaidBack = 0;

  transactions.forEach((transaction) => {
    const transactionMonth = new Date(transaction.date).getMonth();
    if (transactionMonth === currentMonth) {
      if (transaction.type === 'CREDIT') {
        totalLent += parseFloat(transaction.amount);
      } else if (transaction.type === 'DEBIT') {
        totalPaidBack += parseFloat(transaction.amount);
      }
    }
  });

  return { totalLent, totalPaidBack };
};
