import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay} from 'swiper/modules';

import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  
import 'swiper/css/autoplay'

const FoodCategeries = ({categoryprops}) => {

  
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={20}
                breakpoints={{
                    0: {
                      slidesPerView: 3,
                    },
                    576: { 
                      slidesPerView: 3,
                    },
                    768: { 
                      slidesPerView: 4,
                    },
                  }}
                a11y={false}
                navigation  
                // loop={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false, 
                //   }} 
                // onSwiper={(Swiper) => console.log(Swiper)}
                // onSlideChange={ ()=> console.log('slidechange')}
            >
                <div>
                {categoryprops.map((category, index) => (
                    <SwiperSlide key={index}>
                        <div className="foodcategory">
                            <img src={category.categoryimg} alt={`Slide ${index}`} />
                            <h3 className="caption">{category.caption}</h3>
                        </div>
                     
                    </SwiperSlide>

                    
                ))}
                
                </div>


             

            </Swiper>
        </>
    )

}

export default FoodCategeries