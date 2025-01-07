import React, { ChangeEvent, useCallback } from 'react';
import i18next from 'i18next';
import './input.scss';
import './configurator.scss';
import { WeightProperties } from '../../models.config';

interface CheckboxInputProps {
    value: boolean,
    fieldKey: WeightProperties,
    onChange: (fieldKey: WeightProperties, newValue: boolean) => void,
    label: string;
    price: number
}


const WeightCheckboxInput: React.FC<CheckboxInputProps> = ({fieldKey, price, value, onChange, label }) => {

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    onChange(fieldKey, newValue);
  }, [value, onChange]);
  const priceValue = i18next.t('priceWithCurrency',{ val: price });
  return (
    <div className="config-item-container">
      <label className={`config-item box-checkbox ${value && 'checked-checkbox'}`}>
        <span>{label}</span>
        <span>{priceValue}</span>
        <input checked={value} className="disable-input" onChange={onChangeHandler} type="checkbox"/>
      </label>
    </div>
  );
};

export default WeightCheckboxInput;