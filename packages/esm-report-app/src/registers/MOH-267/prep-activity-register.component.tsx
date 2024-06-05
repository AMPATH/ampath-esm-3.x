import React from 'react';
import styles from './prep.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';

const PrepRegister: React.FC = () => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>MOH 267 PrEP Daily Activity Register</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <Table>
      <TableHead>
        <TableRow>
          <TableHeader rowSpan={2}>PrEP NO.</TableHeader>
          <TableHeader rowSpan={2}>Date of Visit</TableHeader>
          <TableHeader rowSpan={1}>
            National Identification <br />
            Number
          </TableHeader>
          <TableHeader rowSpan={2}>Age</TableHeader>
          <TableHeader rowSpan={2}>
            Sex
            <br /> (M/F)
          </TableHeader>
          <TableHeader rowSpan={2}>
            Population type <br />
            (Use the codes): <br />
            1. General Population <br />
            2. Discordant Couple <br />
            3. MSM/MSW <br />
            4. FSW <br />
            5. PWID/PWUD <br />
            6. VP
          </TableHeader>
          <TableHeader rowSpan={2}>
            Client PrEP Status: <br />
            N- New <br />
            C- Continuing <br />
            D-Discontinued <br />
            R-Restart
          </TableHeader>
          <TableHeader rowSpan={2}>
            PrEP Method: <br />
            1. Daily oral PrEP <br />
            2. Event driven oral PrEP <br />
            3. Dapivirine Vaginal ring <br />
            4. Cabotegravir Injectable
          </TableHeader>
          <TableHeader rowSpan={2}>
            HIV Results <br />
            (N/P/Ic/NA)
          </TableHeader>
          <TableHeader rowSpan={2}>
            Diagnosed with <br />
            STI <br />
            (N/Y)
          </TableHeader>
          <TableHeader rowSpan={2}>Remarks</TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader rowSpan={1}>
            National Unique Patient
            <br />
            Identifier (NUPI)
          </TableHeader>
        </TableRow>
        <TableRow>
          <TableCell rowSpan={1}>(a)</TableCell>
          <TableCell rowSpan={1}>(b)</TableCell>
          <TableCell rowSpan={1}>(c)</TableCell>
          <TableCell rowSpan={1}>(d)</TableCell>
          <TableCell rowSpan={1}>(e)</TableCell>
          <TableCell rowSpan={1}>(f)</TableCell>
          <TableCell rowSpan={1}>(g)</TableCell>
          <TableCell rowSpan={1}>(h)</TableCell>
          <TableCell rowSpan={1}>(i)</TableCell>
          <TableCell rowSpan={1}>(j)</TableCell>
          <TableCell rowSpan={1}>(k)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: 15 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
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
            </TableRow>
            <TableRow>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PrepRegister;
