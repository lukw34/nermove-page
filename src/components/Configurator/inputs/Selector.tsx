import i18next from 'i18next';
import { useCallback, ChangeEvent } from 'react';
import { FieldKeys, SelectionOptionsItem } from '../../../config/models.config types';

interface SelectorProps {
    value: string,
    fieldKey: FieldKeys
    onChange: (fieldKey: FieldKeys, newValue: string) => void,
    options: SelectionOptionsItem[]
}


const Selector: React.FC<SelectorProps> = ({fieldKey, options, value, onChange }) => {
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(fieldKey, newValue);
  }, [value, onChange]);
  return (
    <div className="config-item-container">
      <select className="selector-box config-item" onChange={onChangeHandler}>
        {options.map(({ price, label}) => (
          <option className="selector-box config-item" key={`${fieldKey}-${label}`} value={label}>
            <span>{label} - {i18next.t('priceWithCurrency',{ val: price })}</span>
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;