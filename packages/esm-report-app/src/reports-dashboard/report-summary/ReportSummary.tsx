import React from 'react';
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
  Button,
  Pagination,
} from '@carbon/react';
import { Link } from 'react-router-dom';
import styles from './ReportSummary.css';

const ReportSummary: React.FC<any> = ({ rows }) => {
  const headers = [
    { key: 'status', header: 'Status' },
    { key: 'start_date', header: 'Start Date' },
    { key: 'end_date', header: 'End date' },
    { key: 'month', header: 'Month' },
    { key: 'year', header: 'Year' },
    { key: 'view', header: 'View' },
    { key: 'download', header: 'Download' },
  ];

  // Add view and download buttons to rows data
  const rowsWithButtons = rows.map((row) => ({
    ...row,
    view: (
      <Link to={`/reports/${row.report_name}`}>
        <button className={styles.view_button}>View</button>
      </Link>
    ),
    download: <button className={styles.download_button}>Download</button>,
  }));

  return (
    <div className={styles.wrapper_container}>
      <TableContainer title="Frozen Reports">
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
                {rows.map((row) => (
                  <TableRow key={row.id} {...getRowProps({ row })}>
                    <TableSelectRow {...row} />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
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
