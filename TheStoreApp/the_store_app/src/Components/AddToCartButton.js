import React from 'react';
import {useGlobalState, stateCart } from '../globalState';
import { useEffect, useState } from 'react';
import addProductToCart from './CartUtil';



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
                    let cd = addProductToCart(cartData, productData, 1, setCartData)
                    
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