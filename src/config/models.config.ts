import { BaseConfigurationType, FieldKeys, Model, ModelDimension, TruckAddonsType } from './models.config types';



const labelMap: Record<FieldKeys, string> = {
  [BaseConfigurationType.ELECTRICITY]: 'Elektryka',
  [BaseConfigurationType.WATER]: 'Sanitaria',
  [BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT]: 'Wzmocniona Podloga',
  [BaseConfigurationType.COLOR]: 'Dowolny Kolor Obicia',
  [TruckAddonsType.SIZE_ADJUSTMENT]: 'Dostosuj rozmiar',
  [TruckAddonsType.DETACHABLE_DRAWBAR]: 'Odpinany dyszel',
  [TruckAddonsType.SUPPORTS]: 'Podpory nożycowe Al-KO',
  [TruckAddonsType.HOOD]: 'Okap',
  [TruckAddonsType.TRIPLE_SINK]: 'Potrójny zlew',
  [TruckAddonsType.FAN]: 'Wentylator',
  [TruckAddonsType.FAN_CONTROLLER]: 'Regulator obrotów',
  [TruckAddonsType.WINDOWS]: 'Okna całoroczne',
  [TruckAddonsType.FURNITURES]: 'Umeblowanie',
  [TruckAddonsType.STEAL_COUNTERTOP]: 'Obicie stala nierdzewn blatu',
  [TruckAddonsType.STEAL_WALLS]: 'Obicie stala nierdzewna ścian',
  [ModelDimension.width]:'Szerokość',
  [ModelDimension.length]: 'Długość'
};

const modelsBaseConfigs: Model[] = [{
  key: 'nunu',
  name: 'Nunu',
  basePrice: 17900,
  size: {
    width: 200,
    length: 350,
  },
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 2500,
  }, {
    type: BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT,
    additionalPrice: 1250
  }, {
    type: BaseConfigurationType.COLOR,
    additionalPrice: 1500
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 2500
  }],
}, {
  key: 'explorer',
  name: 'Explorer',
  basePrice: 28900,
  size: {
    width: 220,
    length: 450,
  },
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 2750,
  }, {
    type: BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT,
    additionalPrice: 1500
  }, {
    type: BaseConfigurationType.COLOR,
    additionalPrice: 1750
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 2500
  }],
},  {
  key: 'rocket',
  name: 'Rocket',
  size: {
    width: 240,
    length: 500,
  },
  basePrice: 34900,
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 3000,
  }, {
    type: BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT,
    additionalPrice: 1750
  }, {
    type: BaseConfigurationType.COLOR,
    additionalPrice: 2500
  }, {
    type: BaseConfigurationType.WATER,
    additionalPrice: 2500
  }]
}, {
  key: 'odyssey',
  name: 'Odyssey',
  size: {
    width: 240,
    length: 550,
  },
  basePrice:43900,
  baseConfigurationOptions: [{
    type: BaseConfigurationType.ELECTRICITY,
    additionalPrice: 3500,
  }, {
    type: BaseConfigurationType.ADDITONAL_WEIGHT_SUPPORT,
    additionalPrice: 2500
  }, {
    type: BaseConfigurationType.COLOR,
    additionalPrice: 2250
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