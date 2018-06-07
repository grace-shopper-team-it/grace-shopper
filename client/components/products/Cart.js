import React, { Component } from 'react'
import { connect } from 'react-redux'


let items = [
  {
    id: 1,
    name: 'clown',
    rating: 3.5,
    description: 'eiugrh fIOWAHGUIRW ofejhguieroils',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41PKN8W5CDL.jpg',
    stock: 5,
    price: 30,
    category: 'creepy',
  },
  {
    id: 2,
    name: 'nice clown',
    rating: 3.0,
    description: 'eiugrh fIOWAHGUIRW',
    imageUrl: 'https://i.ebayimg.com/images/g/LFUAAOSwKtlWjzVd/s-l300.jpg',
    stock: 3,
    price: 20,
    category: 'creepy',
  },
  {
    id: 3,
    name: 'nice toy',
    rating: 2.0,
    description: 'eiugrh fIOWAHGUIRW',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZZNPfu7n3fI5Zygu0qGXc1mtuXYGCD2oNGq-WxZ3hMBhYbhR',
    stock: 3.8,
    price: 25,
    category: 'nice',
  },
];

export class Cart extends Component {
  constructor() {
    super()
    this.state = {
      ok: 'ok'
    }
  }

  componentDidMount () {
    try {
      this.props.fetchCart()
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const ok = this.state.ok
    console.log(ok)
    console.log('testTEwst')
    return (
      <div>
        <h1> Cart </h1>
        <h3>{items[0]}</h3>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    fetchInitialCart: () => {
      dispatch(fetchCart())
    }
  }
}

export default connect(
  mapState,
  mapDispatchToProps
)(Cart)
