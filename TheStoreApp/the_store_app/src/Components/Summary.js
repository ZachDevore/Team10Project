import { stateCart, useGlobalState } from '../globalState';

export default function Summary () {
    const [cartData, setCartData] = useGlobalState(stateCart);

    return (
        <>
            <table style={{backgroundColor: "orange"}}>
                <tbody>
                    <tr>
                        <td colSpan="2">Summary</td>
                    </tr>
                    <tr>
                        <td>Items</td>
                        <td>{cartData.count}</td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td>${cartData.total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>${(cartData.total*0.075).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>${(cartData.total*0.05).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td><div>${(cartData.total*1.125).toFixed(2)}</div></td>
                    </tr>
                    <tr>
                        <td>
                            <button>Checkout</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}