import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTransaction } from "../redux/slices/transactionsSlice";

function NewTransaction() {
  const [transaction, setTransaction] = useState({
    type: "",
    amount: "",
    description: "",
    friend: { name: "", phone: "" },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friends = useSelector((state) => state.friends.list);

  const handleFriendChange = (e) => {
    if(!e.target || !e.target.value) return;
    const selectedPhone = e.target.value;
    const selectedFriend = friends.find(
      (friend) => friend.phone === selectedPhone
    );
    setTransaction({
      ...transaction,
      friend: { name: selectedFriend.name, phone: selectedFriend.phone },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!transaction.type){
      alert("Please select transaction type")
    }
    if(!transaction.amount || transaction.amount < 1){
      alert("Please select valid transaction amount")
    }
    if(!transaction.description){
      alert("Please select valid transaction description")
    }
    if(!transaction.friend.phone){
      alert("Please select valid friend from list")
    }
    dispatch(addTransaction({ ...transaction, date: new Date() }));
    navigate("/transactions");
  };

  return (
    <div className="new-transaction">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <select
          className="form-control mb-2"
          value={transaction.type}
          onChange={(e) =>
            setTransaction({ ...transaction, type: e.target.value })
          }
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
          min={1}
          onChange={(e) =>
            setTransaction({ ...transaction, amount: e.target.value })
          }
          placeholder="Amount (INR)"
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          value={transaction.description}
          onChange={(e) =>
            setTransaction({ ...transaction, description: e.target.value })
          }
          placeholder="Description"
          required
        />
        <select
          className="form-control mb-2"
          value={transaction.friend.phone}
          onChange={handleFriendChange}
          required
        >
          <option value="">Select Friend</option>
          {friends.map((friend) => (
            <option key={friend.phone} value={friend.phone}>
              {friend.name} ({friend.phone})
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
