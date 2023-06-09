import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map(product => {
            const {id, title, image, price, category} = product;
            return (
                    <Link to={`/product/${id}`} className="ui link card" key={id}>
                        <div className="ui centered small image card-image-container">
                            <img className="card-image" src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </Link>
            )
        }
    )
    return (
            <div className="ui link four doubling cards">
                {products.length === 0 
                ? <button className="ui basic loading button">Loading</button>
                : renderList}
            </div>
    )
}

export default ProductComponent;