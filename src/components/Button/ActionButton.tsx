import React from 'react';
import styles from './button.module.scss';

interface ActionButtonProps {
    onClick: () => void
    title: string
}


export const ActionButton: React.FC<ActionButtonProps> = ({ title, onClick }) => (
  <button className={styles.submitButton} onClick={onClick}>
    {title}
  </button>

);