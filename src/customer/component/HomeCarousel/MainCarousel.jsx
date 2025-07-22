import React from 'react';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {

    const items = mainCarouselData.map((item, index) => (
  <div key={index} className="mt-4 flex justify-center items-center w-full">
    <img
      className="w-[1100px] h-[650px] object-cover rounded-md shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
      role="presentation"
      src={item.image}
      alt={`carousel-image-${index}`}
    />
  </div>
));


  return (
    <div>
      <AliceCarousel 
         items = {items}
         disableButtonsControls
         autoPlay
         autoPlayInterval={1200}
         infinite
     />
    </div>
  )
}

export default MainCarousel
