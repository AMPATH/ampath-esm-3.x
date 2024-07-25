import React from 'react';
import { Eyedropper } from '@carbon/react/icons';
import styles from './hts-header.scss';

const HTSIllustration: React.FC = () => {
  return (
    <div className={styles.svgContainer}>
      <Eyedropper className={styles.iconOverrides} />
    </div>
  );
};

export default HTSIllustration;
