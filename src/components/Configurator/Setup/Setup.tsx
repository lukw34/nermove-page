import React, { useContext, useMemo } from 'react';
import EquipmentCheckbox from '../EquipmentCheckbox';
import NumberInput from '../NumberInput';
import PriceIndicator from '../PriceIndicator/PriceIndicator';
import { ConfiguratorContext } from '../../../context/Configurator.context';
import { BaseConfigurationType, SIZE_ADJUSTMENT_PRICE } from '../../../models.config';

export const Setup = () => {
  const {
    selectedModel: {
      name,
      baseConfigurationOptions,
      size: {
        width,
        depth
      }
    },
    configurator: {
      setup,
      setSize,
      setConfigurationOptions,
      calculatedPrice
    }
  } = useContext(ConfiguratorContext);
  const isSizeAdjusted = useMemo(() => setup.configurtationOptions[BaseConfigurationType.SIZE_ADJUSTMENT], [setConfigurationOptions]); 
  return (
    <>
      <div className="basic-config">
        <h3>{name}</h3>
        <p className="config-divider">Wymiary</p>
        <NumberInput 
          defaultValue={width} 
          disabled={!isSizeAdjusted} 
          fieldKey="width" 
          label="Szerokość" 
          onChange={setSize}
          value={setup.width}
        />
        <NumberInput 
          defaultValue={depth} 
          disabled={!isSizeAdjusted} 
          fieldKey="depth" 
          label="Głębokość" 
          onChange={setSize}
          value={setup.depth}
        />
        <EquipmentCheckbox
          fieldKey={BaseConfigurationType.SIZE_ADJUSTMENT}
          onChange={setConfigurationOptions}
          price={SIZE_ADJUSTMENT_PRICE}
          value={isSizeAdjusted}
        />
        <p className="config-divider">Wyposażenie Bazowe</p>
        { baseConfigurationOptions.map(({type, additionalPrice }) => (
          <EquipmentCheckbox
            fieldKey={type}
            key={`${name}-${type}`}
            onChange={setConfigurationOptions}
            price={additionalPrice}
            value={setup.configurtationOptions[type]}
          />
        ))}
        <p className="config-divider">Okap</p>
        {/* Komponent do wyboru bedzie mial tylko setConfigurationOptions i  */}
      </div>
      <PriceIndicator calculatedPrice={calculatedPrice} />
    </>
  );};