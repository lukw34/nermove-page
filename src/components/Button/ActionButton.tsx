import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface ActionButtonProps {
    onClick?: () => void
    title: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    disabled?: boolean,
    externalClassName?: string
}


export const ActionButton: React.FC<ActionButtonProps> = ({ title, onClick, type, disabled, externalClassName}) => (
  <button className={classNames(styles.submitButton, externalClassName)} disabled={disabled} onClick={onClick} type={type}>
    {title}
  </button>

);