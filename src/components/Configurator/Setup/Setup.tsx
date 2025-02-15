import React, { useContext, useMemo } from 'react';
import EquipmentCheckbox from '../inputs/EquipmentCheckbox';
import NumberInput from '../inputs/NumberInput';
import PriceIndicator from '../PriceIndicator/PriceIndicator';
import { ConfiguratorContext } from '../../../context/Configurator.context';
import { ModelDimension, TruckAddonsType } from '../../../config/models.config types';
import TruckAddonsField from '../TruckAddonsField/TruckAddonsField';

export const Setup = () => {
  const {
    selectedModel: {
      name,
      baseConfigurationOptions,
      size: {
        width,
        length: depth
      }
    },
    configurator: {
      setup,
      setConfigurationOptions,
      calculatedPrice
    }
  } = useContext(ConfiguratorContext);
  const isSizeAdjusted = useMemo(() => !!setup[TruckAddonsType.SIZE_ADJUSTMENT], [setConfigurationOptions]); 
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
          value={Number(setup.width)}
          valueLabel="cm"
        />
        <NumberInput 
          defaultValue={depth} 
          disabled={!isSizeAdjusted} 
          fieldKey={ModelDimension.length}
          label="Długość" 
          onChange={setConfigurationOptions}
          value={Number(setup.length)}
          valueLabel="cm"
        />
        <TruckAddonsField
          fieldKey={TruckAddonsType.SIZE_ADJUSTMENT}
        />
        <p className="config-divider">Wyposażenie Bazowe</p>
        { baseConfigurationOptions.map(({type, additionalPrice }) => (
          <EquipmentCheckbox
            fieldKey={type}
            key={`${name}-${type}`}
            onChange={setConfigurationOptions}
            price={additionalPrice}
            value={!!setup[type]}
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