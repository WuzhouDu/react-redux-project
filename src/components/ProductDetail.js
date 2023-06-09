import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector(state => state.product);
    const {title, image, price, category, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {
                console.log("Err: ", err);
            });
        console.log("response: ", response);
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }
    , []);
    console.log("Product: ", product);
    
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <button class="ui basic loading button">Loading</button>
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
                            <div class="ui animated button" tabindex="0">
                                <div class="hidden content">Shop</div>
                                <div class="visible content">
                                    <i class="shop icon"></i>
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