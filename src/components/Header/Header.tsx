import React from 'react';
import './header.scss';
import MenuLinkButton from '../Button/MenuLinkButton';
import { Link } from 'react-router-dom';
import { ActionButton } from '../Button/ActionButton';

const Header: React.FC = () => (
  <header className="app-header">
    <Link className="header-link" to="/">
      <h1>
        NEROMOVE
      </h1>
    </Link>
    <div className="header-full-screen-buttons">
      <MenuLinkButton title="Galeria" to="gallery"/>
      <MenuLinkButton title="Kontakt" to="contact"/>
      <MenuLinkButton title="Proces Realizacji" to="process"/>
      <MenuLinkButton title="O nas" to="about"/>
    </div>
    <div className="header-menu-button">   
      <ActionButton title="Menu" onClick={()=>null}/>
    </div> 
  </header>
);

export default Header;