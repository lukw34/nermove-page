import React, { useContext, useMemo } from 'react';
import { ConfiguratorContext } from '../../../context/Configurator.context';
import i18next from 'i18next';
import SimpleContacForm from '../../ContactForm/SimpleContactForm';
import './summary.scss';
import LinkButton from '../../Button/LinkButton';

export const Summary = () => {
  const {
    selectedModel: {
      name,
      key
    },
    configurator: {
      calculatedPrice
    }
  } = useContext(ConfiguratorContext);
  
  const deliveryDate = useMemo(() => {
    const today = new Date();
    return `${today.getMonth() + 1}/${today.getFullYear()}`;
  }, []);

  return (
    <div className="summary-container">
      <h3>Twój model {name}</h3>
      <div className="delivery-label">Szacowany termin realizacji: {deliveryDate}</div>
      <LinkButton title="Wróć do konfiguratora" to={`/models/${key}`}></LinkButton>
      <div className="price-container"> 
        Szacowana cena realizacji: <span className="price-value">{i18next.t('priceWithCurrency',{ val: calculatedPrice })}</span>
      </div>
      <div className="price-container">
        Szacowana rata leasingu: <span className="price-value">{i18next.t('priceWithCurrency',{ val: 2137 })}</span>
      </div>
      <SimpleContacForm/>
    </div>
  );
};