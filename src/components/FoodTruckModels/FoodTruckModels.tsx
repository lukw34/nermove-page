import React, { forwardRef, useRef } from 'react';
import styles from './foodTruckModels.module.scss';
import { StrongLinkButton } from '../Button/StrongLinkButton';
import { modelsConfigs, modelsList } from '../../models.config';
import ArrowDownButton from '../Button/ArrowDownButton';

const FoodTruckModels = forwardRef<HTMLDivElement | null>(function FoodTruckModel (props, ref) {
  const itemsRef = useRef<HTMLElement[]>([]);
  return (
    <div className={styles.modelsContainer}>
      {modelsList.map((id: string, index: number) => {
        const item = modelsConfigs[id];
        const refProps = index === 0 ? { ref }: { ref: (el: HTMLDivElement) => itemsRef.current[index] = el};
        const onClick = () => {
          const nextElement = itemsRef.current[index + 1];
          if(nextElement) {
            nextElement.scrollIntoView({
              behavior: 'smooth',
            });
          }
        };

        return (
          <div className={styles.singleModel} key={item.key} {...refProps}>
            <img alt={item.name} className={styles.image} src={item.image} />
            <div className={styles.info}>
              <h2>{item.name}</h2>
            </div>
            <div className={styles.button}>
              <StrongLinkButton 
                title={`Skonfiguruj ${item.name} pod swoje potrzeby`}
                to={`/models/${item.key}`}
              />
            </div>
            { index !== modelsList.length - 1 ? <div className={styles.nextButton}>
              <ArrowDownButton onClick={onClick}/>
            </div> : null }
          </div>
        );
      })}
    </div>
  );
});

export default FoodTruckModels;