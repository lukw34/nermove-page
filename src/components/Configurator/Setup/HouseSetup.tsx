import React from 'react';
import TruckAddonsField from '../TruckAddonsField/TruckAddonsField';
import { HouseConfiguration } from '../../../config/models.config types';
import SimpleContacForm from '../../Contact/SimpleContactForm';
import InfoBox from '../../InfoBox/InfoBox';

export const HouseSetup = () => {
  return (
    <div className="basic-config">
      <h3>Dom Modułowy</h3>
      <p className="config-divider">Typ Wykonczenia</p>
      <TruckAddonsField
        fieldKey={HouseConfiguration.HOUSE_FINISHING}
      />
      <InfoBox infoText="Domki wyceniane są indywidualnie w zależności od metrażu, standardu wykończenia oraz innych czynnikow"/>
      <InfoBox infoText="Do ceny domku należy doliczyć koszt transportu w wybrane miejsce."/>
      <SimpleContacForm/>
    </div>
  );};