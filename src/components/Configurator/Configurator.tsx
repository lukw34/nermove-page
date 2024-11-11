import React from 'react';
import { Model } from '../../models.config';
import './configurator.scss';
import NumberInput from './NumberInput';
import { useConfiguratorModel } from '../../hooks/useConfiguratorModel';

interface ConfiguratorProps {
    model: Model
}


const Configurator: React.FC<ConfiguratorProps> = ({ model }) => {
  const { image, name } = model;
  const {
    configuration,
    setSize
  } = useConfiguratorModel();
    
  return (
    <div className="configurator-wrapper">
      <img className="model-image" src={image} />
      <div className="basic-config">
        <h3>{name}</h3>
        <NumberInput fieldKey="height" label="Wysokość" onChange={setSize} value={configuration.height}/>
        <NumberInput fieldKey="width" label="Szerokość" onChange={setSize} value={configuration.width}/>
        <NumberInput fieldKey="depth" label="Głębokość" onChange={setSize} value={configuration.depth}/>
      </div>
    </div>
  );
};

export default Configurator;