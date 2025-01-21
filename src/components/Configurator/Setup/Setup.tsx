import React, { useContext, useMemo } from 'react';
import EquipmentCheckbox from '../inputs/EquipmentCheckbox';
import NumberInput from '../inputs/NumberInput';
import PriceIndicator from '../PriceIndicator/PriceIndicator';
import { ConfiguratorContext } from '../../../context/Configurator.context';
import { BaseConfigurationType, SIZE_ADJUSTMENT_PRICE, TruckAddonsType } from '../../../config/models.config types';
import TruckAddonsField from '../TruckAddonsField/TruckAddonsField';

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
  const isSizeAdjusted = useMemo(() => !!setup.configurtationOptions[BaseConfigurationType.SIZE_ADJUSTMENT], [setConfigurationOptions]); 
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
            value={!!setup.configurtationOptions[type]}
          />
        ))}
        <p className="config-divider">Dodatki</p>
        <TruckAddonsField
          fieldKey={TruckAddonsType.SUPPORTS}
        />
        <TruckAddonsField
          fieldKey={TruckAddonsType.TRIPLE_SINK}
        />
        <TruckAddonsField
          fieldKey={TruckAddonsType.DETACHABLE_DRAWBAR}
        />
        <p className="config-divider">Okap</p>
        <TruckAddonsField
          fieldKey={TruckAddonsType.HOOD}
        />
        <p className="config-divider">Wentylator</p>
        <TruckAddonsField
          fieldKey={TruckAddonsType.FAN}
        />
        <TruckAddonsField
          fieldKey={TruckAddonsType.FAN_CONTROLLER}
        />
        <p className="config-divider">Okna całoroczne</p>
        <TruckAddonsField
          fieldKey={TruckAddonsType.WINDOWS}
        />
      </div>
      <PriceIndicator calculatedPrice={calculatedPrice} />
    </>
  );};