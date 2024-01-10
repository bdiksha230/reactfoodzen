import React from 'react';
import Hero from '../layouts/home/Hero';
import FoodCategoriesData from '../layouts/home/FoodCategoriesData';
import HomeProduct from '../layouts/home/HomeProduct';
import { NavLink } from 'react-router-dom';




const Home = () => {


  return (

    <div>
      <section className="p-0 banner_section">
        <Hero />
      </section>
      <section className="food__category_section pb-0">
        <div className="menu_name_wrap">
          <span className="menu_heading">button</span>
        </div>
        <div className="container-fluid">
          <FoodCategoriesData />
        </div>
      </section>
      <section className="offer_section">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-2 justify-content-center">
            <div className="offer_img">
              <img className="w-100" src="assets/img/offer1.webp" alt="" />
            </div>
            <div className="offer_img">
              <img className="w-100" src="assets/img/offer2.webp" alt="" />
            </div>
            <div className="offer_img">
              <img className="w-100" src="assets/img/offer3.webp" alt="" />
            </div>
          </div>
          <div className="row row-cols-lg-2 row-cols-2 ">
            <div className="offer_img">
              <img className="w-100" src="assets/img/offer4.webp" alt="" />
            </div> 
            <div className="offer_img">
              <img className="w-100" src="assets/img/offer4.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="offer_section_banner p-0">
        <img src="assets/img/banner/offer_banner.webp" alt="banner" />
      </section>
      <section className="product_section">
        <div className="heading_wrap">
          <h1> Our best Product</h1>
        </div>
        <div className="container">
          <HomeProduct />
        </div>
        <div className="shopnow_btn_wrap">
          <NavLink to="/shop" ><button className="btn shopnow_btn">shop Now</button></NavLink>
        </div>
      </section>



    </div>

  )

}
export default Home
