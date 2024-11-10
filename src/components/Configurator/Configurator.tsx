import React from 'react';
import { Model } from '../../models.config';
import './configurator.scss';

interface ConfiguratorProps {
    model: Model
}


const Configurator: React.FC<ConfiguratorProps> = ({ model }) => {
  const { image, name } = model;
    
  return (
    <div className='configurator-wrapper'>
      <figure className='model-image-wrapper'>
        <img className='model-image' src={image} />
      </figure>
      <div className='configuration-panel'>
        <h3>{name}</h3>
          
      </div>
    </div>
  );
};

export default Configurator;