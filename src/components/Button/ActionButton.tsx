import React from 'react';
import styles from './button.module.scss';

interface ActionButtonProps {
    onClick?: () => void
    title: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    disabled?: boolean
}


export const ActionButton: React.FC<ActionButtonProps> = ({ title, onClick, type, disabled}) => (
  <button disabled={disabled} className={styles.submitButton} onClick={onClick} type={type}>
    {title}
  </button>

);