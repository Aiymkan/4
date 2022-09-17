import React from 'react';


function ProductsList(props) {

    return (
        <ul>
            {
                props.productsArr.map((product, key) =>{


                    return (
                        <li key={key}>{product}</li>
                    )
                })
            }
        </ul>
    );
}

export default ProductsList;