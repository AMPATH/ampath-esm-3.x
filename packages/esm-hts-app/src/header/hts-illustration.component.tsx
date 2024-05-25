import React from 'react';
import { Medication } from '@carbon/react/icons';
import styles from './hts-header.scss';

const HTSIllustration: React.FC = () => {
  return (
    <div className={styles.svgContainer}>
      <Medication className={styles.iconOverrides} />
    </div>
  );
};

export default HTSIllustration;
