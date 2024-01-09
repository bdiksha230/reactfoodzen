import React from 'react';
import BannerCarousel from './BannerCarousel';

const BannerData = () => {
  const bannerimgData = [
    {
      imgsrc: 'assets/img/banner/banner3.webp'
    },
    {
      imgsrc: 'assets/img/banner/banner3.webp'
    }
  ];
 
  return (
 
      <BannerCarousel banners={bannerimgData} />
 

   )

}

export default BannerData
