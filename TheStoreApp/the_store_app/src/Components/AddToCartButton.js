import React from 'react';
import {useGlobalState, stateCart } from '../globalState';
import { useEffect, useState } from 'react';


export default function AddToCartButton(props) {
    const [cartData, setCartData] = useGlobalState(stateCart);
    const [quan, setQuan] = useState("1");  // Local state tracking the value of the quanity field (as a string)
    const productData = props.product;      // Get product object from properties pass in from parent

    return (<>
        <span style={{display:"inline-block",color:"black", backgroundColor:"rgb(255,106,0)", border:"1px solid rgb(255,106,0)", 
                    borderRadius:"5px", paddingLeft:"4px", paddingRight:"4px", paddingBottom:"3px", marginTop:"4px", cursor:"pointer"}}
            onClick={(e) => {
                if (e.target == e.currentTarget) { // Click on 'add to cart' button, not including the embedded quantity input field
                    e.stopPropagation();
                    // Calculate line item details
                    let qty = 1; // INPUT field returns values as strings
                    let lineItemTotal = productData.ProductPrice * qty

                    // Update the global card data by cloning, updating, and setting
                    let cd = JSON.parse(JSON.stringify(cartData)); // Deep copy global cart data
                    let inCart = false;
                    for (let i = 0; i < cd.cartItems.length; i++) {
                        if (cd.cartItems[i].product.ProductID == productData.ProductID) {
                            cd.cartItems[i].quantity ++;
                            cd.cartItems[i].lineItemTotal += productData.ProductPrice;
                            cd.count ++;
                            cd.total += productData.ProductPrice;
                            inCart=true;
                            break;
                        }
                    }
                    if (!inCart) {
                        cd.cartItems.push({  // Add this item, quantity, and line item total
                            product: productData, 
                            quantity: qty, 
                            lineItemTotal: lineItemTotal}); 
                            cd.total = cd.total + lineItemTotal; 
                            cd.count = cd.count + qty;
                    }
                    // Update cart totals

                    // Update global cart state with new state data
                    setCartData(cd); 

                    //debugger;
                    console.log("Added product to cart. Cart data is now:");
                    console.log(cd);
                }
            }}
        >
            Add <input type="number" min="1" max="100" step="1" value={quan} style={{width:"5em", display: "none"}} onChange={(e)=>setQuan(e.target.value)}></input> to cart
        </span>
    </>);
}