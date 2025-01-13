export enum BaseConfigurationType {
    ELECTRICITY = 'ELECTRICITY',
    WATER = 'WATER',
    ADDITONAL_WEIGHT_SUPPORT = 'ADDITONAL_WEIGHT_SUPPORT',
    COLOR = 'COLOR',
    SIZE_ADJUSTMENT = 'SIZEA_DJUSTMENT',
    DETACHABLE_DRAWBAR = 'DETACHABLE_DRAWBAR',
    SUPPORTS = 'SUPPORTS',
    HOOD = 'HOOD',
}

export enum HoodOptions {
  ONE_METER = 'ONE_METER'
}

export interface BaseConfiguration {
    additionalPrice: number,
    type: BaseConfigurationType
}

export interface ModelSize {
  width: number,
  depth: number,
}

export interface Model {
    key: string,
    name: string,
    basePrice: number,
    size: ModelSize,
    image: string,
    baseConfigurationOptions: BaseConfiguration[],
}

export interface ConfiguratorModel {
  width: number,
  depth: number,
  configurtationOptions: Record<string, boolean>
}

export type ModelDimension = 'width' | 'depth';

export const SIZE_ADJUSTMENT_PRICE = 1000;


export const addons = {
  [BaseConfigurationType.DETACHABLE_DRAWBAR]: {
    price: 500,
  },
  [BaseConfigurationType.SUPPORTS]: {
    price: 2000
  },
  [BaseConfigurationType.HOOD]: {
    options: [{ type: HoodOptions.ONE_METER, price: 1250 }]
  },
};

const modelsBaseConfigs: Model[] = [{
  key: 'nunu',
  name: 'Nunu',
  basePrice: 17900,
  size: {
    width: 350,
    depth: 200,
  },
  image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2022/12/food-truck-coffe-merrild-45.jpg',
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 2500,
  }, {
    type: BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.COLOR,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 2500
  }],
}, {
  key: 'explorer',
  name: 'Explorer',
  basePrice: 20032400,
  size: {
    width: 450,
    depth: 220,
  },
  image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2023/07/syty-wol-24.jpg',
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 2500,
  }, {
    type: BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.COLOR,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 2500
  }],
}, {
  key: 'odyssey',
  name: 'Odyssey',
  size: {
    width: 550,
    depth: 240,
  },
  basePrice: 3023403,
  image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2021/11/samochod-ekspozycyjny-wystawowy-010.jpg',
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 2500,
  }, {
    type: BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.COLOR,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 2500
  }]
},  {
  key: 'rocket',
  name: 'Rocket',
  size: {
    width: 650,
    depth: 240,
  },
  basePrice: 3023403,
  image: 'https://przyczepygastronomiczne.pl/wp-content/uploads/2021/11/samochod-ekspozycyjny-wystawowy-010.jpg',
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 2500,
  }, {
    type: BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.COLOR,
    additionalPrice: 3934593
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 2500
  }]
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