import React from 'react';
import { Report } from '@carbon/react/icons';
import styles from './report-header.scss';

const ReportIllustration: React.FC = () => {
  return (
    <div className={styles.svgContainer}>
      <Report className={styles.iconOverrides} />
    </div>
  );
};

export default ReportIllustration;
