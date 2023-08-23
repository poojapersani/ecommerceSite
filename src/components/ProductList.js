import React from "react";
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {   

    return (
        <div className="Allcards">
            {products.map((item, index) => (
                <div className="card" key={index}>
                    <Link className="list-detail" to={`/product/${item.id}`}>
                        <img className="gadget" src={item.images[0]} alt="mobile" />
                        <h2 className="itemName">{item.title}</h2>
                        <h2 className="itemPrice"> {item.price} Rs</h2>
                        <h2 className="itemBrand">{item.brand}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
