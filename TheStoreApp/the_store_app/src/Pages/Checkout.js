import { stateCart, useGlobalState } from '../globalState';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../Components/CartUtil';

export default function Checkout() {
    const navigate = useNavigate();
    const [cartData, setCartData] = useGlobalState(stateCart);

    return (
        <>
            <div>
                Checkout Page <br/>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        emptyCart(cartData, setCartData);
                        navigate("/confirmation");
                    }}
                >Finish Checkout</button>
            </div>
        </>
    )
}