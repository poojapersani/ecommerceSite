import React, { useState } from 'react';
import ProductList from './ProductList';


const CategoryList = ({ products }) => {
    const [selectedCategory, setSelectedCategory] = useState('');


    // Get unique categories from products
    const categories = [...new Set(products.map(product => product.category))];

     // Filter products based on selected category
    const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory): products;

    return (
        <div className='category-list'>
        
            <ul className="cat-list">

                {/* All Category buttons used to display all product details */}        
                <li className={`cat-item ${selectedCategory === '' && 'active'}`}
                    onClick={() => setSelectedCategory('')}>
                    All
                </li>

                {/* Category buttons iterated over all categories */}
                {categories.map(category => (
                    <li
                    key={category}
                    className={`cat-item ${selectedCategory === category && 'active'}`}
                    onClick={() => setSelectedCategory(category)}
                    >
                    {category}
                    </li>
                    
                ))}
            </ul>
            {/* rendering productlist component */}
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default CategoryList;
