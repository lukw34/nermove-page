import React from 'react';
import styles from './inofBox.module.scss';
import classNames from 'classnames';

interface InfoBoxProps {
    infoText: string
    externalClassName?: string
}


const InfoBox: React.FC<InfoBoxProps> = ({infoText, externalClassName}) => (
  <div className={classNames(styles.infoBoxContainer, externalClassName)}>
    <svg
      aria-hidden="true"
      fill="none"
      height={20}
      stroke="#4a3641c4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      style={{ marginTop: '2px', flexShrink: 0 }}
      viewBox="0 0 24 24"
      width={20}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="16" y2="12" />
      <line x1="12" x2="12.01" y1="8" y2="8" />
    </svg>
    <div className={styles.infoText}>
      {infoText}
    </div>
  </div>   
);

export default InfoBox;