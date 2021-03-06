import React from 'react';
import { connect } from 'react-redux';
import { updateUserThunk } from '../../store/user.admin';

class UserStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      isAdmin: false,
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const userId = this.props.selectedUser.id;
    this.props.updateStatus(userId, { isAdmin: this.state.isAdmin });
  };
  handleChange = event => {
    this.setState({
      isAdmin: event.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="isAdmin">Change User Status</label>
        <select name="isAdmin" id="isAdmin" onChange={this.handleChange}>
          <option value={false}>------------</option>
          <option value={true}>Administrator</option>
          <option value={false}>Regular User</option>
        </select>
        <button className="btn btn-success" type="submit">
          Save Changes
        </button>
      </form>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    updateStatus: (userId, formData) =>
      dispatch(updateUserThunk(userId, formData)),
  };
};

export default connect(
  null,
  mapDispatch
)(UserStatus);
