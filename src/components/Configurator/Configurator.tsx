import React, { useContext } from 'react';
import './configurator.scss';
import { ConfiguratorContext } from '../../context/Configurator.context';
import { Outlet } from 'react-router-dom';


const Configurator: React.FC = () => {

  const { selectedModel: { image } } = useContext(ConfiguratorContext);
    
  return (
    <div className="configurator-wrapper">
      <img className="model-image" src={image} />
      <Outlet />
    </div>
  );
};

export default Configurator;