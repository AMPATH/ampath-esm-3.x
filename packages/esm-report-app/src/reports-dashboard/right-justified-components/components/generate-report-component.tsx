import React from 'react';

import ReportEndDate from '../date-pickers/end-date-component';
import ReportTable from '../../left-justified-components/report-table-component';

import ReportStartDate from '../date-pickers/start-date-component';
import GenerateButton from '../generate-report-button';
import styles from '../styles/generate-report-component.scss';

const GenerateReportComponent: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <ReportStartDate />
        <ReportEndDate />
        <GenerateButton />
      </div>
    </div>
  );
};

export default GenerateReportComponent;
