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
  Pagination,
} from '@carbon/react';

const ReportTable: React.FC = () => {
  const headers = [{ key: 'name', header: 'Name' }];

  const rows = [
    {
      id: '1',
      name: 'MOH 361A',
    },
    {
      id: '2',
      name: 'MOH 362B',
    },
    {
      id: '3',
      name: 'MOH 731',
    },
    {
      id: '4',
      name: 'MOH 711',
    },
    {
      id: '5',
      name: 'MOH 715',
    },
  ];
  return (
    <>
      <TableContainer title="Reports">
        <DataTable
          rows={rows}
          headers={headers}
          render={({ rows, headers, getHeaderProps, getRowProps }) => (
            <Table>
              <TableHead>
                <TableRow>
                  <TableSelectAll />
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow {...getRowProps({ row })}>
                    <TableSelectRow />
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
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
