import React from 'react';
import './header.scss';
import MenuLinkButton from '../Button/MenuLinkButton';
import { Link } from 'react-router-dom';
import { ActionButton } from '../Button/ActionButton';
import logo from '../../img/logo.png';

interface HeaderProps {
  openOverlay: () => void
}

const Header: React.FC<HeaderProps> = ({ openOverlay }) => (
  <header className="app-header">
    <Link className="header-link" to="/">
      <img className="logo-image" src={logo}/>
    </Link>
    <div className="header-full-screen-buttons">
      <MenuLinkButton title="Galeria" to="gallery"/>
      <MenuLinkButton title="Kontakt" to="contact"/>
      <MenuLinkButton title="Proces Realizacji" to="process"/>
    </div>
    <div className="header-menu-button">   
      <ActionButton onClick={openOverlay} title="Menu"/>
    </div> 
  </header>
);

export default Header;