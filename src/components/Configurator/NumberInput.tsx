import React, { ChangeEvent, useCallback, useEffect } from 'react';
import './input.scss';
import './configurator.scss';
import { ModelDimension } from '../../models.config';

interface NumberInputProps {
    defaultValue: number,
    value: number,
    fieldKey: ModelDimension,
    onChange: (fieldKey: ModelDimension, newValue: number) => void,
    label: string;
    disabled: boolean
}


const NumberInput: React.FC<NumberInputProps> = ({fieldKey, value, onChange, label, disabled,defaultValue }) => {

  useEffect(() => {
    if(disabled) {
      onChange(fieldKey, defaultValue);
    }
  }, [disabled]);

  const decrement = useCallback(() => {
    const newValue = value - 1;
    if(newValue >= 100) {
      onChange(fieldKey, newValue);
    }
  }, [value, onChange]);

  const increment = useCallback(() => {
    onChange(fieldKey, value + 1);
  }, [value, onChange]);


  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target?.value as unknown as number;
    if(newValue && newValue >= 100) {
      onChange(fieldKey, newValue);
    }
  }, [value, onChange]);

  return (
    <div className="config-item-container">
      <div className="config-item">
        {label} <div>
          <button 
            className={`input-number-modificator ${disabled && 'input-disabled'}`} 
            disabled={disabled}
            onClick={increment}
          >+</button>
          <button
            className={`input-number-modificator ${disabled && 'input-disabled'}`}
            disabled={disabled}
            onClick={decrement}>–</button>
          <input className="input-number" disabled={disabled} min={100} onChange={onChangeHandler} type="number" value={value}/>
          <span>cm</span>
        </div>
      </div> 
    </div>
  );
};

export default NumberInput;