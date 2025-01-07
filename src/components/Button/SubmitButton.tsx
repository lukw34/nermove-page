import React from 'react';
import styles from './button.module.scss';

interface BlueButtonProps {
    onClick: () => void
    title: string
}


export const SubmitButton: React.FC<BlueButtonProps> = ({ title, onClick }) => (
  <button className={styles.submitButton} onClick={onClick}>
    {title}
  </button>

);