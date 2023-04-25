import CartList from "../Components/CartList";
import CartRow from "../Components/CartRow";
import Summary from "../Components/Summary";
import PayPalPmt from "../Components/PayPalPmt";
import { stateCart, useGlobalState } from '../globalState';

export default function Cart () {
    const [cartData, setCartData] = useGlobalState(stateCart);
    
    return (
        <>
            <div style={{margin: "100px"}} className="cart">
                <table>
                    <colgroup>
                        <col style={{width: "70%"}}/>
                        <col style={{width: "30%"}}/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <td className="itemList">
                            <CartList rows={cartData.cartItems} />
                        </td>
                        <td>
                            <div className="summary">
                                <Summary />
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <PayPalPmt />
            </div>
        </>
    )
}   
