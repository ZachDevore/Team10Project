import React from 'react';
import ReactDOM from 'react-dom';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 },
      ],
      cart: [],
    };
  }

  addToCart = (item) => {
    const { cart } = this.state;
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { ...item, quantity: 1 };
      cart.push(newItem);
    }

    this.setState({ cart });
  };

  render() {
    const { items, cart } = this.state;

    return (
      <div className="container">
        <div className="items">
          <h2>Items</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.price}$</span>
                <button onClick={() => this.addToCart(item)}>Add to cart</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.quantity} x {item.price}$</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ShoppingCart />, document.getElementById('root'));
