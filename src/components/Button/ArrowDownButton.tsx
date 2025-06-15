import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

interface ArrowDownButtonProps {
    onClick:() => void,
    additionalClassName?: string
}

const ArrowDownButton: React.FC<ArrowDownButtonProps> = ({ onClick, additionalClassName }) => (
  <button className={classnames(styles.arrowDownContainer, additionalClassName)} onClick={onClick}>
    <i className={styles.arrowDown}/>
  </button>
);

export default ArrowDownButton;