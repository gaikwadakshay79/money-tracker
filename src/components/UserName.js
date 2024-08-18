import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../redux/slices/userSlice';

function UserName() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserName(name));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3>Enter your name</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserName;
