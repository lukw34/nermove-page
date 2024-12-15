import React from 'react';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
    title: string
    to: string
}

const MenuLinkButton: React.FC<LinkButtonProps> = ({ title, to }) => (
  <Link className={styles.menuLinkButton} to={to}>
    {title}
  </Link>

);

export default MenuLinkButton;