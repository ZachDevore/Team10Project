import React from 'react';
import {useGlobalState, stateCart } from '../globalState';
import { useEffect, useState } from 'react';
import addProductToCart, { deleteProduct, setProductQuantity } from './CartUtil';

export default function CartRow (props) {
    const cartIndex = props.cartIndex;
    const [cartData, setCartData] = useGlobalState(stateCart);
    const cartItem = cartData.cartItems[cartIndex];
    //alert(JSON.stringify(cartData));
    //alert(cartIndex);
    //alert(JSON.stringify(cartItem.product));
    return (
        <>
            <table className="item" style={{borderBottom: "1px solid white"}}>
                <colgroup>
                    <col style={{width: "40px"}}/>
                    <col style={{width: "400px"}}/>
                    <col style={{width: "80px"}}/>
                    <col style={{width: "80px"}}/>
                    <col style={{width: "25px"}}/>
                </colgroup>
                <tbody>
                <tr className="item">
                    <td className="img"><img style={{width: "40px", height:"40px"}} src={cartItem.product.Image}/></td>
                    <td className="desc">
                        <table>
                            <tr>
                                <td style={{paddingLeft: "5px"}}>{cartItem.product.ProductName}</td>
                                <td style={{paddingLeft: "5px"}}>${cartItem.product.ProductPrice.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    {cartItem.product.ProductDesciption}
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td className="qty"><input type="number" min="1" max="100" step="1" value={cartItem.quantity} style={{width:"5em"}} 
                    onChange={e => {
                        setProductQuantity(cartData, cartItem.product, parseInt(e.target.value), setCartData)
                    }}></input></td>
                    <td className="total" style={{textAlign: "right", paddingRight: "5px"}}>${(cartItem.lineItemTotal).toFixed(2)}</td>
                    <td><img src="img/delete.png" style={{cursor: "pointer", padding: "5px"}} 
                    onClick={e => {
                        deleteProduct(cartData, cartItem.product, setCartData)
                    }}/></td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
