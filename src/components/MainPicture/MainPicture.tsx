import React from 'react';
import styles from './mainPicture.module.scss';
import Button from '../Button/Button';

interface MainPictureProps {
 navigateToFirstModel: () => void
}

const MainPicture: React.FC<MainPictureProps> = ({ navigateToFirstModel }) => (
  <section className={styles.mainImageContainer}>
    <div className={styles.mainImageButtonContainer }>
      <Button onClick={navigateToFirstModel} title="Zamów swoją przyczepę !"/>
    </div>
  </section>
);


export default MainPicture;