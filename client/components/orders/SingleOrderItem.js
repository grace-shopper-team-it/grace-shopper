import React from 'react';
import {Link} from 'react-router-dom'
import StatusDropDown from './StatusDropDown';

export class SingleOrderItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const order = this.props.order;
    return (
      <div className="orderItem">
        <ul className="orderListItem" />
        <li>
          Order Id: {order.id} Status: {order.status} {order.userId ? <span>User: {order.userId} </span> : <span>Guest User: {order.guestId} </span>}
          <Link to={`/orders/${order.id}`}>
            <button>View Order Details</button>
          </Link>
          <StatusDropDown updateOrders={this.props.updateOrders} updateOrder={this.props.updateOrder} order={order} />
        </li>
      </div>
    );
  }
}
