import React, { useState } from 'react';
import ReportTable from '../left-justified-components/report-table-component';
import GenerateReportComponent from '../right-justified-components/components/generate-report-component';
import styles from './tab-panel.scss';
import ReportSummary from '../report-summary/ReportSummary';

const RenderTabPanel: React.FC<{ title: string; rows: { id: string; name: string }[] }> = ({ title, rows }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const handleRowClick = (rowdata: any) => {
    setSelectedRow(rowdata);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <ReportTable title={title} rows={rows} onRowClick={handleRowClick} />
      </div>
      <div className={styles.rightPanel}>
        <GenerateReportComponent />
        {selectedRow ? (
          <ReportSummary title={title} rows={rows} />
        ) : (
          <div className={styles.emptyState}> No data please click on Generate</div>
        )}
      </div>
    </div>
  );
};

export default RenderTabPanel;
