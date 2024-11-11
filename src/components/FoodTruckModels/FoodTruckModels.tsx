import React from 'react';
import styles from './foodTruckModels.module.scss';
import { StrongBlueButton } from '../Button/StrongBlueButton';
import { modelsConfigs, modelsList } from '../../models.config';
import i18next from 'i18next';


const FoodTruckModels: React.FC = () => (
  <div className={styles.modelsContainer}>
    {modelsList.map((id: string) => {
      const item = modelsConfigs[id];
      return (
        <div className={styles.singleModel} key={item.key}>
          <img alt={item.name} className={styles.image} src={item.image} />
          <div className={styles.info}>
            <h2>{item.name}</h2>
            <h5>Skonfigurj od...</h5>
            <p>{i18next.t('priceWithCurrency',{ val: item.basePrice })}</p>
          </div>
          <div className={styles.button}>
            <StrongBlueButton 
              title={`Skonfiguruj ${item.name} pod swoje potrzeby`}
              to={`/models/${item.key}`}
            />
          </div>
        </div>);
    })}
  </div>
);

export default FoodTruckModels;