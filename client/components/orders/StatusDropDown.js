import React, {Component } from 'react';

const statuses = ['Completed', 'Cancelled', 'Created', 'Processing'];

export default class StatusDropDown extends Component {
  constructor(){
    super()
    this.state = {
      status: ''
    }
  }

  handleChange = (event) => {
    this.setState({status: event.target.value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.updateOrder(this.props.order.id, this.state.status);
    if (this.props.updateOrders) await this.props.updateOrders()
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <select>
            {statuses.map(status => {
              return (
                <option key={status} name='status' value={status}>{status}</option>
              )
            })}
            </select>
          <button type='submit'>Update</button>
          </form>
        </div>
    )
  }
}
