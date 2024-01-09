// ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import fooddata from '../Product/FoodProductData';


const ProductDetails = () => {
  const { productId } = useParams();
  const allProducts = fooddata;
  const selectedProduct = allProducts.find((product) => product.id === parseInt(productId, 10));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>

      {/* Add more details as needed */}
      {selectedProduct.map((product, index) => (
        <div className="col-6 col-md-4" key={index}>
          <img className="product_img" src={product.productimg} alt="img" />
          <div className="product_title_wrap">
            <h4 className="product__title">{product.productTitle}</h4>
            <span className="price">{product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
