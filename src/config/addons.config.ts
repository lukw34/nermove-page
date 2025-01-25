import { FanOptions, FieldType, HoodOptions, TruckAddonsMap, TruckAddonsType, WindowOptions } from './models.config types';

export const truckAddons: TruckAddonsMap = {
  [TruckAddonsType.DETACHABLE_DRAWBAR]: {
    price: 500,
    type: FieldType.CHECKBOX
  },
  [TruckAddonsType.SUPPORTS]: {
    price: 2000,
    type: FieldType.CHECKBOX
  },
  [TruckAddonsType.TRIPLE_SINK]: {
    price: 500,
    type: FieldType.CHECKBOX
  },
  [TruckAddonsType.HOOD]: {
    type: FieldType.SELECTION,
    options: [{
      label: HoodOptions.NO_HOOD.valueOf(), price: 0,
    },{
      label: HoodOptions.ONE_METER.valueOf(), price: 1250,
    }, {
      label: HoodOptions.ONE_HALF_METER.valueOf(), price: 1500,
    }, {
      label: HoodOptions.TWO_METERS.valueOf(), price: 1750,
    }, {
      label: HoodOptions.THREE_METERS.valueOf(), price: 2500,
    }]
  },
  [TruckAddonsType.FAN]: {
    type: FieldType.SELECTION,
    options: [{
      label: FanOptions.NO_FAN.valueOf(), price: 0,
    },{
      label: FanOptions.FAN_LVL_1.valueOf(), price: 700,
    }, {
      label: FanOptions.FAN_LVL_2.valueOf(), price: 1000,
    }, {
      label: FanOptions.FAN_PREMIUM.valueOf(), price: 1250,
    }]
  },
  [TruckAddonsType.FAN_CONTROLLER]: {
    price: 400,
    type: FieldType.CHECKBOX
  },
  [TruckAddonsType.WINDOWS]: {
    type: FieldType.SELECTION,
    options: [{
      label: WindowOptions.NO_WINDOW.valueOf(), price: 0,
    },{
      label: WindowOptions.TWO_METERS.valueOf(), price: 3500,
    }, {
      label: WindowOptions.TWO_HALF_METERS.valueOf(), price: 4000,
    }, {
      label: WindowOptions.THREE_METERS.valueOf(), price: 4500,
    }]
  },
  [TruckAddonsType.FURNITURES]: {
    type: FieldType.QUANTITY,
    quantityPrice: 600,
    quantityLabel: 'szt'
  },
  [TruckAddonsType.STEAL_COUNTERTOP]: {
    type: FieldType.QUANTITY,
    quantityPrice: 300,
    quantityLabel: 'm'
  },
  [TruckAddonsType.STEAL_WALLS]: {
    type: FieldType.QUANTITY,
    quantityPrice: 300,
    quantityLabel: 'm'
  }
};