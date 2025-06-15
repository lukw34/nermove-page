import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { modelsConfigs } from '../config/models.config';
import Configurator from '../components/Configurator/Configurator';
import { ConfiguratorContextProvider } from '../context/Configurator.context';

const Configuration = () => {
  const { modelId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(!modelId || !modelsConfigs[modelId]) {
      navigate('/');
    }
  
    if(modelId === 'house') {
      navigate('/house');
    }

  }, [modelId]);
  
  if(!modelId) {
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