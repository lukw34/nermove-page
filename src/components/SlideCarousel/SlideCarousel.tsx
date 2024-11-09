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
      <img src="https://img1.wsimg.com/isteam/ip/6b968050-6df0-4759-9be8-e5d2044b0ebd/cropnewaf-fb219b7.jpg" />
      <p className="legend">Przyczepy gastronomiczne od 100000zł</p>
    </div>
    <div>
      <img src="https://innovokitchen.com/wp-content/uploads/2022/01/Innovo-Food-Truck-13.jpg" />
      <p className="legend">Everything is Awesome</p>
    </div>
  </Carousel>
);

export default SlideCarousel;