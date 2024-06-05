import React from 'react';
import styles from './MOH-362.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';
const RenderMOH362a: React.FC = () => (
  <TableContainer className={styles['table-container']} title="MOH 362 HTS LAB, REFERRAL AND LINKAGE REGISTER">
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>MOH 362 HTS LAB REGISTER</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <Table>
      <TableHead>
        <TableRow>
          <TableHeader rowSpan={5}>
            Serial <br />
            Number
          </TableHeader>
          <TableHeader rowSpan={1}>National Identification Number</TableHeader>
          <TableHeader rowSpan={5}>Date of visit (DD/MM/YYYY)</TableHeader>
          <TableHeader rowSpan={5}>Client Name (First,Middle,Last)</TableHeader>
          <TableHeader rowSpan={5}>Age</TableHeader>
          <TableHeader rowSpan={5}>Sex (M/F)</TableHeader>
          <TableHeader rowSpan={5}>Telephone Number</TableHeader>
          <TableHeader rowSpan={5}>Marital Status 1=Married 2=Widowed 3=Single 4=Divorced 5=Separated</TableHeader>
          <TableHeader rowSpan={5}>
            Population Type 1.Gen Pop 2.Key and Vulnerable Pop. Codes for KVP -DC -MSM/MSW -FSW -PWID/PWUD -VP
          </TableHeader>
          <TableHeader rowSpan={5}>Setting</TableHeader>
          <TableHeader rowSpan={1}>HIV Test 1</TableHeader>
          <TableHeader rowSpan={1}>HIV Test 2</TableHeader>
          <TableHeader rowSpan={1}>HIV Test 3</TableHeader>
          <TableHeader rowSpan={4}>Final HIV Result</TableHeader>
          <TableHeader rowSpan={4}>Discordant Couple</TableHeader>
          <TableHeader rowSpan={5}>Referred for Prevention Services 1.Prep 2.PEP 3.VMMC 4.PMTCT 5.NA</TableHeader>
          <TableHeader rowSpan={5}>HTS Provider (Name)</TableHeader>
          <TableHeader rowSpan={5}>Remarks</TableHeader>
        </TableRow>

        <TableRow>
          <TableHeader rowSpan={4}>National Unique Patient Identifier (NUPI) Number</TableHeader>
          <TableHeader rowSpan={1}>Kit Name:</TableHeader>
          <TableHeader rowSpan={1}>Kit Name:</TableHeader>
          <TableHeader rowSpan={1}>Kit Name</TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader rowSpan={1}>Lot No.</TableHeader>
          <TableHeader rowSpan={1}>Lot No.</TableHeader>
          <TableHeader rowSpan={1}>Lot No.</TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader className={styles['th']} rowSpan={1}>
            Expiry Date
          </TableHeader>
          <TableHeader rowSpan={1}>Expiry Date</TableHeader>
          <TableHeader rowSpan={1}>Expiry Date</TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader rowSpan={1}>(N,P,I)</TableHeader>
          <TableHeader rowSpan={1}>(N,P,I,NA)</TableHeader>
          <TableHeader rowSpan={1}>(N,P,I,NA)</TableHeader>
          <TableHeader rowSpan={1}>(N,P,Ic)</TableHeader>
          <TableHeader rowSpan={1}>(Y/N/NA)</TableHeader>
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
          <TableCell rowSpan={2}>(k)</TableCell>
          <TableCell rowSpan={2}>(l)</TableCell>
          <TableCell rowSpan={2}>(m)</TableCell>
          <TableCell rowSpan={2}>(n)</TableCell>
          <TableCell rowSpan={2}>(o)</TableCell>
          <TableCell rowSpan={2}>(p)</TableCell>
          <TableCell rowSpan={2}>(q)</TableCell>
          <TableCell rowSpan={2}>(r)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: 15 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
export default RenderMOH362a;
