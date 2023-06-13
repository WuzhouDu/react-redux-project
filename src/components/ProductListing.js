import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/slice";

const ProductListing = () => {
    const dispatch = useDispatch();



    useEffect(() => {
        const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch(err => {
                console.log("Err: ", err);
            });
        
        console.log("response: ", response);
        dispatch(setProducts(response.data));
        };
        console.log("fetching products");
        
        fetchProducts();
    }, [dispatch]);
    // console.log("Products: ", products)
    

    return (
        <div className="ui grid container products-list">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;