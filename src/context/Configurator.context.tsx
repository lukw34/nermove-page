import { createContext } from 'react';
import { useConfiguratorModel } from '../hooks/useConfiguratorModel';
import { ConfiguratorModel, ModelDimension, Model, FieldKeys, BaseConfigurationType, TruckAddonsType, HoodOptions, FanOptions, WindowOptions } from '../config/models.config types';


interface Configurator {
    setup: ConfiguratorModel,
    setSize: (key: ModelDimension, value: number) => void
    calculatedPrice: number
    setConfigurationOptions: (key: FieldKeys, value: boolean | string) => void
}

interface ConfigurationContext {
    selectedModel: Model,
    configurator: Configurator
}

export const defaultConfigurationOptions = {
  [BaseConfigurationType.ELECTRICITY]: false,
  [BaseConfigurationType.WATER]: false,
  [BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT]: false,
  [BaseConfigurationType.COLOR]: false,
  [BaseConfigurationType.SIZE_ADJUSTMENT]: false,
  [TruckAddonsType.DETACHABLE_DRAWBAR]: false,
  [TruckAddonsType.SUPPORTS]: false,
  [TruckAddonsType.HOOD]: HoodOptions.NO_HOOD.valueOf(),
  [TruckAddonsType.TRIPLE_SINK]: false,
  [TruckAddonsType.FAN]: FanOptions.NO_FAN.valueOf(),
  [TruckAddonsType.FAN_CONTROLLER]: false,
  [TruckAddonsType.WINDOWS]: WindowOptions.NO_WINDOW.valueOf()
};

const defaultContext: ConfigurationContext = {
  configurator: {
    setSize: () => { },
    calculatedPrice: 0,
    setConfigurationOptions: () => { },
    setup: {
      width: 0,
      depth: 0,
      configurtationOptions: defaultConfigurationOptions
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