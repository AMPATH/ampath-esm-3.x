import React from 'react';
import { Table, TableRow, TableBody, TableCell } from '@carbon/react';

export default [
  { key: 'a', component: () => <TableCell>Serial Number</TableCell> },
  {
    key: 'b',
    component: () => (
      <>
        <TableRow>
          <TableCell>National Identification Number</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>National Unique Patient Identifier (NUPI) Number</TableCell>
        </TableRow>
      </>
    ),
  },
  { key: 'c', component: () => <TableCell>Date of visit (DD/MM/YYYY)</TableCell> },
  { key: 'd', component: () => <TableCell>Client Name (First, Middle, Last)</TableCell> },
  { key: 'e', component: () => <TableCell>Age</TableCell> },
  { key: 'f', component: () => <TableCell>Sex (M/F)</TableCell> },
  { key: 'g', component: () => <TableCell>Telephone Number</TableCell> },
  {
    key: 'h',
    component: () => <TableCell>Marital Status 1=Married 2=Widowed, 3=Single, 4=Divorced, 5=Separated</TableCell>,
  },
  { key: 'i', component: () => <TableCell>Population Type</TableCell> },
  { key: 'j', component: () => <TableCell>Setting</TableCell> },
  {
    key: 'k',
    component: () => (
      <div>
        <Table>
          <TableRow>
            <TableCell>HIV Test 1</TableCell>
            <TableCell>HIV Test 2</TableCell>
            <TableCell>HIV Test 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Kit Name</TableCell>
            <TableCell>Kit Name</TableCell>
            <TableCell>Kit Name</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lot No.</TableCell>
            <TableCell>Lot No.</TableCell>
            <TableCell>Lot No.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Expiry Date</TableCell>
            <TableCell>Expiry Date</TableCell>
            <TableCell>Expiry Date</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>(N.P.I)</TableCell>
            <TableCell>(N.P.I)</TableCell>
            <TableCell>(N.P.I)</TableCell>
          </TableRow>
        </Table>
      </div>
    ),
  },
  { key: 'l', component: () => <TableCell>Final HIV Result</TableCell> },
  { key: 'm', component: () => <TableCell>Discordant Couple</TableCell> },
  {
    key: 'n',
    component: () => <TableCell>Referred for Prevention Services 1.Prep 2.PEP 3.VMMC 4.PMTCT 5.N/A</TableCell>,
  },
  { key: 'o', component: () => <TableCell>HTS Provider (Name)</TableCell> },
  { key: 'p', component: () => <TableCell>Remarks</TableCell> },
];
