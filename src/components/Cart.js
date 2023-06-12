import { addProductToCart, removeProductFromCart, clearCart  } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cartProducts.cartProducts);
    console.log("cartProducts: ", cartProducts);

    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default Cart;