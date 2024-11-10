import React from 'react';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

interface StrongBlueButtonProps {
    to: string,
    title: string
}


export const StrongBlueButton: React.FC<StrongBlueButtonProps> = ({ title, to }) => (
  <Link className={styles.strongBlueButton} to={to}>
    {title}
  </Link>

);