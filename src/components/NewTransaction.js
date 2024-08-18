
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTransaction } from '../redux/slices/transactionsSlice';

function NewTransaction() {
  const [transaction, setTransaction] = useState({ type: '', amount: '', description: '', friend: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friends = useSelector((state) => state.friends.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ ...transaction, date: new Date() }));
    navigate('/transactions');
  };

  return (
    <div className="new-transaction">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <select
          className="form-control mb-2"
          value={transaction.type}
          onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
          required
        >
          <option value="">Select Type</option>
          <option value="CREDIT">CREDIT</option>
          <option value="DEBIT">DEBIT</option>
        </select>
        <input
          type="number"
          className="form-control mb-2"
          value={transaction.amount}
          onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
          placeholder="Amount (INR)"
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          value={transaction.description}
          onChange={(e) => setTransaction({ ...transaction, description: e.target.value })}
          placeholder="Description"
          required
        />
        <select
          className="form-control mb-2"
          value={transaction.friend}
          onChange={(e) => setTransaction({ ...transaction, friend: e.target.value })}
          required
        >
          <option value="">Select Friend</option>
          {friends.map((friend) => (
            <option key={friend.phone} value={friend.phone}>
              {friend.name}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default NewTransaction;
