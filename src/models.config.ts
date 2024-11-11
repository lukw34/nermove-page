export enum BaseConfigurationType {
    ELECTRICITY = 'ELECTRICITY',
    WATER = 'WATER',
    FURNITURE = 'FURNITURE'
}

export enum SpecialConfigurationType {
    KEBAB = 'KEBAB',
    PIZZA = 'PIZZA'
}

export interface BaseConfiguration {
    additionalPrice: number,
    type: BaseConfigurationType
}

export interface DoubleAxisConfiguration {
    isDoubleAxisSupported: true,
    doubleAxisPrice: number
    additionalWeightSuportPrice: number,
}

export type AxisConfiguration = {
    isDoubleAxisSupported: false,
    additionalWeightSuportPrice: number,
} | DoubleAxisConfiguration;


export interface Model {
    key: string,
    name: string,
    basePrice: number,
    image: string,
    axisConfiguration: AxisConfiguration,
    baseConfigurationOptions: BaseConfiguration[],
    specialConfigurations: SpecialConfigurationType[]
}




const modelsBaseConfigs: Model[] = [{
  key: 'nunu',
  name: 'Nunu',
  basePrice: 12432134,
  image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2022/12/food-truck-coffe-merrild-45.jpg',
  axisConfiguration: {
    isDoubleAxisSupported: false,
    additionalWeightSuportPrice: 23954345
  },
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 3453456
  }, {
    type: BaseConfigurationType.FURNITURE,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 23424
  }],
  specialConfigurations: [SpecialConfigurationType.KEBAB]
}, {
  key: 'explorer',
  name: 'Explorer',
  basePrice: 20032400,
  image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2023/07/syty-wol-24.jpg',
  axisConfiguration: {
    isDoubleAxisSupported: false,
    additionalWeightSuportPrice: 23954345
  },
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 323453456
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 23424
  }],
  specialConfigurations: [SpecialConfigurationType.KEBAB, SpecialConfigurationType.PIZZA]
}, {
  key: 'rocket',
  name: 'Rocket',
  basePrice: 3023403,
  image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2021/11/samochod-ekspozycyjny-wystawowy-010.jpg',
  axisConfiguration: {
    isDoubleAxisSupported: true,
    additionalWeightSuportPrice: 23954345,
    doubleAxisPrice: 12423231212
  },
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 3453456
  }, {
    type: BaseConfigurationType.FURNITURE,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 23424
  }],
  specialConfigurations: [SpecialConfigurationType.KEBAB, SpecialConfigurationType.PIZZA]
}];

const { modelsConfigs, modelsList } = modelsBaseConfigs.reduce<{
    modelsList: string[],
    modelsConfigs: Record<string, Model>
}>((prev, item) => ({
  modelsList: [...prev.modelsList, item.key],
  modelsConfigs: {
    ...prev.modelsConfigs,
    [item.key]: item
  }
}), { modelsList: [], modelsConfigs: {} });

export {
  modelsConfigs,
  modelsList,
};