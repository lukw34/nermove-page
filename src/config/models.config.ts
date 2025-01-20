import { BaseConfigurationType, Model, TruckAddonsType } from './models.config types';



const labelMap: Record<BaseConfigurationType | TruckAddonsType, string> = {
  [BaseConfigurationType.ELECTRICITY]: 'Elektryka',
  [BaseConfigurationType.WATER]: 'Sanitaria',
  [BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT]: 'Wzmocniona Podloga',
  [BaseConfigurationType.COLOR]: 'Dowolny Kolor Obicia',
  [BaseConfigurationType.SIZE_ADJUSTMENT]: 'Dostosuj rozmiar',
  [TruckAddonsType.DETACHABLE_DRAWBAR]: 'Odpinany dyszel',
  [TruckAddonsType.SUPPORTS]: 'Podpory nożycowe Al-KO',
  [TruckAddonsType.HOOD]: 'Okap',
  [TruckAddonsType.TRIPLE_SINK]: 'Potrójny zlew',
  [TruckAddonsType.FAN]: 'Wentylator',
  [TruckAddonsType.FAN_CONTROLLER]: 'Regulator obrotów'
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
  labelMap
};