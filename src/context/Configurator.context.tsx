import { createContext } from 'react';
import { useConfiguratorModel } from '../hooks/useConfiguratorModel';
import { ConfiguratorModel, ModelDimension, BaseConfigurationType, Model } from '../config/models.config types';


interface Configurator {
    setup: ConfiguratorModel,
    setSize: (key: ModelDimension, value: number) => void
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
    calculatedPrice: 0,
    setConfigurationOptions: () => { },
    setup: {
      width: 0,
      depth: 0,
      configurtationOptions: {}
    }
  },
  selectedModel: {
    key: '',
    name: '',
    size: {
      depth: 0,
      width: 0,
    },
    basePrice: 0,
    image: '',
    baseConfigurationOptions: [],
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