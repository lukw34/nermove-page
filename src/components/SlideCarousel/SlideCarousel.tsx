import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const SlideCarousel = () => (
  <Carousel
    autoPlay={true}
    >
    <div>
      <img src="https://www.bccpolska.pl/storage/offer/burger_ib1g3b.webp" />
      <p className="legend">Zbuduj z nami swoje zaplecze gastronomiczne!</p>
    </div>
    <div>
      <img src="https://innovokitchen.com/wp-content/uploads/2022/01/Innovo-Food-Truck-13.jpg" />
      <p className="legend">Przyczepy gastronomiczne od 100000zł</p>
    </div>

  </Carousel>
);

export default SlideCarousel;