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

const ReportTable: React.FC<{ onRowClick: any; title: string; rows: { id: string; name: string }[] }> = ({
  onRowClick,
  title,
  rows,
}) => {
  const headers = [{ key: 'name', header: 'Name' }];

  const handleRowClick = (rowId) => {
    onRowClick(rowId);
  };

  return (
    <>
      <TableContainer title={`${title} Reports`}>
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
                  <TableRow {...getRowProps({ row })} onClick={() => handleRowClick(row.cells)}>
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
