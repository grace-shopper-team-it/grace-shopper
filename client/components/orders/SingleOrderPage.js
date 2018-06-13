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
    if (!this.props.orderFromUser) {
      await this.props.getOrder(this.props.match.params.id);
    }
  }

  render() {
    // const order = this.props.order.products
    //   ? this.props.order
    //   : { products: [] };
    const order = this.props.orderFromUser
      ? this.props.orderFromUser
      : this.props.order;
    if (!order.products) return <div>LOADING...</div>;
    const totalCost = order.products.reduce((acc, curr) => {
      return (acc +=
        Number(curr.productOrder.price) *
        Number(curr.productOrder.cartQuantity));
    }, 0);
    let products = order.products;
    const { currentUser } = this.props;
    const [date, time] = order.createdAt
      ? order.createdAt.split('T')
      : [undefined, undefined];
    return (
      <div className="container">
        <h1>Order Id #{order.id}</h1>
        {currentUser.isAdmin && (
          <div className='container'>
            <span>Update Order Status</span>
            <span><StatusDropDown
              order={this.props.order}
              updateOrder={this.props.updateOrder}
            /></span>
          </div>
        )}
        <ul>
        <li>Status: {order.status} </li>
        {order.guestId && <li>GuestId: {order.guestId}</li>}
        {order.userId && <li>UserId: {order.userId} </li>}
        <li>Date: {date} </li>
        <li>Time: {time ? time.slice(0, 8) : undefined} </li>
        <li>Total cost: ${totalCost} </li>
        </ul>
        <div className='orderProducts container'>
        <p><strong>Products</strong></p>
          {products.length ? products.map(product => {
            return (
              <ul key={product.id}>
                <li>Name: {product.name} </li>
                <li>Id: {product.id}
                <Link to={`/products/${product.id}`}>
                  <span> (view product) </span>
                </Link></li>
                <li>
                  {' '}
                  Quantity: {product.productOrder.cartQuantity}{' '}
                </li>
                <li>Price: {product.productOrder.price} </li>
              </ul>
            );
          }): <span>Weird. No products associated with this order</span>}
        </div>
        {currentUser.isAdmin && (
          <div className='container'>
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
