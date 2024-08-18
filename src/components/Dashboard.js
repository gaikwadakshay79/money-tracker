import React from 'react';
import { useSelector } from 'react-redux';
import { calculateCurrentMonthTotals } from '../utils/calculateTotals';

function Dashboard() {
  const transactions = useSelector((state) => state.transactions.list);
  const {     totalLentYetToReceive,
    totalBorrowedYetToRevert,
    overallBalance } = calculateCurrentMonthTotals(transactions);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
  <div>{overallBalance}</div>

  <div>Total amount lent but not yet received. {totalLentYetToReceive}</div>
  <div>Total amount borrowed but not yet reverted. {totalBorrowedYetToRevert}</div>
    </div>
  );
}

export default Dashboard;
