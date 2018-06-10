import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders, updateOrderInDB } from '../../store/orders';
import { StatusDropDown } from './StatusDropDown';

//so here is where I need to list out the date and other details...so how do I do that exactly? Also, I'm doing this all out of order. AND IT MATTERS!
//might want to use bootstrap here...with columns and rows and things?
//+a view details button + a drop down change status

export class SingleOrderItem extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="orderItem">
        <ul className="orderListItem" />
        <li>{props.order.id} {props.order.status} {props.order.userId} {props.order.guestId} <button>View Details</button> <StatusDropDown updateOrder={props.updateOrder}/></li>
      </div>
    );
  }
}
