import React, { useContext } from 'react';
import EquipmentCheckbox from '../EquipmentCheckbox';
import NumberInput from '../NumberInput';
import PriceIndicator from '../PriceIndicator/PriceIndicator';
import WeightCheckboxInput from '../WeightCheckbox';
import { ConfiguratorContext } from '../../../context/Configurator.context';

export const Setup = () => {
  const {
    selectedModel: {
      name,
      axisConfiguration,
      baseConfigurationOptions
    },
    configurator: {
      setup,
      setSize,
      setConfigurationOptions,
      setWeightProperties,
      calculatedPrice
    }
  } = useContext(ConfiguratorContext);  
  return (
    <>
      <div className="basic-config">
        <h3>{name}</h3>
        <p className="config-divider">Wymiary</p>
        <NumberInput fieldKey="height" label="Wysokość" onChange={setSize} value={setup.height}/>
        <NumberInput fieldKey="width" label="Szerokość" onChange={setSize} value={setup.width}/>
        <NumberInput fieldKey="depth" label="Głębokość" onChange={setSize} value={setup.depth}/>
        <p className="config-divider">Obciążenie</p>
        <WeightCheckboxInput 
          fieldKey="additionalWeightSupport"
          label="Wzmocnienie osi"
          onChange={setWeightProperties}
          price={axisConfiguration.additionalWeightSuportPrice}
          value={setup.additionalWeightSupport}
        />
        {axisConfiguration.isDoubleAxisSupported ? <WeightCheckboxInput 
          fieldKey="includeDoubleAxis"
          label="Podwójna oś"
          onChange={setWeightProperties}
          price={axisConfiguration.doubleAxisPrice}
          value={setup.includeDoubleAxis}
        /> : null }
        <p className="config-divider">Wyposażenie</p>
        { baseConfigurationOptions.map(({type, additionalPrice }) => (
          <EquipmentCheckbox
            fieldKey={type}
            key={`${name}-${type}`}
            onChange={setConfigurationOptions}
            price={additionalPrice}
            value={setup.configurtationOptions[type]}
          />
        ))}
      </div>
      <PriceIndicator calculatedPrice={calculatedPrice} />
    </>
  );};