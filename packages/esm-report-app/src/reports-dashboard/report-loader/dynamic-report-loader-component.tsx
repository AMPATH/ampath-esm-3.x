import React from 'react';
import * as XLSX from 'xlsx';
import RenderMOH405 from '../../registers/MOH-405/MOH_405_component';
import RenderMOH406 from '../../registers/MOH-406/MOH_406_component';
import RenderMOH362A from '../../registers/MOH-362/moh-362a/MOH_362A_component';
import RenderMOH362B from '../../registers/MOH-362/moh-362b/MOH_362B_component';
import NutritionRegisters from '../../registers/MOH-407/nutrition/Nutrition_component';
import ClientFollowUpRegister from '../../registers/MOH-407/clientFollowUp/ClientFollowUp_component';
import PrepRegister from '../../registers/MOH-267/prep-activity-register.component';
import MOH731 from '../../registers/MOH-731/MOH_731';
import CareAndTreatment from '../../registers/CARE_AND_TREATMENT/Care_and_Treatment';
import MOH333 from '../../registers/MOH_333_MATERNITY/MOH_333_component';
import { useLocation, useParams } from 'react-router-dom';
import styles from './dynamic-report-loader.scss';
import RenderMOH408 from '../../registers/MOH-408/MOH-408-component';
import UseBreadcrumb from '../breadcrumb/bread-crumb';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib';
import reportMapping from './reportMapping.json';

const componentMap = {
  RenderMOH405,
  RenderMOH406,
  RenderMOH362A,
  RenderMOH362B,
  NutritionRegisters,
  ClientFollowUpRegister,
  PrepRegister,
  RenderMOH408,
  MOH333,
  CareAndTreatment,
  MOH731,
};

const DynamicReportLoader: React.FC = () => {
  const { reportUuid } = useParams<{ reportUuid: string }>();
  const location = useLocation();
  const { reportData } = location.state || {};

  const reportMappingEntry = reportMapping.find((entry) => entry.report_uuid === reportUuid);
  const ReportComponent = reportMappingEntry ? componentMap[reportMappingEntry.component] : null;

  // const downloadPDF = async () => {
  //   const element = document.getElementById('report-content');
  //   if (element) {
  //     const canvas = await html2canvas(element);
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdfDoc = await PDFDocument.create();
  //     const page = pdfDoc.addPage([canvas.width, canvas.height]);
  //     const pngImage = await pdfDoc.embedPng(imgData);
  //     page.drawImage(pngImage, {
  //       x: 0,
  //       y: 0,
  //       width: canvas.width,
  //       height: canvas.height,
  //     });
  //     const pdfBytes = await pdfDoc.save();
  //     const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  //     const url = URL.createObjectURL(blob);
  //     window.open(url);
  //   }
  // };

  const downloadExcel = () => {
    const reportContent = document.getElementById('report-content');
    if (ReportComponent && reportContent) {
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.table_to_sheet(reportContent);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'excel-file.xlsx');
    }
  };

  return (
    <div className={styles.container}>
      {ReportComponent ? (
        <>
          <UseBreadcrumb />
          <div className={styles.buttons}>
            {/* <button className={styles.downloadButton} onClick={downloadPDF}>
              Download PDF
            </button> */}
            <button className={styles.downloadButton} onClick={downloadExcel}>
              Export Excel
            </button>
          </div>
          <div className={styles.wrapperContainer} id="report-content">
            <ReportComponent reportData={reportData} />
          </div>
        </>
      ) : (
        <div>Report not found</div>
      )}
    </div>
  );
};

export default DynamicReportLoader;
