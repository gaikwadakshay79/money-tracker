export const calculateCurrentMonthTotals = (transactions) => {
  const currentMonth = new Date().getMonth();
  let totalLentYetToReceive = 0;
  let totalBorrowedYetToRevert = 0;

  const friendBalances = calculateFriendWiseNetValues(transactions);
  totalBorrowedYetToRevert = (Object.values(friendBalances).filter(({netBalance})=> netBalance > 0).map(({netBalance})=>netBalance).reduce((a,c)=> a+c, 0));
  totalLentYetToReceive = (Object.values(friendBalances).filter(({netBalance})=> netBalance < 0).map(({netBalance})=>netBalance).reduce((a,c)=> a+c, 0));
  return {
    totalLentYetToReceive,
    totalBorrowedYetToRevert,
    overallBalance: -totalLentYetToReceive - totalBorrowedYetToRevert,
  };
};


export const calculateFriendWiseNetValues = (transactions) => {
  const currentMonth = new Date().getMonth();
  const friendBalances = {};

  transactions.forEach((transaction) => {
    const transactionMonth = new Date(transaction.date).getMonth();
    if (transactionMonth === currentMonth) {
      const { amount, type, friend } = transaction;
      const amountValue = parseFloat(amount);

      if (!friendBalances[friend.phone]) {
        friendBalances[friend.phone] = {
          name: friend.name,
          phone: friend.phone,
          lent: 0,
          borrowed: 0,
          netBalance: 0,
        };
      }

      if (type === "CREDIT") {
        friendBalances[friend.phone].lent += amountValue;
      } else if (type === "DEBIT") {
        friendBalances[friend.phone].borrowed += amountValue;
      }

      friendBalances[friend.phone].netBalance =
        friendBalances[friend.phone].lent -
        friendBalances[friend.phone].borrowed;
    }
  });

  return friendBalances;
};
