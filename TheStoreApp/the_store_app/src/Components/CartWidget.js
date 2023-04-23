import React from 'react';
import { stateCart, useGlobalState } from '../globalState';
import { useNavigate } from 'react-router-dom';
import '../App.css'


export default function CartWidget(props) {
    const [cartData, setCartData] = useGlobalState(stateCart);
    const navigate = useNavigate();

    return (<>
        <div className='cart-widget' style={{display: "inline-block",border: cartData.count==0 ? "2px solid black" : "2px solid rgb(255,106,0)"}}
            onClick={(e) => {
                    e.stopPropagation();
                    if (cartData.count == 0) {
                        alert("Cart is empty");
                        return;
                    }
                    navigate("cart"); // Use router to goto the cart page
                }}
        >
            <table>
                <tr >
                    <td><img src="../img/cart.png"></img></td>
                    <td>{cartData.count} items<br></br>${cartData.total.toFixed(2)}</td>
                </tr>
            </table>
        </div>
    </>);
}