// ProductListComponent.jsx
import React from 'react';
import Product from './Product';
import fooddata from '../Product/FoodProductData';

const AllProductCard = ({  addToCart, addToWishlist, viewDetails }) => {
    const products = fooddata;
  return (
    <div  className="row">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          viewDetails={viewDetails}
        />
      ))}
    </div>
  );
};

export default AllProductCard;
