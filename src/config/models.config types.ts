export enum BaseConfigurationType {
    ELECTRICITY = 'ELECTRICITY',
    WATER = 'WATER',
    ADDITONAL_WEIGHT_SUPPORT = 'ADDITONAL_WEIGHT_SUPPORT',
    COLOR = 'COLOR'
}

export enum TruckAddonsType {
  DETACHABLE_DRAWBAR = 'DETACHABLE_DRAWBAR',
  SUPPORTS = 'SUPPORTS',
  HOOD = 'HOOD',
  TRIPLE_SINK = 'TRIPLE_SINK',
  FAN = 'FAN',
  FAN_CONTROLLER = 'FAN_CONTROLLER',
  WINDOWS = 'WINDOWS',
  FURNITURES = 'FURNITURES',
  STEAL_COUNTERTOP = 'STEAL_COUNTERTOP',
  STEAL_WALLS = 'STEAL_WALLS',
  SIZE_ADJUSTMENT = 'SIZE_ADJUSTMENT'
}


export enum FanOptions{
  NO_FAN = 'Brak Wentylatora',
  FAN_LVL_1 = 'Wentylator 1200m3/g',
  FAN_LVL_2 = 'Wntylator 2200m3/g',
  FAN_PREMIUM = 'Wentylator Zewnętrzny (Premium)'
}

export enum HoodOptions {
  NO_HOOD = 'Brak Okapu',
  ONE_METER = 'Okap 1m',
  ONE_HALF_METER = 'Okap 1,5m',
  TWO_METERS = 'Okap 2m',
  THREE_METERS = 'Okap 3m',
}

export enum WindowOptions {
  NO_WINDOW = 'Brak Okien Całorocznych',
  TWO_METERS= 'Okno całoroczne 2m',
  TWO_HALF_METERS = 'Okno całoroczne 2,5m',
  THREE_METERS = 'Okno całoroczne 3m',
}

export interface ChoiceOptions {
  label: string,
  price: number
}

export interface BaseConfiguration {
    additionalPrice: number,
    type: BaseConfigurationType
}

export interface ModelSize {
  width: number,
  length: number,
}

export interface Model {
    key: string,
    name: string,
    description: string,
    basePrice: number,
    size: ModelSize,
    baseConfigurationOptions: BaseConfiguration[],
}

export type  ConfiguratorModel = 
  Record<FieldKeys, boolean | string | number>

export enum FieldType {
  CHECKBOX = 'CHECKBOX',
  SELECTION = 'SELECTION',
  QUANTITY = 'QUANTITY'
}

export enum ModelDimension {
  width = 'width',
  length = 'length'
}

export interface CheckboxAddon {
  type: FieldType.CHECKBOX,
  price: number
}

export interface QuantityAddon {
  type: FieldType.QUANTITY,
  quantityPrice: number,
  quantityLabel: string
}

export interface SelectionOptionsItem {
  price: number, label: string
}

export interface SelectionOptions {
  options: SelectionOptionsItem[]
  type: FieldType.SELECTION
}

export type TruckAddonsMap = {
[key in (keyof typeof TruckAddonsType)]: CheckboxAddon | SelectionOptions | QuantityAddon
}

export type FieldKeys = BaseConfigurationType | TruckAddonsType | ModelDimension