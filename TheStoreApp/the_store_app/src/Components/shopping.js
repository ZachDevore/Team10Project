import React, { useState } from 'react';

function ShoppingCart() {
  // State for the shopping cart items
  const [cart, setCart] = useState([
    { id: 1, name: 'Item 1', price: 9.99, quantity: 2 },
    { id: 2, name: 'Item 2', price: 19.99, quantity: 1 },
    { id: 3, name: 'Item 3', price: 29.99, quantity: 3 },
  ]);

  // State for the cart total
  const [total, setTotal] = useState(0);

  // Function to update the cart and total when an item quantity changes
  function updateItemQuantity(itemId, newQuantity) {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  }

  // Function to remove an item from the cart
  function removeItemFromCart(itemId) {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  }

  // Function to calculate the total cost of the items in the cart
  function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Function to handle the checkout button click
  function handleCheckout() {
    alert('Proceeding to checkout!');
    // Add code to handle the checkout process here
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        <h3>Cart Total: ${total.toFixed(2)}</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x{' '}
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
              />{' '}
              <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;

