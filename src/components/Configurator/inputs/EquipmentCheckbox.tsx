import React, { ChangeEvent, useCallback } from 'react';
import './input.scss';
import '../configurator.scss';
import { labelMap } from '../../../config/models.config';
import { FieldKeys } from '../../../config/models.config types';

interface EquipmentCheckboxProps {
    value: boolean,
    fieldKey: FieldKeys
    onChange: (fieldKey: FieldKeys, newValue: boolean) => void,
    price?: number
}


const EquipmentCheckbox: React.FC<EquipmentCheckboxProps> = ({fieldKey, value, onChange }) => {

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    onChange(fieldKey, newValue);
  }, [value, onChange]);
  return (
    <div className="config-item-container">
      <label className={`config-item box-checkbox ${value && 'checked-checkbox'} ${fieldKey.toLowerCase()}-wrapper`}>
        <span>{labelMap[fieldKey]}</span>
        <input checked={value} className="disable-input" onChange={onChangeHandler} type="checkbox"/>
      </label>
    </div>
  );
};

export default EquipmentCheckbox;