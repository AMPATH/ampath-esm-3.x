import React from 'react';
import RenderMOH405 from '../../registers/MOH-405/MOH_405_component';
import RenderMOH406 from '../../registers/MOH-406/MOH_406_component';
import RenderMOH362 from '../../registers/MOH-362/MOH_362_component';
import NutritionRegisters from '../../registers/MOH-407/nutrition-register-component';
import PrepRegister from '../../registers/MOH-267/prep-activity-register.component';
import { useParams } from 'react-router-dom';
import styles from './dynamic-report-loader.scss';

const reportComponentMapping = {
  'MOH 405 - AnteNatal(ANC) Register': RenderMOH405,
  'MOH 406 A PNC REGISTER': RenderMOH406,
  'MOH 362 A - HTS LABS REGISTER': RenderMOH362,
  'MOH 407 Nutrition Service Register': NutritionRegisters,
  'uuid-for-prep-register': PrepRegister,
};

const DynamicReportLoader: React.FC = () => {
  const { reportUuid } = useParams<{ reportUuid: string }>();
  const ReportComponent = reportComponentMapping[reportUuid];
  const downloadPDF = () => {};

  const downloadExcel = () => {};
  return (
    <div className={styles.container}>
      {ReportComponent ? (
        <>
          <div className={styles.buttons}>
            <button className={styles.downloadButton} onClick={downloadPDF}>
              Download PDF
            </button>
            <button className={styles.downloadButton} onClick={downloadExcel}>
              Download Excel
            </button>
          </div>
          <div id="report-content">
            <ReportComponent />
          </div>
        </>
      ) : (
        <div>Report not found</div>
      )}
    </div>
  );
};

export default DynamicReportLoader;
