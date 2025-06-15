import React, { useRef } from 'react';
import MainPicture from '../components/MainPicture/MainPicture';
import Offer from '../components/Offer/Offer';
const Main = () => {
  const offerRef = useRef<{
    firstItem: HTMLDivElement,
    lastItem: HTMLDivElement
  } | null>(null);  
  const navigateToFirstModel = () => {
    if(offerRef) {
      console.log(offerRef);
      (offerRef as any).firstItem?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const navigateToLastModel = () => {
    console.log(offerRef);
    if(offerRef) {
      (offerRef as any).lastItem?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <MainPicture navigateToFirstModel={navigateToFirstModel} navigateToLastModel={navigateToLastModel} />
      <Offer ref={offerRef} />
    </>
  );
};

export default Main;