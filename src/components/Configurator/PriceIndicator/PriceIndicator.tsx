import React from 'react';
import { ActionButton } from '../../Button/ActionButton';
import i18next from 'i18next';
import './priceIndicator.scss';
import { useNavigate } from 'react-router-dom';

interface PriceIndicatorProps {
    calculatedPrice: number,
    leasing: number
}


const PriceIndicator: React.FC<PriceIndicatorProps> = ({ calculatedPrice, leasing }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('summary');
  };
  
  return (
    <div className="price-indicator-wrapper">
      <div className="price-indicators">
        Szacunkowa wycena: 
        <div className="price">{i18next.t('priceWithCurrency',{ val: calculatedPrice })} - {i18next.t('priceWithCurrency',{ val: calculatedPrice * 1.15 })} </div>
        <div className="monthly-price">
          Rata (3 lata): <span className="monthly-price-value">{i18next.t('priceWithCurrency',{ val: leasing })}/mies</span>
        </div>
      </div>
      <div className="submit-button-container">
        <ActionButton onClick={handleOnClick} title="Podsumowanie"/> 
      </div>
    </div>
  );
};

export default PriceIndicator;