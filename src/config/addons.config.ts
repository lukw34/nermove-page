import { FanOptions, FieldType, HoodOptions, TruckAddonsMap, TruckAddonsType } from './models.config types';

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
  }
};