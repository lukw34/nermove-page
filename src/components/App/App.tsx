import React from 'react';
import styles from './app.module.scss';
import Header from '../Header/Header';
import {
  Outlet,
} from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default App;
