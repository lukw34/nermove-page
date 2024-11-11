import { useState } from 'react';
import { BaseConfigurationType } from '../models.config';

interface ConfiguratorModel {
    width: number,
    height: number,
    depth: number,
    includeDoubleAxis: boolean,
    additionalWeightSupport: boolean,
    configurtationOptions: Set<BaseConfigurationType>
}

export type ModelDimension = 'width' | 'height' | 'depth';
export type WeightProperties = 'includeDoubleAxis' | 'additionalWeightSupport'



export const useConfiguratorModel = () => {
  const [configuration, setConfiguration] = useState<ConfiguratorModel>({
    width: 100,
    height: 100,
    depth: 100,
    includeDoubleAxis: false,
    additionalWeightSupport: false,
    configurtationOptions: new Set()
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

  return  {
    configuration,
    setSize,
    setWeightProperties
  };

};