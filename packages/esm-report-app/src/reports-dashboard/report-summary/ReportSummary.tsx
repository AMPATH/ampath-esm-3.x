import React, { useState } from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableSelectAll,
  TableSelectRow,
  Loading,
} from '@carbon/react';
import { useNavigate } from 'react-router-dom';
import styles from './ReportSummary.css';
import reportMapping from '../report-loader/reportMapping.json';
import { generateReportData } from '../../api/api';

const ReportSummary: React.FC<any> = ({ rows }) => {
  const [loading, setLoading] = useState(false);

  const headers = [
    { key: 'status', header: 'Status' },
    { key: 'start_date', header: 'Start Date' },
    { key: 'end_date', header: 'End date' },
    { key: 'month', header: 'Month' },
    { key: 'year', header: 'Year' },
    { key: 'view', header: 'View' },
    { key: 'download', header: 'Download' },
  ];

  const navigate = useNavigate();

  const handleViewClick = async (report_uuid, report_id) => {
    setLoading(true);
    try {
      const response = await generateReportData(report_id);
      const data = response.results;

      navigate(`/reports/${report_uuid}`, { state: { reportData: data } });
    } catch (error) {
      console.error('Error fetching report data:', error);
    } finally {
      setLoading(false);
    }
  };

  const rowsWithButtons = rows.map((row) => {
    const reportMappingEntry = reportMapping.find((entry) => entry.report_uuid === row.uuid);
    return {
      ...row,
      view: reportMappingEntry ? (
        <button
          className={styles.view_button}
          onClick={() => handleViewClick(reportMappingEntry.report_uuid, Number(row.log_id))}>
          View
        </button>
      ) : null,
      download: <button className={styles.download_button}>Download</button>,
    };
  });

  return (
    <div className={styles.wrapper_container}>
      {loading && <Loading description="Loading data..." withOverlay={true} />}
      <TableContainer title="Reports logs">
        <DataTable
          rows={rowsWithButtons}
          headers={headers}
          render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableSelectAll />
                  {headers.map((header) => (
                    <TableHeader key={header.key} {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows && rows.length > 0 ? (
                  rows.map((row) => (
                    <TableRow key={row.id} {...getRowProps({ row })}>
                      <TableSelectRow {...row} />
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={headers.length + 1}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        />
        {/* <Pagination pageSizes={[10, 20, 30, 40, 50]} totalItems={3956} page={1} pageSize={5} onChange={(page) => {}} /> */}
      </TableContainer>
    </div>
  );
};

export default ReportSummary;
