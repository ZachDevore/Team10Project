import React, { useState } from "react";
import { CardNumber, ExpirationDate, CVV, PostalCode, SqPaymentForm } from 'react-square-payment-form';
import 'react-square-payment-form/lib/default.css';

const CheckoutPage = () => {
  const [errorMessages, setErrorMessages] = useState([]);

  const onPaymentFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessages([]);
    const paymentForm = event.target;
    const applicationId = 'APPLICATION_ID';
    const locationId = 'LOCATION_ID';

    window.Square.paymentForm(applicationId, locationId)
      .requestCardNonce()
      .then((nonce) => {
        // Send the nonce to your server to complete the payment
        console.log(nonce);
      })
      .catch((error) => {
        setErrorMessages([error.message]);
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form id="payment-form" onSubmit={onPaymentFormSubmit}>
        <CardNumber />
        <ExpirationDate />
        <CVV />
        <PostalCode />
        <button id="pay-button" type="submit">Pay</button>
      </form>
      <div className="error-messages">
        {errorMessages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;

