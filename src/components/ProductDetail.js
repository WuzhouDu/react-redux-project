import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, removeSelectedProduct, setPath, addProductToCart } from "../redux/slice";

const ProductDetail = () => {
    const product = useSelector(state => state.productSeen.selectedProduct);
    const dispatch = useDispatch();
    if (product === {}) {
        const productSeenFromSession = JSON.parse(sessionStorage.getItem('productSeen'));
        productSeenFromSession && dispatch(selectProduct(productSeenFromSession));
        console.log("read from session");
    }
    const productList = useSelector(state => state.allProducts.products);
    const [error, setError] = useState(null);
    const {title, image, price, category, description} = product;
    const {productId} = useParams();
    


    useEffect(() => {
        console.log("rendering product detail");
        const fetchProductDetail = async () => {
            if (parseInt(productId) > 20) {
                setError("Error: Product not found");
            }
            if (productList.length !== 0) {
                const product = productList.find(product => product.id === parseInt(productId));
                if (product) {
                    dispatch(selectProduct(product));
                    return;
                }
            }
            const response = await axios
                .get(`https://fakestoreapi.com/products/${productId}`)
                .catch(err => {
                    console.log("Err: ", err);
                    return null;
                });
            console.log("response: ", response);
            
            if (response) {
                dispatch(selectProduct(response.data));
            }
            else {
                setError('time out, try again');
            }
        };
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }
    , [dispatch, productId, productList]);
    
    return (
        error 
        ? <div className="ui red message">{error}</div> 
        :
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <button className="ui basic loading button">Loading</button>
            ) : (
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider"></div>
                    <div className="middle aligned row">
                        <div className="column">
                            <img src={image} alt='' className='ui fluid image' />
                        </div>
                        <div className="column">
                            <h1>{title}</h1>
                            <h2>
                                <div className="ui teal tag label">${price}</div>
                            </h2>
                            <h3 className="ui brown block header">
                                <p>{category}</p>
                            </h3>
                            <p>{description}</p>
                            <div className="ui animated button" tabIndex="0">
                                <div className="hidden content"><Link to='../cart' onClick={() => {dispatch(setPath('/cart')); dispatch(addProductToCart(product))}}>Add to Shopping Cart</Link></div>
                                <div className="visible content">
                                    <i className="shop icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </div>
    )
}

export default ProductDetail;