import {
    createBrowserRouter,
    redirect,
  } from 'react-router-dom';
import App from '../components/App/App';
import Contact from './Contat';
import Gallery from './Gallery';
import Main from './Main';

  
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    action: () => redirect('/main'),
    children: [
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: '',
        element: <Main />,
      },
    ],
  },
]);