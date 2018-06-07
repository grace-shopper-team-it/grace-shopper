import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Cart = (props) => {
  console.log('testTEwst')
  const items = props.cart.cart
  console.log(items)
  return (
    <div>
    <h1> Cart </h1>
    {
      items.map(product => 
       <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      )
    }
    </div>
  )
}


const mapState = (state) => {
  return {
    cart: state.cart
  }
}

// const mapDispatchToProps = function (dispatch) {
//   return {
//     fetchInitialCart: () => {
//       dispatch(fetchCart())
//     }
//   }
// }

export default connect(
  mapState,
  null
)(Cart)
