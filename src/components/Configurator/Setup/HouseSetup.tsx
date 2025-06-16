import React from 'react';
import TruckAddonsField from '../TruckAddonsField/TruckAddonsField';
import { HouseConfiguration } from '../../../config/models.config types';
import SimpleContacForm from '../../Contact/SimpleContactForm';

export const HouseSetup = () => {
  return (
    <div className="basic-config">
      <h3>Dom Modułowy</h3>
      <TruckAddonsField
        fieldKey={HouseConfiguration.HOUSE_TYPE}
      />
      <p className="config-divider">Typ Wykonczenia</p>
      <TruckAddonsField
        fieldKey={HouseConfiguration.HOUSE_FINISHING}
      />
      <SimpleContacForm/>
    </div>
  );};