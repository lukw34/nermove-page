import React from 'react';
import styles from './header.module.scss';
import MenuLinkButton from '../Button/MenuLinkButton';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className={styles.appHeader}>
    <Link className={styles.headerLink} to="/">
      <h1>
        NEROMOVE
      </h1>
    </Link>
    <MenuLinkButton title="Galeria" to="gallery"/>
    <MenuLinkButton title="Kontakt" to="contact"/>
    <MenuLinkButton title="Proces Realizacji" to="process"/>
    <MenuLinkButton title="O nas" to="about"/>
    {/* <BlueButton onClick={() => null} title="Menu"/> */}
  </header>
);

export default Header;