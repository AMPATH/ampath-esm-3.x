import React from 'react';
import ReportTable from '../../report-table-component';
import GenerateReportComponent from '../../right-generate-report-tab/components/generate-report-component';
import styles from '../styles/left-tab-component.scss';

const LefttabComponents: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <ReportTable />
      </div>
      <div className={styles.rightPanel}>
        <GenerateReportComponent />
      </div>
    </div>
  );
};

export default LefttabComponents;
