import React from 'react';
import { connect } from 'react-redux';
import {fetchOrders, updateOrderInDB} from '../../store/orders'

//things I need this component to do:
//render a list of orders in the database
//allow filtering (or sorting) based on status and order id
//link to single order page (or show single order details in a drop-down fashion
//so....should this have any kind of state on it?
//view details or edit button
//export this into index

//am exporting this class as well as default exporting in order to make it easier to test

export class AllOrders extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return <h1>All Orders</h1>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(fetchOrders()),
    updateOrder: (orderId, update) => dispatch(updateOrderInDB(orderId, update))
  }
}

export default connect(null, mapDispatchToProps)(AllOrders)
