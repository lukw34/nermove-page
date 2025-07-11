import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import styles from './mainPicture.module.scss';
import Button from '../Button/Button';

import ArrowDownButton from '../Button/ArrowDownButton';

enum Sections {
  TRACK = 'truck',
  HOUSE = 'house'
}

interface MainPictureProps {
 navigateToFirstModel: () => void
 navigateToLastModel: () => void
}

const MainPicture: React.FC<MainPictureProps> = ({ navigateToFirstModel, navigateToLastModel }) =>{
  const [activeSection, setActiveSection] = useState<Sections>(Sections.TRACK);

  const handleOnClick = useCallback(() => {
    if(activeSection === Sections.TRACK) {
      setActiveSection(Sections.HOUSE);
    } else {
      setActiveSection(Sections.TRACK);
    }
  }, [activeSection,setActiveSection]);

  return(
    <section className={styles.mainImageContainer}>
      <div className={classnames(styles.movingImage, { [styles.activeImage]: activeSection === Sections.HOUSE}) } />
      <div className={styles.mainImage}/>
      <div className={classnames(styles.actionButtonContainer, { [styles.revert]: activeSection === Sections.HOUSE})}>
        <ArrowDownButton onClick={handleOnClick}/>
      </div>
  
      <div className={styles.mainImageButtonContainer }>
        <Button onClick={navigateToFirstModel} title="Zamów swoją przyczepę !"/>
      </div>
      <div className={classnames(styles.mainImageSecondButtonContainer, { [styles.active]: activeSection === Sections.HOUSE})}>
        <Button onClick={navigateToLastModel} title="Zamów swój wymarzony dom !"/>
      </div>
    </section>
  );
};


export default MainPicture;