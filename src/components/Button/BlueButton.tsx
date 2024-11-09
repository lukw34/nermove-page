import React from 'react';
import styles from './button.module.scss';

interface BlueButtonProps {
    onClick: () => void
    title: string
}


export const BlueButton: React.FC<BlueButtonProps> = ({ title, onClick }) => (
  <button className={styles.menuButton} onClick={onClick}>
    {title}
  </button>

);