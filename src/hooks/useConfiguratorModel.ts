import { useMemo, useState } from 'react';
import { 
  Model,
  ConfiguratorModel,
  TruckAddonsType,
  FieldType,
  FieldKeys,
  ModelDimension,
} from '../config/models.config types';
import { truckAddons } from '../config/addons.config';
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

    return Object.keys(truckAddons).reduce((prev, itemKey) => {
      const value = setup[itemKey as TruckAddonsType];
      if(value) {
        const addonItem = truckAddons[itemKey as TruckAddonsType];
        if(addonItem.type === FieldType.CHECKBOX) {
          return prev + addonItem.price;
        }

        if(addonItem.type === FieldType.SELECTION) {
          const selection = addonItem.options.find(opt => opt.label === setup[itemKey as TruckAddonsType]);
          if(selection) {
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
    Elementy składowe:
    ${setupSummary.join('\n')}
    `;
  };

  return  {
    setup,
    calculatedPrice,
    setConfigurationOptions,
    getSummary
  };

};