import React, { forwardRef, useRef } from 'react';
import './foodTruckModels.scss';
import { StrongLinkButton } from '../Button/StrongLinkButton';
import { modelsConfigs, modelsList } from '../../config/models.config';
import ArrowDownButton from '../Button/ArrowDownButton';

const FoodTruckModels = forwardRef<HTMLDivElement | null>(function FoodTruckModel (props, ref) {
  const itemsRef = useRef<HTMLElement[]>([]);
  return (
    <div className="models-container">
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
          <div className={`single-model ${item.key}`} key={item.key} {...refProps}>
            <div className="info">
              <h2>{item.name}</h2>
            </div>
            <div className="button">
              <StrongLinkButton 
                title={`Skonfiguruj ${item.name} pod swoje potrzeby`}
                to={`/models/${item.key}`}
              />
            </div>
            { index !== modelsList.length - 1 ? <div className="next-button">
              <ArrowDownButton onClick={onClick}/>
            </div> : null }
          </div>
        );
      })}
    </div>
  );
});

export default FoodTruckModels;