import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map(product => {
            const {id, title, image, price, category} = product;
            return (
                    
                        <a className="card" key={id} href={`/product/${id}`}>
                            <div className="ui centered small image card-image-container">
                                <img className="card-image" src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </a>
                    
            )
        }
    )
    return (
                    <div className="ui link four doubling cards">
                        {renderList}
                    </div>
    )
}

// const ProductComponent = () => {
//     const product = useSelector(state => state.allProducts.products);
//     const renderList = product.map(product => {
//         const {id, title, image, price, category} = product;
//         return (
//             <div className="four wide column row" key={id}>
//                 <div className="ui link cards">
//                     <div className="card">

//                         <div className="image">
//                             <img src={image} alt={title} />
//                         </div>

//                         <div className="content">
//                             <div className="header">{title}</div>
//                             <div className="meta price">$ {price}</div>
//                             <div className="meta">{category}</div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         )
//     })
//     return (
//         <>
//             {renderList}
//         </>
//     )
// }



export default ProductComponent;