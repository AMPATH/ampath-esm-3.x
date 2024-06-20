import React from 'react';
import * as XLSX from 'xlsx';
import RenderMOH405 from '../../registers/MOH-405/MOH_405_component';
import RenderMOH406 from '../../registers/MOH-406/MOH_406_component';
import RenderMOH362A from '../../registers/MOH-362/moh-362a/MOH_362A_component';
import RenderMOH362B from '../../registers/MOH-362/moh-362b/MOH_362B_component';
import NutritionRegisters from '../../registers/MOH-407/nutrition/Nutrition_component';
import ClientFollowUpRegister from '../../registers/MOH-407/clientFollowUp/ClientFollowUp_component';
import PrepRegister from '../../registers/MOH-267/prep-activity-register.component';
import { useParams } from 'react-router-dom';
import styles from './dynamic-report-loader.scss';
import RenderMOH408 from '../../registers/MOH-408/MOH-408-component';
import UseBreadcrumb from '../breadcrumb/bread-crumb';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib';

const reportComponentMapping = {
  'MOH 405 - AnteNatal(ANC) Register': RenderMOH405,
  'MOH 406 A PNC REGISTER': RenderMOH406,
  'MOH 362 A - HTS LABS REGISTER': RenderMOH362A,
  'MOH 362 B - HTS LABS REGISTER': RenderMOH362B,
  'MOH 407 Nutrition Service Register': NutritionRegisters,
  'ClientFollowUp Service Register MOH 407': ClientFollowUpRegister,
  'uuid-for-prep-register': PrepRegister,
  'MOH 408 HEI REGISTER': RenderMOH408,
};

const DynamicReportLoader: React.FC = () => {
  const { reportUuid } = useParams<{ reportUuid: string }>();
  const ReportComponent = reportComponentMapping[reportUuid];
  const downloadPDF = async () => {
    const element = document.getElementById('report-content');
    if (element) {
      // Capture the element as an image using html2canvas
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');

      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([canvas.width, canvas.height]);

      // Draw the captured image in the PDF
      const pngImage = await pdfDoc.embedPng(imgData);
      page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
      });

      // Save and open the PDF
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url);
    }
  };

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
