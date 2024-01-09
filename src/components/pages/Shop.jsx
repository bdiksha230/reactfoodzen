import React from 'react'
import Productcard from '../layouts/Shop/Productcard';


const Shop = () => {
  return (
    <div>
      <section className="p-0 offer_section_banner">
        <img src="assets/img/banner/shop_banner.jpg" alt="banner" />
      </section>

      <section className="shop__page">
        
      <Productcard />


      </section>

    </div>
  )
}

export default Shop
