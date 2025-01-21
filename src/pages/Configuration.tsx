import React, { useMemo } from 'react';
import { redirect, useParams } from 'react-router-dom';
import { modelsConfigs } from '../config/models.config';
import Configurator from '../components/Configurator/Configurator';
import { ConfiguratorContextProvider } from '../context/Configurator.context';

const Configuration = () => {
  const { modelId } = useParams();

  if(!modelId || !modelsConfigs[modelId]) {
    redirect('/');
    return null;
  }

  const model = useMemo(() => modelsConfigs[modelId], [modelId]);

  return (
    <section id={`configuration-${modelId}`}>
      <ConfiguratorContextProvider model={model}>
        <Configurator />
      </ConfiguratorContextProvider>
    </section>
  );
};

export default Configuration;