import React from 'react';
import './configurator.scss';
import { HouseSetup } from './Setup/HouseSetup';
import classNames from 'classnames';
import { ConfiguratorContextProvider } from '../../context/Configurator.context';
import { modelsConfigs } from '../../config/models.config';


const HouseConfigurator: React.FC = () => {
    
  return (
    <section id={'configuration-house'}>
      <ConfiguratorContextProvider model={modelsConfigs.house}>
        <div className={classNames('configurator-wrapper', 'house-wrapper')}>
          <div className={classNames('model-image', 'house')} />
          <HouseSetup />
        </div>
      </ConfiguratorContextProvider>
    </section>
  );
};

export default HouseConfigurator;