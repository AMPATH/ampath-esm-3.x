import React, { useEffect, useState } from 'react';
import { DatePicker, DatePickerInput, Button, InlineLoading, InlineNotification } from '@carbon/react';
import { Download } from '@carbon/react/icons';
import ReportTable from '../report-table/report-table-component';
import styles from './tab-panel.scss';
import ReportSummary from '../report-summary/ReportSummary';
import { generateFrozenReport } from '../../api/api';
import { type ReportData } from '../../types';

const RenderTabPanel: React.FC<{ rows: any[] }> = ({ rows }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ kind: '', title: '', subtitle: '', hide: true });

  const handleRowClick = (rowdata: any) => {
    setSelectedRow(rowdata);
  };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (setDate: React.Dispatch<React.SetStateAction<Date | null>>) => (eventOrDates: any) => {
    if (Array.isArray(eventOrDates)) {
      setDate(eventOrDates[0]);
    }
  };

  const isValidDateRange = () => startDate && endDate && startDate <= endDate;

  const handleGenerate = async () => {
    if (!startDate || !endDate) {
      setNotification({
        kind: 'error',
        title: 'Invalid Date Range',
        subtitle: 'Please select both start and end dates.',
        hide: false,
      });
      return;
    }

    if (!isValidDateRange()) {
      setNotification({
        kind: 'error',
        title: 'Invalid Date Range',
        subtitle: 'Start date must be before end date.',
        hide: false,
      });
      return;
    }

    setLoading(true);
    setNotification({ kind: '', title: '', subtitle: '', hide: true });

    try {
      const reportData: ReportData = {
        locationUuid: '1', // Update with actual data
        report_id: '1', // Update with actual data
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
        sp_name: selectedRow?.sp_name || 'sp_test', // Adjust as needed
      };

      const response = await generateFrozenReport(reportData);

      if (response && response.length > 0) {
        const rowsInserted = response[0]['Rows inserted'];

        setNotification({
          kind: 'success',
          title: 'Report Generated',
          subtitle: `Rows inserted: ${rowsInserted}`,
          hide: false,
        });
      } else {
        setNotification({
          kind: 'warning',
          title: 'No Data',
          subtitle: 'No rows were inserted. Please check the input data or try again.',
          hide: false,
        });
      }
    } catch (error) {
      setNotification({
        kind: 'error',
        title: 'API Error',
        subtitle: 'Failed to generate report. Please try again.',
        hide: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <ReportTable rows={rows} onRowClick={handleRowClick} />
      </div>
      <div className={styles.rightPanel}>
        {!notification.hide && (
          <InlineNotification
            kind={notification.kind}
            title={notification.title}
            subtitle={notification.subtitle}
            onCloseButtonClick={() => setNotification({ kind: '', title: '', subtitle: '', hide: true })}
            lowContrast
          />
        )}
        <div className={styles.wrapper}>
          <DatePicker
            datePickerType="single"
            style={{ width: '100%' }}
            className={styles.datePickerContainer}
            onChange={handleDateChange(setStartDate)}>
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="Start"
              id="start-date-picker"
              size="md"
              style={{ width: '100%' }}
              className={styles.datePickerInput}
            />
          </DatePicker>
          <DatePicker
            datePickerType="single"
            style={{ width: '100%' }}
            className={styles.datePickerContainer}
            onChange={handleDateChange(setEndDate)}>
            <DatePickerInput
              placeholder="mm/dd/yyyy"
              labelText="End"
              id="end-date-picker"
              size="md"
              style={{ width: '100%' }}
              className={styles.datePickerInput}
            />
          </DatePicker>
          <Button kind="ghost" renderIcon={Download} onClick={handleGenerate}>
            Generate
          </Button>
        </div>
        {loading ? (
          <InlineLoading description="Generating report..." />
        ) : selectedRow ? (
          <ReportSummary rows={selectedRow} />
        ) : (
          <div>No data, please click on Generate</div>
        )}
      </div>
    </div>
  );
};

export default RenderTabPanel;
