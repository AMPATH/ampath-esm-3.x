import React from 'react';
import { DatePicker, DatePickerInput } from '@carbon/react';
import styles from './date-pickers.scss';

const ReportStartDate: React.FC = () => {
  return (
    <DatePicker datePickerType="single" style={{ width: '100%' }} className={styles.datePickerContainer}>
      <DatePickerInput
        placeholder="mm/dd/yyyy"
        labelText="End Date"
        id="date-picker-single"
        size="md"
        style={{ width: '100%' }}
        className={styles.datePickerInput}
      />
    </DatePicker>
  );
};

export default ReportStartDate;
