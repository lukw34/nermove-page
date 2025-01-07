import { createContext } from 'react';
import {ConfiguratorModel, ModelDimension, WeightProperties, BaseConfigurationType, Model} from '../models.config';
import { useConfiguratorModel } from '../hooks/useConfiguratorModel';


interface Configurator {
    setup: ConfiguratorModel,
    setSize: (key: ModelDimension, value: number) => void
    setWeightProperties: (key: WeightProperties, value: boolean) => void
    calculatedPrice: number
    setConfigurationOptions: (key: BaseConfigurationType, value: boolean) => void
}

interface ConfigurationContext {
    selectedModel: Model,
    configurator: Configurator
}

const defaultContext: ConfigurationContext = {
  configurator: {
    setSize: () => { },
    setWeightProperties: () => { },
    calculatedPrice: 0,
    setConfigurationOptions: () => { },
    setup: {
      width: 0,
      height: 0,
      depth: 0,
      includeDoubleAxis: false,
      additionalWeightSupport: false,
      configurtationOptions: {}
    }
  },
  selectedModel: {
    key: '',
    name: '',
    basePrice: 0,
    image: '',
    axisConfiguration: {
      isDoubleAxisSupported: false,
      additionalWeightSuportPrice: 0
    },
    baseConfigurationOptions: [],
    specialConfigurations: []
  },
};   

export const ConfiguratorContext = createContext<ConfigurationContext>(defaultContext);

export const ConfiguratorContextProvider: React.FC<{ model: Model, children: React.ReactNode}> = ({model, children}) => {
  const contextValue = {
    selectedModel: model,
    configurator: useConfiguratorModel(model)
  };
  return (
    <ConfiguratorContext.Provider value={contextValue}>
      {children}
    </ConfiguratorContext.Provider>
  );
};