import React from 'react';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
    title: string
    to: string
}


const LinkButton: React.FC<LinkButtonProps> = ({ title, to }) => (
  <Link className={styles.defaultButton} to={to}>
    {title}
  </Link>

);

export default LinkButton;