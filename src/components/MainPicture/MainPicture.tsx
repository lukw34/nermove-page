import React from 'react';
import LinkButton from '../Button/LinkButton';
import styles from './mainPicture.module.scss';
import i18next from 'i18next';


const MainPicture = () => (
  <section className={styles.mainImageContainer}>
    <img 
      alt="Burger track"
      className={styles.mainImage} 
      src="./main.jpeg"
    />
    <div className={styles.mainImageHeaderContainer}>
      <h2>PRZYCZEPY OD {i18next.t('priceWithCurrency',{ val: 20000 })}</h2>
    </div>
    <div className={styles.mainImageButtonContainer }>
      <LinkButton title="Skontaktuj sie z nami !" to="/contact"/>
      <LinkButton title="Zobacz nasze realizacje !" to="/gallery"/>
    </div>
  </section>
);


export default MainPicture;