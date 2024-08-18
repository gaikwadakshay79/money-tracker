import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Transactions() {
  const transactions = useSelector((state) => state.transactions.list);
  const navigate = useNavigate();

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type} - ₹{transaction.amount} - {transaction.description} ({transaction.friend})
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary floating-button"
        onClick={() => navigate('/new-transaction')}
      >
        Add Transaction
      </button>
    </div>
  );
}

export default Transactions;
