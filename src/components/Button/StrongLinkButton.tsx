import React from 'react';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

interface StrongLinkButtonProps {
    to: string,
    title: string
    onClick?: () => void
}


export const StrongLinkButton: React.FC<StrongLinkButtonProps> = ({ title, to, onClick }) => (
  <Link className={styles.strongLinkButton} onClick={onClick} to={to}>
    {title}
  </Link>
);