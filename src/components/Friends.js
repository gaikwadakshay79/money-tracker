import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InitialsIcon from "../utils/InitialsIcon";

function Friends() {
  const friends = useSelector((state) => state.friends.list);
  const navigate = useNavigate();

  return (
    <div className="friends">
      <h2>Friends List</h2>
      <div className="friends-list">
        {friends.map((f) => (
          <div className="friend" key={f.phone}>
            <InitialsIcon name={f.name} />
            <div className="friend-details">
              <div className="friend-details-name">{f.name}</div>
              <div className="friend-details-phone">{f.phone}</div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary floating-button"
        onClick={() => navigate("/new-friend")}
      >
        Add New Friend
      </button>
    </div>
  );
}

export default Friends;
