import React from 'react';
import { connect } from 'react-redux';
import { updateUserThunk } from '../../store/user.admin';
import './ResetPassword.css';

class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      confirmation: false,
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.handleData();
  };
  handleData = async () => {
    await this.props.resetPassword(this.props.userId, this.state);
    this.setState({ confirmation: true });
  };
  handleChange = event => {
    this.setState({
      password: event.target.value,
    });
  };
  render() {
    const { password } = this.state;
    if (this.state.confirmation) {
      return <div className="alert alert-warning">Password Reset</div>;
    }
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
      return dispatch(updateUserThunk(userId, formData));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(ResetPassword);
