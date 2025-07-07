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
  } = useContext(ConfiguratorContext);
  
  const deliveryDate = useMemo(() => {
    const deliveryDate = new Date(new Date().getTime() + (63 * 24 * 60 * 60 * 1000));
    return `${deliveryDate.getMonth() + 1}/${deliveryDate.getFullYear()}`;
  }, []);

  return (
    <div className="summary-container">
      <h3>Twój model przyczepy {name}</h3>
      <div className="delivery-label">Szacowany termin realizacji: {deliveryDate}</div>
      <LinkButton title="Wróć do konfiguratora" to={`/models/${key}`} />
      <SimpleContacForm/>
    </div>
  );
};