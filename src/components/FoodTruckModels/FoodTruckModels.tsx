import React from 'react';
import styles from './foodTruckModels.module.scss';
import { StrongBlueButton } from '../Button/StrongBlueButton';

const modelsConfig = [{
    key: 'model-1',
    name: 'Model 1',
    basePrice: 12432134,
    image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2022/12/food-truck-coffe-merrild-45.jpg'
}, {
    key: 'model-2',
    name: 'Model 2',
    basePrice: 20032400,
    image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2023/07/syty-wol-24.jpg'
}, {
    key: 'model-3',
    name: 'Model 3',
    basePrice: 3023403,
    image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2021/11/samochod-ekspozycyjny-wystawowy-010.jpg'
}];


const FoodTruckModels: React.FC = () => (
  <div className={styles.modelsContainer}>
    {modelsConfig.map(item => (
      <div className={styles.singleModel} key={item.key}>
        <img alt={item.name} className={styles.image} src={item.image} />
        <div className={styles.info}>
          <h2>{item.name}</h2>
          <h5>Skonfigurj od...</h5>
          <p>{item.basePrice} zł</p>
        </div>
        <div className={styles.button}>
          <StrongBlueButton 
            onClick={() => null}
            title={`Skonfiguruj ${item.name} pod swoje potrzeby`}
          />
        </div>
      </div>))}
  </div>
);

export default FoodTruckModels;