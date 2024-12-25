import React, { ChangeEvent, useCallback } from 'react';
import i18next from 'i18next';
import './input.scss';
import './configurator.scss';
import { BaseConfigurationType } from '../../models.config';

interface EquipmentCheckboxProps {
    value: boolean,
    fieldKey: BaseConfigurationType,
    onChange: (fieldKey: BaseConfigurationType, newValue: boolean) => void,
    price: number
}


const labelMap: Record<BaseConfigurationType, string> = {
  [BaseConfigurationType.ELECTRICITY]: 'Prąd',
  [BaseConfigurationType.WATER]: 'Podpięcie wody',
  [BaseConfigurationType.FURNITURE]: 'Meble'
};

const EquipmentCheckbox: React.FC<EquipmentCheckboxProps> = ({fieldKey, price, value, onChange }) => {

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    onChange(fieldKey, newValue);
  }, [value, onChange]);
  const priceValue = i18next.t('priceWithCurrency',{ val: price });
  return (
    <div className="config-item-container">
      <label className={`config-item box-checkbox ${value && 'checked-checkbox'} ${fieldKey.toLowerCase()}-wrapper`}>
        <span>{labelMap[fieldKey]}</span>
        <span>{priceValue}</span>
        <input checked={value} className="disable-input" onChange={onChangeHandler} type="checkbox"/>
      </label>
    </div>
  );
};

export default EquipmentCheckbox;