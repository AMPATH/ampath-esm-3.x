import React, { useEffect, useState } from 'react';
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
  Pagination,
} from '@carbon/react';

interface ReportTableProps {
  onRowClick: (row: any) => void;
  rows: any;
}

const ReportTable: React.FC<ReportTableProps> = ({ onRowClick, rows }) => {
  const headers = [{ key: 'report_name', header: 'Name' }];

  const handleRowClick = (row: any) => {
    onRowClick(row);
  };

  return (
    <>
      <TableContainer title={`Reports`}>
        <DataTable
          rows={rows}
          headers={headers}
          render={({ rows, headers, getHeaderProps, getRowProps }) => (
            <Table>
              <TableHead>
                <TableRow>
                  <TableSelectAll />
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })} key={header.key}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.length > 0 ? (
                  rows.map((row) => (
                    <TableRow {...getRowProps({ row })} onClick={() => handleRowClick(row.cells)}>
                      <TableSelectRow />
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
        {/* <Pagination pageSizes={[10, 20, 30, 40, 50]} totalItems={3956} page={1} pageSize={10} onChange={(page) => {}} /> */}
      </TableContainer>
    </>
  );
};

export default ReportTable;
