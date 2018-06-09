import React from 'react';
import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import { getAllUsersThunk } from '../../store/user.admin';
// import history from './../../history';

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="container">
        {users.map(user => (
          <div key={user.id}>
            <UserInfo user={user} />
          </div>
        ))}
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.userAdmin,
    currentUser: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchUsers: () => dispatch(getAllUsersThunk()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(UserList);
