import { stateCart, useGlobalState } from '../globalState';

export default function Summary () {
    const [cartData, setCartData] = useGlobalState(stateCart);

    return (
        <>
        <div style={{backgroundColor: "rgb(128, 58, 7)", border:"1px solid white" ,borderRadius: "10px", padding: "7px"}}>
            <table style={{width: "100%"}}>
                <colgroup>
                    <col style={{textAlign: "left"}}/>
                    <col style={{textAlign: "right"}}/>
                </colgroup>
                <tbody>
                    <tr>
                        <td colSpan="2" style={{textAlign: "center", fontWeight: "bold", fontSize: "120%"}}>Summary</td>
                    </tr>
                    <tr>
                        <td>Items</td>
                        <td style={{textAlign: "right"}}>{cartData.count}</td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td style={{textAlign: "right"}}>${cartData.total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td style={{textAlign: "right"}}>${(cartData.total*0.075).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td style={{textAlign: "right", borderBottom: "1px solid white"}}>${(cartData.total*0.05).toFixed(2)}</td>
                    </tr>
                    <tr style={{fontWeight: "bold"}}>
                        <td>Total</td>
                        <td><div style={{textAlign: "right"}}>${(cartData.total*1.125).toFixed(2)}</div></td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{textAlign: "right"}}>
                            <button style={{fontSize: "110%", fontWeight: "bold", marginTop: "5px"}}>Checkout</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}