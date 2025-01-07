import { useMemo, useState } from 'react';
import { BaseConfigurationType, ConfiguratorModel, Model, ModelDimension, WeightProperties } from '../models.config';


export const useConfiguratorModel = (modelConfig: Model) => {
  const [setup, setSetupValue] = useState<ConfiguratorModel>({
    width: 100,
    height: 100,
    depth: 100,
    includeDoubleAxis: false,
    additionalWeightSupport: false,
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

  const setWeightProperties = (key: WeightProperties, value: boolean) => {
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
    let price = modelConfig.basePrice;
    if(setup.additionalWeightSupport) {
      price += modelConfig.axisConfiguration.additionalWeightSuportPrice;
    }

    if(modelConfig.axisConfiguration.isDoubleAxisSupported && setup.includeDoubleAxis) {
      price += modelConfig.axisConfiguration.doubleAxisPrice;
    }

    return modelConfig.baseConfigurationOptions.reduce((prev, item) => {
      if(setup.configurtationOptions[item.type]) {
        return prev + item.additionalPrice;
      }

      return prev;
    }, price);

  }, [modelConfig,
    setup.additionalWeightSupport,
    setup.includeDoubleAxis,
    setup.configurtationOptions,
  ]);

  return  {
    setup,
    setSize,
    setWeightProperties,
    calculatedPrice,
    setConfigurationOptions,
  };

};