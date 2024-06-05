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
import styles from './ReportSummary.css';

const ReportSummary: React.FC<{ title: string; rows: { id: string; name: string }[] }> = ({ title, rows }) => {
  const headers = [
    { key: 'status', header: 'Report Status' },
    { key: 'month', header: 'Month' },
    { key: 'view', header: 'View' },
    { key: 'download', header: 'Download' },
  ];

  return (
    <>
      <TableContainer title={`Frozen Reports`}>
        <DataTable
          rows={rows}
          headers={headers}
          render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableSelectAll />
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableSelectRow />
                  <TableCell>0</TableCell>
                  <TableCell>JUNE</TableCell>
                  <TableCell>
                    <button className={styles.view_button}>View</button>
                  </TableCell>
                  <TableCell>
                    <button className={styles.download_button}>Download</button>
                  </TableCell>
                </TableRow>
                {/* {rows.map((row) => (
                  <TableRow key={row.id} {...getRowProps({ row })}>
                    <TableSelectRow {...row} />
                    <TableCell>{title}</TableCell>
                    <TableCell>JUNE</TableCell>
                    <TableCell>
                      <button className={styles.view_button}>View</button>
                    </TableCell>
                    <TableCell>
                      <button className={styles.download_button}>Download</button>
                    </TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          )}
        />
        {/* <Pagination pageSizes={[10, 20, 30, 40, 50]} totalItems={3956} page={1} pageSize={10} onChange={(page) => {}} /> */}
      </TableContainer>
    </>
  );
};

export default ReportSummary;
