import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = props => {
  const { user } = props;
  return (
    <div className="user-info">
      <Link to={`/users/${user.id}`}>
        <h3>Name: {`${user.firstName} ${user.lastName}`}</h3>
      </Link>
      <h4>Email: {user.email}</h4>
    </div>
  );
};

export default UserInfo;
