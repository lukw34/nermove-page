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


export const useConfiguratorModel = (modelConfig: Model) => {
  const [setup, setSetupValue] = useState<ConfiguratorModel>({
    width: 0,
    depth: 0,
    configurtationOptions: {
      ...defaultConfigurationOptions,
      [ModelDimension.width]: modelConfig.size.width,
      [ModelDimension.depth]: modelConfig.size.depth,
    }
  });


  const setConfigurationOptions = (key: FieldKeys, value: boolean | string | number) => {
    setSetupValue({
      ...setup,
      configurtationOptions: {
        ...setup.configurtationOptions,
        [key]: value
      }
    });
  };

  const calculatedPrice: number = useMemo(() => {
    const price = modelConfig.basePrice;

    const priceFromBasicConfig = modelConfig.baseConfigurationOptions.reduce((prev, item) => {
      if(setup.configurtationOptions[item.type]) {
        return prev + item.additionalPrice;
      }

      return prev;
    }, price);

    return Object.keys(truckAddons).reduce((prev, itemKey) => {
      const value = setup.configurtationOptions[itemKey as TruckAddonsType];
      if(value) {
        const addonItem = truckAddons[itemKey as TruckAddonsType];
        if(addonItem.type === FieldType.CHECKBOX) {
          return prev + addonItem.price;
        }

        if(addonItem.type === FieldType.SELECTION) {
          const selection = addonItem.options.find(opt => opt.label === setup.configurtationOptions[itemKey as TruckAddonsType]);
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
    setup.configurtationOptions,
  ]);

  return  {
    setup: {
      ...setup,
      width: Number(setup.configurtationOptions[ModelDimension.width]),
      depth: Number(setup.configurtationOptions[ModelDimension.depth])
    },
    calculatedPrice,
    setConfigurationOptions,
  };

};