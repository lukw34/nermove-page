import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
      onClick: () => void
    title: string
}


const Button: React.FC<ButtonProps> = ({ title, onClick }) => (
  <button className={styles.defaultButton} onClick={onClick}>
    {title}
  </button>

);

export default Button;