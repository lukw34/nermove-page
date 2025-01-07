import React from 'react';
import { Model } from '../../models.config';
import './configurator.scss';
import NumberInput from './NumberInput';
import { useConfiguratorModel } from '../../hooks/useConfiguratorModel';
import WeightCheckboxInput from './WeightCheckbox';
import PriceIndicator from './PriceIndicator/PriceIndicator';
import EquipmentCheckbox from './EquipmentCheckbox';

interface ConfiguratorProps {
    model: Model
}


const Configurator: React.FC<ConfiguratorProps> = ({ model }) => {
  const { image, name, axisConfiguration, baseConfigurationOptions } = model;
  const { 
    isDoubleAxisSupported,
    additionalWeightSuportPrice,
  } = axisConfiguration;
  const {
    configuration,
    setSize,
    setWeightProperties,
    setConfigurationOptions,
    calculatedPrice
  } = useConfiguratorModel(model);
    
  return (
    <div className="configurator-wrapper">
      <PriceIndicator calculatedPrice={calculatedPrice} />
      <img className="model-image" src={image} />
      <div className="basic-config">
        <h3>{name}</h3>
        <p className="config-divider">Wymiary</p>
        <NumberInput fieldKey="height" label="Wysokość" onChange={setSize} value={configuration.height}/>
        <NumberInput fieldKey="width" label="Szerokość" onChange={setSize} value={configuration.width}/>
        <NumberInput fieldKey="depth" label="Głębokość" onChange={setSize} value={configuration.depth}/>
        <p className="config-divider">Obciążenie</p>
        <WeightCheckboxInput 
          fieldKey="additionalWeightSupport"
          label="Wzmocnienie osi"
          onChange={setWeightProperties}
          price={additionalWeightSuportPrice}
          value={configuration.additionalWeightSupport}
        />
        {isDoubleAxisSupported ? <WeightCheckboxInput 
          fieldKey="includeDoubleAxis"
          label="Podwójna oś"
          onChange={setWeightProperties}
          price={axisConfiguration.doubleAxisPrice}
          value={configuration.includeDoubleAxis}
        /> : null }
        <p className="config-divider">Wyposażenie</p>
        { baseConfigurationOptions.map(({type, additionalPrice }) => (
          <EquipmentCheckbox
            fieldKey={type}
            key={`${name}-${type}`}
            onChange={setConfigurationOptions}
            price={additionalPrice}
            value={configuration.configurtationOptions[type]}
          />
        ))}
      </div>
    </div>
  );
};

export default Configurator;