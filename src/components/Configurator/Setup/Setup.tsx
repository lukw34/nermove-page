import React, { useContext, useMemo } from 'react';
import EquipmentCheckbox from '../inputs/EquipmentCheckbox';
import NumberInput from '../inputs/NumberInput';
import PriceIndicator from '../PriceIndicator/PriceIndicator';
import { ConfiguratorContext } from '../../../context/Configurator.context';
import { BaseConfigurationType, ModelDimension, SIZE_ADJUSTMENT_PRICE, TruckAddonsType } from '../../../config/models.config types';
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
          fieldKey={ModelDimension.width} 
          label="Szerokość" 
          onChange={setConfigurationOptions}
          value={setup.width}
          valueLabel="cm"
        />
        <NumberInput 
          defaultValue={depth} 
          disabled={!isSizeAdjusted} 
          fieldKey={ModelDimension.width}
          label="Głębokość" 
          onChange={setConfigurationOptions}
          value={setup.depth}
          valueLabel="cm"
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
        <TruckAddonsField
          fieldKey={TruckAddonsType.FURNITURES}
        />
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
        <p className="config-divider">Obicia</p>
        <TruckAddonsField
          fieldKey={TruckAddonsType.STEAL_COUNTERTOP}
        />
        <TruckAddonsField
          fieldKey={TruckAddonsType.STEAL_WALLS}
        />
      </div>
      <PriceIndicator calculatedPrice={calculatedPrice} />
    </>
  );};