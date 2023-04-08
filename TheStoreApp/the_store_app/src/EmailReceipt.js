import React from 'react';

function EmailReceipt({ order }) {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Order Number: {order.orderNumber}</p>
      <p>Order Date: {order.orderDate}</p>
      <h3>Shipping Address:</h3>
      <p>{order.shippingAddress}</p>
      <h3>Billing Address:</h3>
      <p>{order.billingAddress}</p>
      <h3>Items:</h3>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <h3>Total:</h3>
      <p>{order.total}</p>
    </div>
  );
}

class App extends React.Component {
  render() {
    const order = {
      orderNumber: '1234',
      orderDate: '2023-04-06',
      shippingAddress: '123 Main St, Raleigh USA',
      billingAddress: '123 Main St, Raleigh USA',
      items: [
        { id: 1, name: 'Item 1', price: '$10.00' },
        { id: 2, name: 'Item 2', price: '$20.00' },
        { id: 3, name: 'Item 3', price: '$30.00' },
      ],
      total: '$60.00',
    };
  
    return (
      <div>
        <EmailReceipt order={order} />
      </div>
    );
  }
}

export default App;
