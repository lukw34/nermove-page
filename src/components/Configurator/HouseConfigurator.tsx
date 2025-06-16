import React from 'react';
import './configurator.scss';
import { HouseSetup } from './Setup/HouseSetup';


const HouseConfigurator: React.FC = () => {
    
  return (
    <div className="configurator-wrapper">
      <div className="house-image" />
      <HouseSetup />
    </div>
  );
};

export default HouseConfigurator;