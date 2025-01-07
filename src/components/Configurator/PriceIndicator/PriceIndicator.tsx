import React from 'react';
import { SubmitButton } from '../../Button/SubmitButton';
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
      <div className="price-indicators">
        Szacunkowa wycena: 
        <div className="price">{i18next.t('priceWithCurrency',{ val: calculatedPrice })}</div>
        <div className="monthly-price">
          Rata: <span className="monthly-price-value">{i18next.t('priceWithCurrency',{ val: 2137 })}/mies</span>
        </div>
      </div>
      <div className="submit-button-container">
        <SubmitButton onClick={handleOnClick} title="Podsumowanie"/> 
      </div>
    </div>
  );
};

export default PriceIndicator;