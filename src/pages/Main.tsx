import React, { useRef } from 'react';
import MainPicture from '../components/MainPicture/MainPicture';
import FoodTruckModels from '../components/FoodTruckModels/FoodTruckModels';

const Main = () => {
  const firstElementRef = useRef<HTMLDivElement | null>(null);  
  const navigateToFirstModel = () => {
    if(firstElementRef) {
      firstElementRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }

  };
  return (
    <>
      <MainPicture navigateToFirstModel={navigateToFirstModel} />
      <FoodTruckModels ref={firstElementRef} />
    </>
  );
};

export default Main;