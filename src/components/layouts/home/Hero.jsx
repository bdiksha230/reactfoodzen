import React from 'react';
import bannerdesk from '../../../img/banner/banner1.webp';
import bannerphone from '../../../img/banner/banner1_ph.webp'

const Hero = () => {
    return (
        <div>
            <img className="w-100 d-none d-lg-block" src={bannerdesk} alt="banner" />
            <img className="w-100  d-lg-none d-md-block" src={bannerphone} alt="banner" />
        </div>
    )
}

export default Hero