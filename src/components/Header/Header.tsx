import React from 'react';
import styles from './header.module.scss';
import { BlueButton } from '../Button/BlueButton';

const Header: React.FC = () => (
  <header className={styles.appHeader}>
    <h1>
      NEROMOVE
    </h1>
    <BlueButton onClick={() => null} title="Menu"/>
  </header>
);

export default Header;