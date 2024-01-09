import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/layouts/Header';
import Blog from './components/pages/Blog';
import Shop from './components/pages/Shop';
import FoodCategoriesData from './components/layouts/home/FoodCategoriesData';
import Cont from './components/pages/Cont';
import Footer from './components/layouts/Footer';
import ProductWishlist from './components/layouts/Shop/ProductWishlist';
import AllProductCard from './components/layouts/Shop/AllProductCard';
import ProductDetails from './components/layouts/Shop/ProductDetails';
import fooddata from './components/layouts/Product/FoodProductData';



const App = () => {

// product details and wishlist
  const [wishlistItems, setWishlistItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = fooddata;

  const addToWishlist = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setWishlistItems((prevItems) => [...prevItems, selectedProduct]);
  };

  const viewDetails = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setSelectedProduct(selectedProduct);
  };
// end product details and wishlist

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/foodCategoriesData" element={<FoodCategoriesData />} />
        <Route path="/cont" element={<Cont />} />
        <Route path="/wishlist" element={<ProductWishlist />} />
        <Route path="/allproduct" element={<AllProductCard />} />


        {/*  product details and wishlist */}
        <Route path="/wishlist" element={<ProductWishlist wishlistItems={wishlistItems} />} />
        <Route path="/productdetail" element={<ProductDetails  selectedProduct={selectedProduct} />} />
        <Route path="" element={<AllProductCard
          products={products}
          addToWishlist={addToWishlist}
          viewDetails={viewDetails}
        />} />




      </Routes>
      <Footer />
    </Router>
  )
}

export default App
