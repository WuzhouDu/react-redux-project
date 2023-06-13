import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slice";

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    if (products.length === 0) {
        const productsFromSession = JSON.parse(sessionStorage.getItem('allProducts'));
        productsFromSession && dispatch(setProducts(productsFromSession));
    }

    const renderList = products.map(product => {
            const {id, title, image, price} = product;
            return (
                    <div className="ui card" key={id}>
                        <div className="ui centered small image card-image-container">
                            <Link to={`/product/${id}`} >
                            <img className="card-image" src={image} alt={title} />
                            </Link>
                        </div>
                        <div className="content">
                            <div className="header title" title={title}>{title}</div>
                            <div className="big-font">$ {price}</div>
                        </div>
                    </div>
            )
        }
    )
    return (
            <div className="ui four doubling cards">
                {products.length === 0 
                ? <button className="ui basic loading button">Loading</button>
                : renderList}
            </div>
    )
}

export default ProductComponent;