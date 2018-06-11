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

  handleSubmit= (event) => {
    event.preventDefault();
    this.props.updateOrder(this.props.order.id, this.state.status);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <select>
            <option>Change Status</option>
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
