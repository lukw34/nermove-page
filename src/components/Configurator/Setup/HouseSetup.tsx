import React from 'react';
import TruckAddonsField from '../TruckAddonsField/TruckAddonsField';
import { HouseConfiguration } from '../../../config/models.config types';
import SimpleContacForm from '../../Contact/SimpleContactForm';

export const HouseSetup = () => {
  return (
    <div className="basic-config">
      <h3>Dom Modułowy</h3>
      <p className="config-divider">Typ Wykonczenia</p>
      <TruckAddonsField
        fieldKey={HouseConfiguration.HOUSE_FINISHING}
      />
      {/* <div>
        <p>
          Domki wyceniane są indywidualnie w zależności od metrażu, standardu wykończenia oraz innych czynnikow
        </p>
        <p>
          Do ceny domku należy doliczyć koszt transportu w wybrane miejsce.
        </p>
      </div>} */}
      <SimpleContacForm/>
    </div>
  );};