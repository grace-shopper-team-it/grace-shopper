import React from 'react';
import { connect } from 'react-redux';
import { updateUserThunk } from '../../store/user.admin';
import './ResetPassword.css';

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
      <form onSubmit={this.handleSubmit} className="reset-form">
        <label className="reset-label">
          New Password
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className="btn btn-warning">
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
