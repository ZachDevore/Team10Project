import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function PayPalPmt() {
    return(
        <>
        <PayPalScriptProvider
        // PLEASE DO NOT ATTATCH THIS TO A REAL PAYPAL ACCOUNT
        // options={{
        //   "client-id":
        //     "Place holder client id"
        // }}
        >
            <PayPalButtons 

            // create the order 
            // createOrder={(data, actions) => {
            //   return actions.order.create({
            //     purchase_units: [
            //       {
            //         amount: {
            //           values: "420.69",
            //         },
            //       },
            //     ],
            //   });
            // }}

            // pass onApprove prop so show a succesful order
            // onApprove={(data, actions) => {
            //   return actions.order.capture().then(function (details) {
            //     //Show that the transaction was succesful
            //     alert(
            //       "Transaction completed by " + details.payer.name.given_name
            //     );
            //   });
            // }}
            />
    </PayPalScriptProvider>
        </>
    );
}