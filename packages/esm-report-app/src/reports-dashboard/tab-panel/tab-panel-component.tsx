import React from 'react';
import ReportTable from '../left-justified-components/report-table-component';
import GenerateReportComponent from '../right-justified-components/components/generate-report-component';
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
