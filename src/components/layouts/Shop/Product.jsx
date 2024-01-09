// ProductComponent.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductComponent = ({ product, addToCart, addToWishlist, viewDetails }) => {
  const { id, productimg, productTitle, price } = product;

  return (
    <div className="col-md-4">
           <img className="product_img" src={productimg} alt="img" />
      <h3>{productTitle}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
      <button onClick={() => addToWishlist(id)}>Add to Wishlist</button>
      <NavLink to="/productdetail"  ><button  >View Details</button></NavLink>
    </div>
  );
};

export default ProductComponent;
