import { useState } from 'react';
import { 
  Model,
  ConfiguratorModel,
  FieldKeys,
  ModelDimension,
  HouseConfiguration,
} from '../config/models.config types';
import { defaultConfigurationOptions } from '../context/Configurator.context';
import { houseLabel, LabelKeys, truckLabelMap } from '../config/models.config';


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

  const getSummary = (): string => {
    if(modelConfig.key === 'house') {
      const setupSummary = Object.keys(setup).filter(key => !!houseLabel[key as HouseConfiguration]).map((key) => `${houseLabel[key as HouseConfiguration]}: ${setup[key as FieldKeys]}`);
      return `
       Prośba o oferte domu modulowego
       ${setupSummary.join('\n')}  
      `;
    } 
    const setupSummary = Object.keys(setup).filter(key => !!truckLabelMap[key as LabelKeys]).map((key) => `${truckLabelMap[key as LabelKeys]}: ${setup[key as FieldKeys]}`);
    return `
      Model: ${modelConfig.name}
      Elementy składowe:
      ${setupSummary.join('\n')}
      `;

  };



  return  {
    setup,
    setConfigurationOptions,
    getSummary
  };

};