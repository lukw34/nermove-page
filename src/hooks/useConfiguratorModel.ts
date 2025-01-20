import { useMemo, useState } from 'react';
import { 
  Model,
  ConfiguratorModel,
  ModelDimension,
  BaseConfigurationType,
  TruckAddonsType,
  FieldType, 
} from '../config/models.config types';
import { truckAddons } from '../config/addons.config';


export const useConfiguratorModel = (modelConfig: Model) => {
  const [setup, setSetupValue] = useState<ConfiguratorModel>({
    width: modelConfig.size.width,
    depth: modelConfig.size.depth,
    configurtationOptions: modelConfig.baseConfigurationOptions.reduce((prev, item) => ({
      ...prev,
      [item.type]: false
    }), {})
  });


  const setSize = (key: ModelDimension, value: number) => {
    setSetupValue({
      ...setup,
      [key]: value
    });
  };


  const setConfigurationOptions = (key: BaseConfigurationType | TruckAddonsType, value: boolean | string) => {
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
      if(setup.configurtationOptions[itemKey]) {
        const addonItem = truckAddons[itemKey as TruckAddonsType];
        if(addonItem.type === FieldType.CHECKBOX) {
          return prev + addonItem.price;
        }

        if(addonItem.type === FieldType.SELECTION) {
          const selection = addonItem.options.find(opt => opt.label === setup.configurtationOptions[itemKey])
          if(selection) {
            return selection.price + prev;
          }
        }
      }
      return prev;
    }, priceFromBasicConfig);

  }, [modelConfig,
    setup.configurtationOptions,
  ]);

  return  {
    setup,
    setSize,
    calculatedPrice,
    setConfigurationOptions,
  };

};