import { useMemo, useState } from 'react';
import { BaseConfigurationType, Model } from '../models.config';

interface ConfiguratorModel {
    width: number,
    height: number,
    depth: number,
    includeDoubleAxis: boolean,
    additionalWeightSupport: boolean,
    configurtationOptions: Record<string, boolean>
}

export type ModelDimension = 'width' | 'height' | 'depth';
export type WeightProperties = 'includeDoubleAxis' | 'additionalWeightSupport'



export const useConfiguratorModel = (modelConfig: Model) => {
  const [configuration, setConfiguration] = useState<ConfiguratorModel>({
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
    setConfiguration({
      ...configuration,
      [key]: value
    });
  };

  const setWeightProperties = (key: WeightProperties, value: boolean) => {
    setConfiguration({
      ...configuration,
      [key]: value
    });
  };

  const setConfigurationOptions = (key: BaseConfigurationType, value: boolean) => {
    setConfiguration({
      ...configuration,
      configurtationOptions: {
        ...configuration.configurtationOptions,
        [key]: value
      }
    });
  };

  const calculatedPrice = useMemo(() => {
    let price = modelConfig.basePrice;
    if(configuration.additionalWeightSupport) {
      price += modelConfig.axisConfiguration.additionalWeightSuportPrice;
    }

    if(modelConfig.axisConfiguration.isDoubleAxisSupported && configuration.includeDoubleAxis) {
      price += modelConfig.axisConfiguration.doubleAxisPrice;
    }

    return modelConfig.baseConfigurationOptions.reduce((prev, item) => {
      if(configuration.configurtationOptions[item.type]) {
        return prev + item.additionalPrice;
      }

      return prev;
    }, price);

  }, [modelConfig,
    configuration.additionalWeightSupport,
    configuration.includeDoubleAxis,
    configuration.configurtationOptions,
  ]);

  return  {
    configuration,
    setSize,
    setWeightProperties,
    calculatedPrice,
    setConfigurationOptions,
  };

};