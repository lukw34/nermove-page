import { createContext } from 'react';
import { useConfiguratorModel } from '../hooks/useConfiguratorModel';
import { ConfiguratorModel, ModelDimension, Model, FieldKeys, BaseConfigurationType, TruckAddonsType, HoodOptions, FanOptions, WindowOptions } from '../config/models.config types';


interface Configurator {
    setup: ConfiguratorModel,
    calculatedPrice: number
    setConfigurationOptions: (key: FieldKeys, value: boolean | string | number) => void
    getSummary: () => string
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
  [TruckAddonsType.SIZE_ADJUSTMENT]: false,
  [TruckAddonsType.DETACHABLE_DRAWBAR]: false,
  [TruckAddonsType.SUPPORTS]: false,
  [TruckAddonsType.HOOD]: HoodOptions.NO_HOOD.valueOf(),
  [TruckAddonsType.TRIPLE_SINK]: false,
  [TruckAddonsType.FAN]: FanOptions.NO_FAN.valueOf(),
  [TruckAddonsType.FAN_CONTROLLER]: false,
  [TruckAddonsType.WINDOWS]: WindowOptions.NO_WINDOW.valueOf(),
  [TruckAddonsType.STEAL_COUNTERTOP]: 0,
  [TruckAddonsType.STEAL_WALLS]: 0,
  [TruckAddonsType.FURNITURES]: 0,
  [ModelDimension.length]: 0,
  [ModelDimension.width]: 0
};

const defaultContext: ConfigurationContext = {
  configurator: {
    calculatedPrice: 0,
    setConfigurationOptions: () => { },
    setup: defaultConfigurationOptions,
    getSummary: () => ''
  },
  selectedModel: {
    key: '',
    name: '',
    size: {
      length: 0,
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