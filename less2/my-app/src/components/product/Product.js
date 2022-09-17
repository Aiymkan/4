import React from 'react';

function Product({productOne}) {
    return (
        // <div></div>
        <ul>
            <li>name:{productOne.name}</li>
            <li>price:{productOne.price}</li>
            <li>count:{productOne.count}</li>


        </ul>
    );
}

export default Product;