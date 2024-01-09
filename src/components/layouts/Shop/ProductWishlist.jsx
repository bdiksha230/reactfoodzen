// WishlistComponent.jsx
import React from 'react';

const ProductWishlist = ({ wishlistItems }) => {
  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>{item.productimg}{item.productTitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductWishlist;
