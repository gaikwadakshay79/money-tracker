import React from 'react';
import { useSelector } from 'react-redux';
import { calculateCurrentMonthTotals } from '../utils/calculateTotals';

function Dashboard() {
  const transactions = useSelector((state) => state.transactions.list);
  const { totalLent, totalPaidBack } = calculateCurrentMonthTotals(transactions);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div>Total Lent This Month: ₹{totalLent}</div>
      <div>Total Paid Back: ₹{totalPaidBack}</div>
    </div>
  );
}

export default Dashboard;
