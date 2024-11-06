import React from 'react';
import styles from './app.module.scss';
import Header from '../Header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
    </div>
  );
}

export default App;
