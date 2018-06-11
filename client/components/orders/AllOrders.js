import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders, updateOrderInDB } from '../../store/order';
import { SingleOrderItem } from './SingleOrderItem';
import {store} from '../../store'

const statuses = ['Completed', 'Cancelled', 'Created', 'Processing'];

const state = store.getState()
console.log('state', state)

export class AllOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      orders: [],
    };
  }

  async componentDidMount() {
    if (this.props.currentUser.isAdmin) {
      await this.props.getOrders();
      this.setState({orders: this.props.orders ? this.props.orders : []})
    } else {
      this.props.history.push('/allProducts')
    }
  }

  handleChange = event => {
    this.setState({filter: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(() => {
      return {orders: this.props.orders.filter(order => {
        return order.status === this.state.filter
      })}
    })
  };

  clearStatus = () => {
    this.setState(() => {
      return {filter: '', orders: this.props.orders}
    })
  }

  render() {
    return (
      <div className="allOrders">
        <h1>All Orders</h1>
        <form
          className="form-group"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="filter">Search by Status</label>
          <select defaultValue='Choose Status'>
            <option>Choose Status</option>
            {statuses.map(status => {
              return <option key={status} value={status}>{status}</option>;
            })}
          </select>
          <button type='submit'>Submit</button><button onClick={() => {this.clearStatus()}} type='button'>Clear</button>
        </form>
        {this.state.orders.length ?
        this.state.orders.map(order => {
          return (
            <SingleOrderItem key={order.id}
              order={order}
              updateOrder={this.props.updateOrder}
            />
          );
        }) : <span>No matching orders</span>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    currentUser: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(fetchOrders()),
    updateOrder: (orderId, update) =>
      dispatch(updateOrderInDB(orderId, update)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllOrders);
