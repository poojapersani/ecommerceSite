import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const selectedProduct = products.find(item => item.id === Number(productId));
        setProduct(selectedProduct);
    }, [productId, products]);


    return !product ? (<div>Loading...</div>) : (
        <div className="product-details">
            <img src={product.images[0]} alt={product.title} />
            <h1>{product.title}</h1>
            <p>Price: {product.price} Rs</p>
            <p>Brand: {product.brand}</p>
        </div>
    );
};

export default ProductDetails;
