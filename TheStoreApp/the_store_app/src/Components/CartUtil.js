/* FOR REFERENCE:

cartData {
  count: 1,      // Number of cartItems
  total: 0.0,    // Value of all items currently in the cart
  cartItems: [], // List of items currently in the cart
        quantity: qty, 
        lineItemTotal: lineItemTotal}); 
        product: productData, 
            "ProductName": "name",
            "ProductPrice": 0,
            "ProductDescription": "desc",
            "Availability": true,
            "ReOrderAmount": 0,
            "ReOrderNotification": 0,
            "InitialQuantity": 0,
            "Supplier": "supplier",
            "Image": ""
}|

*/



/**
 * Add the given product to the global cart with the given quantity. If the product
 * is already in the cart, it's quantity is updated, otherwise this product is added
 * to the cart. 
 * 
 * If the setCartData() function is supplied, it will be called with new cart data after
 * the update.
 * 
 * @param {} cartData -- current global cart state data
 * @param {*} productData -- product to be added/updated
 * @param {*} qty -- quantity to add
 * @param {*} setCartData -- global state SET function
 * @returns -- updated cart data
 */

export default function addProductToCart (cartData, productData, qty, setCartData) {

    // Update the global cart data by cloning, updating, and setting
    let cd = JSON.parse(JSON.stringify(cartData)); // Deep copy global cart data
    let inCart = false;
    for (let i = 0; i < cd.cartItems.length; i++) {
        if (cd.cartItems[i].product.ProductID == productData.ProductID) {
            // This item is already in the cart, add more quantity to it
            cd.cartItems[i].quantity += qty;
            inCart=true;
            break;
        }
    }
    if (!inCart) {
        // This item was not in the cart, add it now
        cd.cartItems.push({
            product: productData, 
            quantity: qty, 
            lineItemTotal: 0.0 // This will be recalculated
        }); 
    }

    // Update all the calculated values in the cart
    updateCartTotals(cd);

    // Update global cart state (causes rerender of dependant UI components)
    setCartData(cd);

    // Return the new cart data in case the caller needs it
    return cd;
}

/**
 * Sets the quantity of the given product in the cart. The product must already
 * exist in the cart.
 * 
 * @param {*} cartData -- global cart state data
 * @param {*} productData -- product to update quantity of
 * @param {*} qty -- new quantity for the given product
 * @param {*} setCartData -- function to update global cart state
 * @returns 
 */

export function setProductQuantity(cartData, productData, qty, setCartData) {

    // Update the global card data by cloning, updating, and setting
    let cd = JSON.parse(JSON.stringify(cartData)); // Deep copy global cart data
    for (let i = 0; i < cd.cartItems.length; i++) {
        if (cd.cartItems[i].product.ProductID == productData.ProductID) {
            cd.cartItems[i].quantity = qty; // set new quantity
            updateCartTotals(cd);           // update cart totals
            setCartData(cd);                // update global cart state
            return cd;
        }
    }
    alert("ERROR: Product ID '"+productData.ProductID+"' not found in cart -- CartUtil.setProductQuantity()")
    return null;
}

/**
 * Deletes the given product from the cart. The product must exist in the cart.
 * 
 * @param {*} cartData -- current global cart state
 * @param {*} productData -- product to be removed
 * @param {*} setCartData -- function to update global cart state
 * @returns 
 */
export function deleteProduct(cartData, productData, setCartData) {

    // Update the global card data by cloning, updating, and setting
    let cd = JSON.parse(JSON.stringify(cartData)); // Deep copy global cart data
    for (let i = 0; i < cd.cartItems.length; i++) {
        if (cd.cartItems[i].product.ProductID == productData.ProductID) {
            cd.cartItems.splice(i, 1); // Remove this item
            updateCartTotals(cd);      // update cart totals
            setCartData(cd);           // update globall cart state
            return cd;
        }
    }
    alert("ERROR: Product ID '"+productData.ProductID+"' not found in cart -- CartUtil.deleteProduct()")
    return null;
}



/**
 * Update all individual product line item subtotals, and the cart total and count of items.
 * This is a local (not exported) function the updates the given cart object. It does not
 * read or update any global cart state.
 * 
 * @param {} cartData 
 */
function updateCartTotals(cart) {
    cart.count = 0;
    cart.total = 0.0;
    for (let i = 0; i < cart.cartItems.length; i++) {
        let item = cart.cartItems[i];
        // Calc subtotal for this line item
        item.lineItemTotal = item.quantity * item.product.ProductPrice;
        // Update cart totals
        cart.count += item.quantity;
        cart.total += item.lineItemTotal;
    }
}