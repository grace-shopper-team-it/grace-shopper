import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatusDropDown from './StatusDropDown';
import { Link } from 'react-router-dom';
import { updateOrderInDB, fetchOrder } from '../../store/order';

export class SingleOrderPage extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    const orderId = this.props.match
      ? this.props.match.params.id
      : this.props.orderId;
    await this.props.getOrder(orderId);
  }

  render() {
    const order = this.props.order.products
      ? this.props.order
      : { products: [] };
    const totalCost = order.products.reduce((acc, curr) => {
      return (acc +=
        Number(curr.productOrder.price) * Number(curr.productOrder.quantity));
    }, 0);
    let products = order.products;
    const { currentUser } = this.props;
    return (
      <div>
        <h1>View Order Details</h1>
        <span>Id: {order.id} </span>
        <span>Status: {order.status} </span>
        {order.guestId && <span>GuestId: {order.guestId} </span>}
        {order.userId && <span>UserId: {order.userId} </span>}
        <span>Date: {order.createdAt} </span>
        <span>Total cost: {totalCost} </span>
        <p>Products</p>
        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <span>Product id: {product.id} </span>
                </Link>
                <span>Product name: {product.name} </span>
                <span> Product quantity: {product.productOrder.quantity} </span>
                <span>Product price: {product.productOrder.price} </span>
              </li>
            );
          })}
        </ul>
        {currentUser.isAdmin && (
          <StatusDropDown
            order={this.props.order}
            updateOrder={this.props.updateOrder}
          />
        )}
        {currentUser.isAdmin && (
          <div>
            <Link to="/orders">Back to All Orders</Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order.order,
    currentUser: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateOrder: (orderId, status) =>
      dispatch(updateOrderInDB(orderId, status)),
    getOrder: orderId => dispatch(fetchOrder(orderId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleOrderPage);
