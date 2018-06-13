import React from 'react';
import { connect } from 'react-redux';
import { updateUserThunk } from '../../store/user.admin';

class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.resetPassword(this.props.userId, this.state);
  };
  handleChange = event => {
    this.setState({
      password: event.target.value,
    });
  };
  render() {
    const { password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-danger">
          Reset
        </button>
      </form>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    resetPassword: (userId, formData) => {
      dispatch(updateUserThunk(userId, formData));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(ResetPassword);
