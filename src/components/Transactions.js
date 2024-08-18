import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Transactions() {
  const transactions = useSelector((state) => state.transactions.list);
  const navigate = useNavigate();

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <div className="transaction-wrapper">
        {transactions.map((transaction, index) => (
          <div key={index}>
            <div className={`transaction ${transaction.type.toLowerCase()}`}>
              <div className="transaction-details">
                <div className="transaction-details-name">{transaction.friend.name}</div>
                <div className="transaction-details-description">

{transaction.description}</div> <div className="transaction-details-description">
                {new Date(transaction.date).toLocaleString()}
              </div>


              </div>
              <div className={`transaction-amount ${transaction.type.toLowerCase()}`}>
                ₹ {transaction.amount} <span className="transaction-type">{transaction.type.substring(0, 2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary floating-button"
        onClick={() => navigate("/new-transaction")}
      >
        Add Transaction
      </button>
    </div>
  );
}

export default Transactions;
