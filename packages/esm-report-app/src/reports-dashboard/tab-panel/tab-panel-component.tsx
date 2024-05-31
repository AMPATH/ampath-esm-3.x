import React from 'react';
import ReportTable from '../left-panel/report-table-component';
import GenerateReportComponent from '../right-panel/components/generate-report-component';
import styles from './tab-panel.scss';

const RenderTabPanel: React.FC = () => {
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

export default RenderTabPanel;
