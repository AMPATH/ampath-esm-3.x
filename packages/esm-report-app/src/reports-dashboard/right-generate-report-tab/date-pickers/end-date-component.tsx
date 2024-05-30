import React from 'react';
import { DatePicker, DatePickerInput } from '@carbon/react';

const ReportStartDate: React.FC = () => {
  return (
    <DatePicker datePickerType="single" style={{ width: '100%' }}>
      <DatePickerInput
        placeholder="mm/dd/yyyy"
        labelText="End Date"
        id="date-picker-single"
        size="md"
        style={{ width: '100%' }}
      />
    </DatePicker>
  );
};

export default ReportStartDate;
