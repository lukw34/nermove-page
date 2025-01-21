import { BaseConfigurationType, FieldKeys, Model, TruckAddonsType } from './models.config types';



const labelMap: Record<FieldKeys, string> = {
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
  [TruckAddonsType.FAN_CONTROLLER]: 'Regulator obrotów',
  [TruckAddonsType.WINDOWS]: 'Okna całoroczne'
};

const modelsBaseConfigs: Model[] = [{
  key: 'nunu',
  name: 'Nunu',
  basePrice: 17900,
  size: {
    width: 350,
    depth: 200,
  },
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