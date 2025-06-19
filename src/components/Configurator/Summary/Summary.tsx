import React, { useContext, useMemo } from 'react';
import { ConfiguratorContext } from '../../../context/Configurator.context';
import i18next from 'i18next';
import SimpleContacForm from '../../Contact/SimpleContactForm';
import './summary.scss';
import LinkButton from '../../Button/LinkButton';

export const Summary = () => {
  const {
    selectedModel: {
      name,
      key
    },
    configurator: {
      calculatedPrice,
      leasing
    }
  } = useContext(ConfiguratorContext);
  
  const deliveryDate = useMemo(() => {
    const deliveryDate = new Date(new Date().getTime() + (63 * 24 * 60 * 60 * 1000));
    return `${deliveryDate.getMonth() + 1}/${deliveryDate.getFullYear()}`;
  }, []);

  return (
    <div className="summary-container">
      <h3>Twój model {name}</h3>
      <div className="delivery-label">Szacowany termin realizacji: {deliveryDate}</div>
      <LinkButton title="Wróć do konfiguratora" to={`/models/${key}`} />
      <div className="price-container"> 
        Szacowana cena realizacji: <span className="price-value">{i18next.t('priceWithCurrency',{ val: calculatedPrice })} - {i18next.t('priceWithCurrency',{ val: calculatedPrice * 1.15 })}</span>
      </div>
      <div className="price-container">
        Szacowana rata leasingu na: <span className="price-value">{i18next.t('priceWithCurrency',{ val: leasing })}</span>
        <p className="price-details">*Czas trwania: 36 miesięcy</p>
        <p className="price-details">**Wkład własny: 10%</p>
      </div>
      <SimpleContacForm/>
    </div>
  );
};