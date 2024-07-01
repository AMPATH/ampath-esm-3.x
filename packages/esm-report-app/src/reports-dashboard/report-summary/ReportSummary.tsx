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
  Loading,
  Button,
} from '@carbon/react';
import { useNavigate } from 'react-router-dom';
import styles from './ReportSummary.css';
import reportMapping from '../report-loader/reportMapping.json';
import { generateReportData, getSPReports } from '../../api/api';
import { useSession } from '@openmrs/esm-framework';
import { useSelectedLocations } from '../../hooks/useSelectedLocations';

const ReportSummary: React.FC<any> = ({ rows = [] }) => {
  const [loading, setLoading] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [currentRows, setCurrentRows] = useState([]);
  const navigate = useNavigate();
  const locationUuid = useSession()?.sessionLocation?.uuid;
  const { selectedLocations } = useSelectedLocations();
  const [multipleLocations, setMultipleLocations] = useState([]);

  const headers = [
    { key: 'status', header: 'Status' },
    { key: 'start_date', header: 'Start Date' },
    { key: 'end_date', header: 'End date' },
    { key: 'month', header: 'Month' },
    { key: 'year', header: 'Year' },
    { key: 'view', header: 'View' },
    { key: 'download', header: 'Download' },
  ];

  useEffect(() => {
    setMultipleLocations(selectedLocations);
    if (rows && Array.isArray(rows)) {
      const rowsWithButtons = rows.map((row) => {
        const reportMappingEntry = reportMapping.find((entry) => entry.report_uuid === row.uuid);
        return {
          ...row,
          id: row.log_id,
          view: reportMappingEntry ? (
            <button
              className={styles.view_button}
              onClick={() => handleViewClick(selectedLocations, reportMappingEntry.report_uuid, Number(row.log_id))}>
              View
            </button>
          ) : null,
          download: <button className={styles.download_button}>Download</button>,
        };
      });
      setCurrentRows(rowsWithButtons);
    }
  }, [selectedLocations]);
  const handleViewClick = async (locations, report_uuid, report_id) => {
    setLoading(true);
    try {
      let formattedLocationUuid = null;

      if (locations && locations?.selectedItems.length > 0) {
        formattedLocationUuid = locations?.selectedItems.map((item) => `'${item.value}'`).join(',');
      } else {
        formattedLocationUuid = `'${locationUuid}'`;
      }

      const response = await generateReportData(report_id, formattedLocationUuid);
      const data = response.results;

      navigate(`/reports/${report_uuid}`, { state: { reportData: data } });
    } catch (error) {
      console.error('Error fetching report data:', error);
    } finally {
      setLoading(false);
    }
  };

  // const handleRefresh = () => {
  //   setRefreshLoading(true);
  //   try {
  //     if (rows && Array.isArray(rows)) {
  //       const rowsWithButtons = rows.map((row) => {
  //         const reportMappingEntry = reportMapping.find((entry) => entry.report_uuid === row.uuid);
  //         return {
  //           ...row,
  //           id: row.log_id,
  //           view: reportMappingEntry ? (
  //             <button
  //               className={styles.view_button}
  //               onClick={() => handleViewClick(reportMappingEntry.report_uuid, Number(row.log_id))}>
  //               View
  //             </button>
  //           ) : null,
  //           download: <button className={styles.download_button}>Download</button>,
  //         };
  //       });
  //       setCurrentRows(rowsWithButtons);
  //     }
  //   } catch (error) {
  //     console.error('Error refreshing data:', error);
  //   } finally {
  //     setRefreshLoading(false);
  //   }
  // };

  return (
    <div className={styles.wrapper_container}>
      {loading && <Loading description="Loading data..." withOverlay={true} />}
      <TableContainer title="Reports logs">
        {/* <div className={styles.buttonContainer}>
          <Button onClick={handleRefresh} style={{ marginRight: '1rem' }} disabled={refreshLoading}>
            {refreshLoading ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div> */}
        <DataTable
          rows={currentRows}
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
                        <TableCell>{cell.value}</TableCell>
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
    </div>
  );
};

export default ReportSummary;
