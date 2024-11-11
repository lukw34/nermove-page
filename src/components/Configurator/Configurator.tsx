import React from 'react';
import { Model } from '../../models.config';
import './configurator.scss';
import NumberInput from './NumberInput';
import { useConfiguratorModel } from '../../hooks/useConfiguratorModel';
import WeightCheckboxInput from './WeightCheckbox';

interface ConfiguratorProps {
    model: Model
}


const Configurator: React.FC<ConfiguratorProps> = ({ model }) => {
  const { image, name } = model;
  const {
    configuration,
    setSize,
    setWeightProperties,
  } = useConfiguratorModel();
    
  return (
    <div className="configurator-wrapper">
      <img className="model-image" src={image} />
      <div className="basic-config">
        <h3>{name}</h3>
        <p>Wymiary: </p>
        <NumberInput fieldKey="height" label="Wysokość" onChange={setSize} value={configuration.height}/>
        <NumberInput fieldKey="width" label="Szerokość" onChange={setSize} value={configuration.width}/>
        <NumberInput fieldKey="depth" label="Głębokość" onChange={setSize} value={configuration.depth}/>
        <p>Obciążenie: </p>
        <WeightCheckboxInput 
          fieldKey="additionalWeightSupport"
          label="Wzmocnienie osi"
          onChange={setWeightProperties}
          value={configuration.additionalWeightSupport}
        />
        <WeightCheckboxInput 
          fieldKey="includeDoubleAxis"
          label="Podwójna oś"
          onChange={setWeightProperties}
          value={configuration.includeDoubleAxis}
        />
      </div>
    </div>
  );
};

export default Configurator;