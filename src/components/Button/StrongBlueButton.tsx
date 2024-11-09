import React from 'react';
import styles from './button.module.scss';

interface StrongBlueButtonProps {
    onClick: () => void
    title: string
}


export const StrongBlueButton: React.FC<StrongBlueButtonProps> = ({ title, onClick }) => (
  <button className={styles.strongBlueButton} onClick={onClick}>
    {title}
  </button>

);