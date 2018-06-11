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
          Order Id: {order.id} Order Status: {order.status} Order userId:{' '}
          {order.userId} Order GuestId: {order.guestId}{' '}
          <Link to={`/orders/${order.id}`}>
            <button>View Details</button>
          </Link>
          <StatusDropDown updateOrder={this.props.updateOrder} order={order} />
        </li>
      </div>
    );
  }
}
