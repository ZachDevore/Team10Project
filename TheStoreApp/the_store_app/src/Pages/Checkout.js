import { stateCart, useGlobalState } from '../globalState';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../Components/CartUtil';

export default function Checkout() {
    const navigate = useNavigate();
    const [cartData, setCartData] = useGlobalState(stateCart);

    return (
        <>
            <div>
                <table style={{borderRight: "1px solid white"}}>
                    <colgroup>
                        <col style={{width: "50%"}}/>
                        <col style={{width: "50%"}}/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td colSpan="2" style={{textAlign: "left", borderBottom: "1px solid white"}}>
                                <b>Card Info</b><br/>
                                <input placeholder="Card Number" type="text" size="40"/><br/>
                                <input placeholder="CSV" type="text" size="10"/>
                                <input placeholder="Exp" type="text" size="25"/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left"}}>
                                <b>Shipping</b><br/>
                                <input placeholder="Address" type="text" size="40"/><br/>
                                <input placeholder="City" type="text" size="25"/>
                                <input placeholder="State" type="text" size="10"/><br/>
                                <input placeholder="ZIP" type="text" size="20"/>
                            </td>
                            <td style={{textAlign: "right", verticalAlign: "bottom"}}>
                                <button style={{fontSize: "110%", fontWeight: "bold"}}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        emptyCart(cartData, setCartData);
                                        navigate("/confirmation");
                                    }}
                                >Finish Checkout</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

/*Checkout Page <br/>
<button 
onClick={(e) => {
    e.stopPropagation();
    emptyCart(cartData, setCartData);
    navigate("/confirmation");
}}
>Finish Checkout</button>*/