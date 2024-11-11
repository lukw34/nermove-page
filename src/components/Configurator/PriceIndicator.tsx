import React from 'react';
import { BlueButton } from '../Button/BlueButton';
import i18next from 'i18next';
import './priceIndicator.scss';

interface PriceIndicatorProps {
    calculatedPrice: number
}


const PriceIndicator: React.FC<PriceIndicatorProps> = ({ calculatedPrice }) => {
  const handleOnClick = () => {
    alert('Zapytanie wyslane');
  };
  
  return (
    <div className="price-indicator-wrapper">
      Szacunkowa cena: 
      <div className="price">{i18next.t('priceWithCurrency',{ val: calculatedPrice })}</div>
      <BlueButton onClick={handleOnClick} title="Wyslij zpaytanie o oferte !"/> 
    </div>
  );
};

export default PriceIndicator;