import React from 'react';
import './configurator.scss';
import { Outlet } from 'react-router-dom';


const Configurator: React.FC = () => {
    
  return (
    <div className="configurator-wrapper">
      <div className="model-image nunu" />
      <Outlet />
    </div>
  );
};

export default Configurator;