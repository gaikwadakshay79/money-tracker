import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addFriend } from '../redux/slices/friendsSlice';

function NewFriend() {
  const [friend, setFriend] = useState({ name: '', phone: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friends = useSelector((state) => state.friends.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!friends.find(f => f.phone === friend.phone)) {
      dispatch(addFriend(friend));
      setFriend({ name: '', phone: '' });
    }
    navigate('/friends');
  };

  return (
    <div className="new-friend">
      <h2>Add New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          value={friend.name}
          onChange={(e) => setFriend({ ...friend, name: e.target.value })}
          placeholder="Friend's Name"
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          value={friend.phone}
          onChange={(e) => setFriend({ ...friend, phone: e.target.value })}
          placeholder="Phone Number"
          required
        />
        <button type="submit" className="btn btn-primary">
          Add Friend
        </button>
      </form>
    </div>
  );
}

export default NewFriend;
