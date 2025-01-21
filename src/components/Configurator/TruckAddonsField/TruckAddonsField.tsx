import React, { useContext, useMemo } from 'react';
import { FieldType, TruckAddonsType } from '../../../config/models.config types';
import { truckAddons } from '../../../config/addons.config';
import EquipmentCheckbox from '../inputs/EquipmentCheckbox';
import { ConfiguratorContext } from '../../../context/Configurator.context';
import Selector from '../inputs/Selector';

interface TruckAddonsFieldProps {
    fieldKey: TruckAddonsType
}


const TruckAddonsField: React.FC<TruckAddonsFieldProps> = ({fieldKey }) => {
  const {
    configurator: {
      setup: {
        configurtationOptions
      },
      setConfigurationOptions
    }
  } = useContext(ConfiguratorContext);

  const addonItem = useMemo(() => truckAddons[fieldKey], [fieldKey]);
  const value = useMemo(() => configurtationOptions[fieldKey], [fieldKey, configurtationOptions]);
  if(addonItem.type === FieldType.CHECKBOX) {
    return (
      <EquipmentCheckbox 
        fieldKey={fieldKey} 
        onChange={setConfigurationOptions}
        price={addonItem.price}
        value={!!value}
      />
    );
  }
  
  if(addonItem.type === FieldType.SELECTION) {
    return (
      <Selector
        fieldKey={fieldKey}
        onChange={setConfigurationOptions}
        options={addonItem.options}
        value={String(value)}
      />
    );
  }
  
  return null;
};

export default TruckAddonsField;