import React from 'react';
import './configurator.scss';
import { Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';


const Configurator: React.FC = () => {
  const { modelId } = useParams();
    
  return (
    <div className={classNames('configurator-wrapper', `${modelId}-wrapper`)}>
      <div className={classNames('model-image', modelId)} />
      <Outlet />
    </div>
  );
};

export default Configurator;