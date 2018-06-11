import React from 'react';
import { connect } from 'react-redux';
import { getUserInfoThunk } from '../../store/user.admin';
import UserInfo from './UserInfo';

class SingleUser extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.id;
    if (this.props.currentUser.id !== userId) {
      this.props.fetchUser(userId);
    }
  }
  render() {
    const { currentUser, selectedUser } = this.props;
    const userId = this.props.match.params.id;
    const userForView = currentUser.id !== userId ? selectedUser : currentUser;
    return (
      <div className="container">
        <UserInfo user={userForView} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    currentUser: state.user,
    selectedUser: state.userAdmin.selectedUser,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchUser: userId => dispatch(getUserInfoThunk(userId)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(SingleUser);