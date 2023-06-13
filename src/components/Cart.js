import { addProductToCart, removeProductFromCart, clearCart  } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cartProducts.cartProducts);
    if (cartProducts.length === 0) {
        const cartProductsFromSessionStorage = JSON.parse(sessionStorage.getItem('cartProducts'));
        cartProductsFromSessionStorage && dispatch(addProductToCart(cartProductsFromSessionStorage));
    }
    console.log("cartProducts: ", cartProducts);
    const renderCart = cartProducts.map((product) => {
        return (
        <tr key={product.id}>
            <td>
                <img className="ui small image" alt={product.title} src={product.image} />
            </td>
            <td >
                <div className="header">{product.title}</div>
            </td>
            <td className="center aligned">
                <p className="single line">{product.rating.rate}</p>
            </td>
            <td className="center aligned">
                {product.price}
            </td>
            <td>{product.description}</td>
            <td>
              <div className="ui vertical labeled icon buttons">       
                <button className="ui small vertical attached button" onClick={() => {
                    dispatch(removeProductFromCart(product));
                    alert("Purchase successful!");
                  }}>
                  <i className="cart icon"></i>
                  Purchase</button>
                <div className="or"></div>
                <button className="ui small vertical attached button" onClick={() => {dispatch(removeProductFromCart(product))}}>
                  <i className="trash icon"></i>
                  Romove</button>
              </div>

            </td>
        </tr>
        )
    });
    const totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);

    console.log("cartProducts: ", cartProducts);

    return (
      <div className='ui container'>
      <table className="ui celled padded unstackable table">
        <thead>
          <tr>
          <th className="center aligned">Image</th>
          <th className="center aligned">Title</th>
          <th className="center aligned">Rating</th>
          <th className="center aligned">Price</th>
          <th className="center aligned">Description</th>
          <th className="center aligned">Operation</th>
        </tr></thead>
        <tbody>
          {cartProducts.length === 0 
              ? <h1>Nothing in the cart...</h1> 
              : renderCart}
        </tbody>
        <tfoot>
          <tr><th colSpan="6">
            <div className="ui right floated buttons">
              <button className="ui positive animated fade button" onClick={() => {
                  if (cartProducts.length === 0) return;
                  dispatch(clearCart());
                  alert("Purchase successful!");
                
              }}>
                <div className="visible content">Pruchase All</div>
                <div className="hidden content">
                  $ {totalPrice}
                </div>
              </button>
              <div className="or"></div>
              <button className="ui negative button" onClick={() => {dispatch(clearCart())}}>
                Clear Cart
              </button>
            </div>
          </th>
        </tr></tfoot>
      </table>
      </div>
    )
}

export default Cart;