import React, { forwardRef, useRef } from 'react';
import './offer.scss';
import { StrongLinkButton } from '../Button/StrongLinkButton';
import { modelsConfigs, modelsList } from '../../config/models.config';
import ArrowDownButton from '../Button/ArrowDownButton';

const Offer = forwardRef<{ firstItem: any, lastItem: HTMLDivElement }>(function Offers (props, ref) {
  const itemsRef = useRef<HTMLElement[]>([]);
  return (
    <div className="models-container">
      {modelsList.map((id: string, index: number) => {
        const item = modelsConfigs[id];
        let refProps = { ref: (el: HTMLDivElement) => itemsRef.current[index] = el };
        if(index === 0) {
          refProps = { ref: (el: HTMLDivElement) => {
            if(ref) {
              (ref as any).firstItem = el; 
              itemsRef.current[index] = el;
            } 
            return el;
          }
          };
        } else if(index === modelsList.length -1) {
          refProps = { ref: (el: HTMLDivElement) => {
            if(ref) {
              (ref as any).lastItem = el; 
              itemsRef.current[index] = el;
            } 
            return el;
          }
          };
        }
      
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
              <h4>{item.description}</h4>
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

export default Offer;