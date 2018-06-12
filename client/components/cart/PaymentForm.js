import React from 'react';
import history from '../../history';

class PaymentForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log('"payment" submitted');
    history.push('/confirmation');
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
          <h2>Billing Address</h2>

          <div className="form-group">
            <label htmlFor="address1">Address Line 1</label>
            <input
              type="text"
              id="address1"
              name="address1"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address2">Address Line 2</label>
            <input
              type="text"
              id="address2"
              name="address2"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipcode">Zipcode</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Complete Purchase
          </button>
        </form>
      </div>
    );
  }
}

export default PaymentForm;
