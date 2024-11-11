import React, { ChangeEvent, useCallback } from 'react';
import './input.scss';
import './configurator.scss';
import { WeightProperties } from '../../hooks/useConfiguratorModel';

interface CheckboxInputProps {
    value: boolean,
    fieldKey: WeightProperties,
    onChange: (fieldKey: WeightProperties, newValue: boolean) => void,
    label: string;
}


const WeightCheckboxInput: React.FC<CheckboxInputProps> = ({fieldKey, value, onChange, label }) => {

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;

    console.log('dupa');
    onChange(fieldKey, newValue);
  }, [value, onChange]);


  console.log(value);

  return (
    <label className={`config-item box-checkbox ${value && 'checked-checkbox'}`}>{label}
      <input checked={value} className="disable-input" onChange={onChangeHandler} type="checkbox"/>
    </label>
  );
};

export default WeightCheckboxInput;