import React from 'react';
import { redirect, useParams } from 'react-router-dom';
import { modelsConfigs } from '../models.config';
import Configurator from '../components/Configurator/Configurator';

const Configuration = () => {
  const { modelId } = useParams();

  if(!modelId || !modelsConfigs[modelId]) {
    redirect('/');
    return null;
  }

  const model = modelsConfigs[modelId];

  return (
    <section id={`configuration-${modelId}`}>
      <Configurator model={model}/>
    </section>
  );
};

export default Configuration;