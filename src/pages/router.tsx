import {
  createHashRouter,
  redirect,
} from 'react-router-dom';
import App from '../components/App/App';
import Contact from './Contat';
import Gallery from './Gallery';
import Main from './Main';
import Configuration from './Configuration';
import About from './About';
import RealizationProcess from './RealizationProcess';
import { Setup } from '../components/Configurator/Setup/Setup';
import { Summary } from '../components/Configurator/Summary/Summary';
import Regulations from './Regulations';
import Rodo from './Rodo';
import HouseConfigurator from '../components/Configurator/HouseConfigurator';

  
export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    action: () => redirect('/main'),
    children: [
      {
        path: 'models/:modelId',
        element: <Configuration />,
        children: [ {
          path: '',
          element: <Setup/>
        }, {
          path: 'summary',
          element: <Summary />
        }]
      },

      {
        path: 'house',
        element: <HouseConfigurator />,
      },
      
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'process',
        element: <RealizationProcess />,
      },
      {
        path: 'regulations',
        element: <Regulations />,
      },
      {
        path: 'rodo',
        element: <Rodo />,
      },
      {
        path: '',
        element: <Main />,
      },
    ],
  },
]);