import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders, updateOrderInDB } from '../../store/orders';
import { SingleOrderItem } from './SingleOrderItem';

//things I need this component to do:
//render a list of orders in the database
//allow filtering (or sorting) based on status and order id
//link to single order page (or show single order details in a drop-down fashion
//so....should this have any kind of state on it?
//view details or edit button
//export this into index

//am exporting this class as well as default exporting in order to make it easier to test

//okay so now this should render a list of single orders....
//so how would I do filtering....?

export class AllOrders extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    props.getOrders();
  }

  render() {
    return (
      <div className='allOrders'>
        <h1>All Orders</h1>
        {props.orders.map(order => {
          return (
            <SingleOrderItem order={order} updateOrder={props.updateOrder} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
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
