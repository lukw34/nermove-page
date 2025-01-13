import { useMemo, useState } from 'react';
import { BaseConfigurationType, ConfiguratorModel, Model, ModelDimension } from '../models.config';


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


  const setConfigurationOptions = (key: BaseConfigurationType, value: boolean) => {
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

    return modelConfig.baseConfigurationOptions.reduce((prev, item) => {
      if(setup.configurtationOptions[item.type]) {
        return prev + item.additionalPrice;
      }

      return prev;
    }, price);

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