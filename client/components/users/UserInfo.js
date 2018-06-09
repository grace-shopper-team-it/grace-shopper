import React from 'react';

const UserInfo = props => {
  const { user } = props;
  return (
    <div className="user-info">
      <h3>Name: {`${user.firstName} ${user.lastName}`}</h3>
      <h4>Email: {user.email}</h4>
    </div>
  );
};

export default UserInfo;
