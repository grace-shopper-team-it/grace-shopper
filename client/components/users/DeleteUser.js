import React from 'react';
import { connect } from 'react-redux';
import { deleteUserThunk } from '../../store/user.admin';

class DeleteUser extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      this.props.removeUser(this.props.userId);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit" className="btn btn-danger">
          Remove User
        </button>
      </form>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    removeUser: userId => dispatch(deleteUserThunk(userId)),
  };
};

export default connect(
  null,
  mapDispatch
)(DeleteUser);
