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
  InlineLoading,
} from '@carbon/react';

interface ReportTableProps {
  onRowClick: (row: any, id: number, uuid: string) => void;
  rows: any;
}
import { fetchReportLogsByLocationAndId } from '../../api/api';
import { useSession } from '@openmrs/esm-framework';

const ReportTable: React.FC<ReportTableProps> = ({ onRowClick, rows }) => {
  const headers = [{ key: 'report_name', header: 'Name' }];
  const locationUuid = useSession()?.sessionLocation?.uuid;
  const [loading, setLoading] = useState(false);

  const handleRowClick = async (row: any) => {
    try {
      setLoading(true);
      const reportId = Number(row.id);
      const foundItem = rows.find((item) => item.id === row.id);
      const uuid = foundItem ? foundItem.uuid : undefined;
      const response = await fetchReportLogsByLocationAndId(locationUuid, reportId);
      onRowClick(response, row.id, uuid);
    } catch (error) {
      console.error('Error fetching report logs', error);
    } finally {
      setLoading(false);
    }
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
                    <TableRow {...getRowProps({ row })} onClick={() => handleRowClick(row)}>
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
      </TableContainer>
      {loading && <InlineLoading description="Loading..." />}
    </>
  );
};

export default ReportTable;
