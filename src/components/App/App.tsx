import React, { useState } from 'react';
import styles from './app.module.scss';
import Header from '../Header/Header';
import {
  Outlet,
} from 'react-router-dom';
import OverlayNavigation from '../OverlayNavigation/OverlayNavigation';

const App = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <div className={styles.app}>
      <Header openOverlay={() => setIsOverlayOpen(true)} />
      <OverlayNavigation isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default App;
