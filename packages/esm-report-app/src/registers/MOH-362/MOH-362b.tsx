import React from 'react';
import styles from './MOH-362.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';

const RenderMOH362b: React.FC = () => (
  <TableContainer className={styles['table-container']} title="MOH 362 HTS LAB, REFERRAL AND LINKAGE REGISTER">
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>REFERRAL AND LINKAGE REGISTER</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <Table>
      <TableHead>
        <TableRow>
          <TableHeader rowSpan={2}>
            Serial <br />
            Number
          </TableHeader>
          <TableHeader rowSpan={1}>National Identification Number</TableHeader>
          <TableHeader rowSpan={2}>Client Names</TableHeader>
          <TableHeader rowSpan={1}>Telephone Number</TableHeader>
          <TableHeader rowSpan={2}>Identification Strategy (VCT/IT/HIVST/SNS)</TableHeader>
          <TableHeader rowSpan={2}>Patient referred to</TableHeader>
          <TableHeader rowSpan={2}>Handed over to: (Indicate Name (upper cell)and Cadre(lower cell))</TableHeader>
          <TableHeader rowSpan={2}>Date Started on ART</TableHeader>
          <TableHeader rowSpan={2}>CCC Number</TableHeader>
          <TableHeader rowSpan={2}>remarks</TableHeader>
        </TableRow>

        <TableRow>
          <TableHeader rowSpan={1}>National Unique Patient Identifier (NUPI) Number</TableHeader>
          <TableHeader rowSpan={1}>Residence</TableHeader>
        </TableRow>

        <TableRow>
          <TableCell rowSpan={2}>(a)</TableCell>
          <TableCell rowSpan={2}>(b)</TableCell>
          <TableCell rowSpan={2}>(c)</TableCell>
          <TableCell rowSpan={2}>(d)</TableCell>
          <TableCell rowSpan={2}>(e)</TableCell>
          <TableCell rowSpan={2}>(f)</TableCell>
          <TableCell rowSpan={2}>(g)</TableCell>
          <TableCell rowSpan={2}>(h)</TableCell>
          <TableCell rowSpan={2}>(i)</TableCell>
          <TableCell rowSpan={2}>(j)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: 2 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              {/* a */}
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell> {/* b */}
              <TableCell rowSpan={2}></TableCell>
              {/* c */}
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              {/* d */}
              <TableCell rowSpan={2}></TableCell>
              {/* e */}
              <TableCell rowSpan={2}></TableCell>
              {/* f */}
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              {/* g */}
              <TableCell rowSpan={2}></TableCell>
              {/* h */}
              <TableCell rowSpan={2}></TableCell>
              {/* i */}
              <TableCell rowSpan={2}></TableCell>
              {/* j */}
            </TableRow>
            <TableRow>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
export default RenderMOH362b;
