import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Pagination,
  DataTableSkeleton,
  Button,
} from '@carbon/react';
import { Download } from '@carbon/react/icons';
import { ConfigurableLink, useConfig, usePagination } from '@openmrs/esm-framework';
import { EmptyState } from '../empty-state/empty-state.component';

const ModuleUptake: React.FC = () => {
  const { t } = useTranslation();
  const [showTable, setShowTable] = useState(false);
  //data fetching hook called here, will populate the table rows
  const sampleData = [
    {
      id: '1',
      mflCode: 'AM123',
      facilityName: 'Ampath Ex 1',
      county: 'Transzoia',
      numberTested: 162,
      numberTestedPositive: 1,
      numberLinked: 1,
      percentage: '100%',
    },
    {
      id: '2',
      mflCode: 'AM124',
      facilityName: 'Ampath Ex 2',
      county: 'Uasin Gishu',
      numberTested: 200,
      numberTestedPositive: 4,
      numberLinked: 4,
      percentage: '100%',
    },
  ];

  const headerData = [
    {
      header: 'MFL Code',
      key: 'mflCode',
    },
    {
      header: 'Facility Name',
      key: 'facilityName',
    },
    {
      header: 'County',
      key: 'county',
    },
    {
      header: 'Number Tested',
      key: 'numberTested',
    },
    {
      header: 'Number Tested Positive',
      key: 'numberTestedPositive',
    },
    {
      header: 'Number Linked',
      key: 'numberLinked',
    },
    {
      header: 'Percentage',
      key: 'percentage',
    },
  ];
  return (
    <div>
      {/* <EmptyState
      displayText={t('moduleUptakeDisplayText', 'module uptakes')}
      headerTitle={t('moduleUptakeHeader', 'Module Uptake')}
      scheduleType="Unscheduled"
    /> */}
      <DataTable
        rows={sampleData}
        headers={headerData}
        render={({ rows, headers, getHeaderProps, getRowProps }) => (
          <TableContainer title="Module Uptake Data">
            <Table>
              <TableHead>
                <TableRow>
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
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination totalItems={sampleData.length} pageSize={10} pageSizes={[10, 20, 30, 40, 50]} />
          </TableContainer>
        )}
      />
    </div>
  );
};

export default ModuleUptake;
