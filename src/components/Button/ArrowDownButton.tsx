import React from 'react';
import styles from './button.module.scss';

interface ArrowDownButtonProps {
    onClick:() => void
}

const ArrowDownButton: React.FC<ArrowDownButtonProps> = ({ onClick }) => (
  <button className={styles.arrowDownContainer} onClick={onClick}>
    <i className={styles.arrowDown}/>
  </button>
);

export default ArrowDownButton;