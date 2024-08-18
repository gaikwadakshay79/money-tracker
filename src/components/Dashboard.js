import React from "react";
import { useSelector } from "react-redux";
import { calculateCurrentMonthTotals } from "../utils/calculateTotals";

function Dashboard() {
  const transactions = useSelector((state) => state.transactions.list);
  const {
    totalLentYetToReceive,
    totalBorrowedYetToRevert,
    overallBalance,
    friendBalances,
  } = calculateCurrentMonthTotals(transactions);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div
        className={`balance ${overallBalance < 0 ? "negative" : "positive"}`}
      >
        ₹ {overallBalance}
      </div>
      <div className="balance-details">
        <div>Total amount lent but not yet received. </div>
        <div
          className={`balance ${
            totalLentYetToReceive > 0 ? "negative" : "positive"
          }`}
        >
          ₹ {Math.abs(totalLentYetToReceive)}
        </div>
      </div>
      <div className="balance-details">
        <div>Total amount borrowed but not yet reverted. </div>
        <div
          className={`balance ${
            totalBorrowedYetToRevert > 0 ? "negative" : "positive"
          }`}
        >
          ₹ {totalBorrowedYetToRevert}
        </div>
      </div>
      <div className="friendList">
        {Object.values(friendBalances).map(({ name, netBalance }) => {
          const balanceClass =
            netBalance < 0 ? "negativeBalance" : "positiveBalance";

          return (
            <div key={name} className="friendItem">
              <span className="friendName">{name}:</span>
              <span className={`friendBalance ${balanceClass}`}>
                ₹ {Math.abs(netBalance)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
