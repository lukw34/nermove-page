import React from 'react';
import { ActionButton } from '../../Button/ActionButton';
import './priceIndicator.scss';
import { useNavigate } from 'react-router-dom';



const PriceIndicator: React.FC = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('summary');
  };
  
  return (
    <div className="price-indicator-wrapper">
      <ActionButton onClick={handleOnClick} title="Przejdź dalej" externalClassName="price-indicator-button" /> 
    </div>
  );
};

export default PriceIndicator;