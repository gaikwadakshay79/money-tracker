import React from 'react';

const InitialsIcon = ({ name }) => {
  // Function to extract initials from the name
  const getInitials = (name) => {
    const names = name.split(' ');
    const initials = names.map((n) => n[0].toUpperCase()).join('');
    return initials;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
      style={{
        width: '50px',
        height: '50px',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      {getInitials(name)}
    </div>
  );
};

export default InitialsIcon;