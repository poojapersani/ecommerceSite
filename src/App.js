import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/Header';
import CategoryList from './components/CategoryList';
import ProductDetails from './components/ProductDetails';
import CartComponent from './components/CartComponent';

function App() {
    const [productsData, setProductsData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
	// fetching the data after page load
    useEffect(() => {
        async function getProductsData() {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                const products = data.products;
                setProductsData(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getProductsData();
    }, []);

    return (
        <Router>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<CategoryList products={productsData} />} />
                <Route path="/product/:productId" element={<ProductDetails products={productsData} />} /> 
                <Route path='/cart' element={<CartComponent cartItems={cartItems} setCartItems={setCartItems} />} />
            </Routes>
        </Router>
    );
}

export default App;
