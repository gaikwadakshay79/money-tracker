import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Friends() {
  const friends = useSelector((state) => state.friends.list);

  return (
    <div className="friends">
      <h2>Friends List</h2>
      <Link to="/new-friend" className="btn btn-primary mb-2">
        Add New Friend
      </Link>
      <ul>
        {friends.map((f) => (
          <li key={f.phone}>{f.name} - {f.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;
