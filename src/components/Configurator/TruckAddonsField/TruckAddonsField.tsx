import React, { ChangeEvent, useCallback, useMemo } from 'react';
import i18next from 'i18next';
import './input.scss';
import './configurator.scss';
import { BaseConfigurationType, FieldType, TruckAddonsType } from '../../../config/models.config types';
import { labelMap } from '../../../config/models.config';
import { truckAddons } from '../../../config/addons.config';
import EquipmentCheckbox from '../EquipmentCheckbox';

interface TruckAddonsFieldProps {
    value: boolean | string,
    fieldKey: TruckAddonsType
    onChange: (fieldKey: TruckAddonsType, newValue: boolean | string) => void,
}


const TruckAddonsField: React.FC<TruckAddonsFieldProps> = ({fieldKey, value, onChange }) => {

  const addonItem = useMemo(() => truckAddons[fieldKey], [fieldKey]);
  if(addonItem.type === FieldType.CHECKBOX) {
    return (
      <EquipmentCheckbox 
        fieldKey={fieldKey} 
        onChange={onChange}
        price={addonItem.price}
        value={!!value}
      />
    );
  }
  
  return <div>DUPA</div>;
};

export default TruckAddonsField;