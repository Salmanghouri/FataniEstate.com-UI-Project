import React from "react";
import Script from "next/script";


const Propertyslider = () => {
  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />;
      <div className="w-full h-full swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/user/erondu/3000x900"
              alt="image"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/collection/190727/3000x900"
              alt="image"
            />
          </div>
          <div className="swiper-slide">
            <img
              className="object-cover w-full h-full"
              src="https://source.unsplash.com/collection/190728/3000x900"
              alt="image"
            />
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
      
    </>
  );
};

export default Propertyslider;
