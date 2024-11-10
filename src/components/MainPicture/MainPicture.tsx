import React from 'react';
import LinkButton from '../Button/LinkButton';
import styles from './mainPicture.module.scss';


const MainPicture = () => (
  <section className={styles.mainImageContainer}>
    <img 
      alt="Burger track"
      className={styles.mainImage} 
      src="https://innovokitchen.com/wp-content/uploads/2022/01/Innovo-Food-Truck-13.jpg"
         />
    <div className={styles.mainImageHeaderContainer}>
      <h2>Przyczepy od 20 000zł</h2>
      <div className={styles.mainImageButtonContainer }>
        <LinkButton title="Skontaktuj sie z nami !" to="/contact"/>
        <LinkButton title="Zobacz nasze realizacje !" to="/gallery"/>
      </div>
    </div>
  </section>
);


export default MainPicture;