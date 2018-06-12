import React from 'react';

class PaymentForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <h2>THIS IS NOT SECURE</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="credit-card">Credit Card Number</label>
            <input
              id="credit-card"
              name="credit-card"
              className="form-control"
            />
          </div>
          <h2>Shipping Address</h2>
        </form>
      </div>
    );
  }
}
