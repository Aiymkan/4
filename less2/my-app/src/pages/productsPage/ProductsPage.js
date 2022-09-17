import React from 'react';
import Product from "../../components/product/Product";
import ProductsList from "../../components/productsList/ProductsList";
import Products from "../../components/products/Products";



function ProductsPage(props) {
    const  product = {
        name: "Apple",
        price: 15,
        count: 12
    }


    const products = ["Apple", "Orange", "Tomato", "Mango"]

    const  productsObj = [
        {
            id: 1,
            name: "Laptop",
            price: 200
        },
        {
            id: 2,
            name: "phone",
            price: 100
        }
    ]


    return (
        <div>
            <Product productOne={product}/>
            --------------------------------
            <ProductsList productsArr={products}/>
            --------------------------------
            <Products productsList={productsObj}/>


        </div>
    );
}

export default ProductsPage;