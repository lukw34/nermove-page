import { useMemo, useState } from 'react';
import { 
  Model,
  ConfiguratorModel,
  TruckAddonsType,
  FieldType,
  FieldKeys,
  ModelDimension,
} from '../config/models.config types';
import { addons } from '../config/addons.config';
import { defaultConfigurationOptions } from '../context/Configurator.context';
import { labelMap } from '../config/models.config';


export const useConfiguratorModel = (modelConfig: Model) => {
  const [setup, setSetupValue] = useState<ConfiguratorModel>({
    ...defaultConfigurationOptions,
    [ModelDimension.width]: modelConfig.size.width,
    [ModelDimension.length]: modelConfig.size.length,
  });


  const setConfigurationOptions = (key: FieldKeys, value: boolean | string | number) => {
    setSetupValue({
      ...setup,
      [key]: value
    });
  };

  const calculatedPrice: number = useMemo(() => {
    const price = modelConfig.basePrice;

    const priceFromBasicConfig = modelConfig.baseConfigurationOptions.reduce((prev, item) => {
      if(setup[item.type]) {
        return prev + item.additionalPrice;
      }

      return prev;
    }, price);

    return Object.keys(addons).reduce((prev, itemKey) => {
      const value = setup[itemKey as TruckAddonsType];
      if(value) {
        const addonItem = addons[itemKey as TruckAddonsType];
        if(addonItem.type === FieldType.CHECKBOX) {
          return prev + addonItem.price;
        }

        if(addonItem.type === FieldType.SELECTION) {
          const selection = addonItem.options.find(opt => opt.label === setup[itemKey as TruckAddonsType]);
          if(selection && selection.price) {
            return selection.price + prev;
          }
        }

        if(addonItem.type === FieldType.QUANTITY) {
          return prev + (addonItem.quantityPrice * Number(value));
        }
      }
      return prev;
    }, priceFromBasicConfig);

  }, [modelConfig,
    setup,
  ]);

  const getSummary = (): string => {
    const setupSummary = Object.keys(setup).map((key) => `${labelMap[key as FieldKeys]}: ${setup[key as FieldKeys]}`);
    return `
    Cena całkowita: ${calculatedPrice}
    Model: ${modelConfig.name}
    Elementy składowe:
    ${setupSummary.join('\n')}
    `;
  };

  const leasing: number = useMemo(() => {
    // 10% for own contribution
    const base = calculatedPrice * 0.9;
    // 9,5%
    const interestRate = 0.095;
    const duration = 36;
    const buyout = calculatedPrice * 0.2;
    const leasingTop = base - (buyout / (1 + interestRate) ** duration);
    const leasingBottom = (1 - (1 + interestRate) ** (-duration)) / interestRate; 
    return Number((leasingTop / leasingBottom).toFixed(2));
  }, [calculatedPrice]);

  return  {
    setup,
    calculatedPrice,
    setConfigurationOptions,
    getSummary,
    leasing,
  };

};