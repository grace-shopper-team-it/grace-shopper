import React from 'react';
import { connect } from 'react-redux';
import {fetchOrders} from '../../store/orders'

//things I need this component to do:
//render a list of orders in the database
//allow filtering (or sorting) based on status and order id
//link to single order page (or show single order details in a drop-down fashion
//so....should this have any kind of state on it?

class AllOrders extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return <h1>All Orders</h1>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders:
  }
}

export default AllOrders
