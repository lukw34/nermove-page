import React from 'react';
import styles from './app.module.scss';
import Header from '../Header/Header';
import FoodTruckModels from '../FoodTruckModels/FoodTruckModels';
import MainPicture from '../MainPicture/MainPicture';

const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <main>
        <MainPicture/>
        <FoodTruckModels/>
      </main>
    </div>
  );
};

export default App;
