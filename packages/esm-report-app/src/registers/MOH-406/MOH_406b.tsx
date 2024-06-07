import React from 'react';
import styles from './MOH_406.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';

const RenderMOH406b: React.FC = () => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>MOH 406 PNC REGISTER</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <Table>
      <TableHead>
        <TableRow>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            TB Screening
          </TableHeader>
          <TableHeader colSpan={6} rowSpan={1}>
            {' '}
            Blank
          </TableHeader>
          <TableHeader colSpan={4} rowSpan={1}>
            {' '}
            HAART & Infant Prophylaxis and Treatment
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            Cervical Cancer Screening (VIA/VIL/PAP Smear/ND)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={3}>
            {' '}
            Modern Post partum Family Planning (Y/N)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={6}>
            {' '}
            Other maternal Complications
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={6}>
            {' '}
            Haematinics
          </TableHeader>
          <TableHeader colSpan={3} rowSpan={1}>
            {' '}
            Referrals
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={7}>
            {' '}
            Remarks
          </TableHeader>
        </TableRow>

        <TableRow>
          <TableHeader colSpan={1} rowSpan={5}>
            TB Screening
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={5}>
            Tested PNC
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            HIV Test 1
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            HIV Test 2
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            HIV Test 3
          </TableHeader>
          <TableHeader colSpan={2} rowSpan={4}>
            Results in PNC
          </TableHeader>

          <TableHeader colSpan={2} rowSpan={1}>
            6 wks
          </TableHeader>
          <TableHeader colSpan={2} rowSpan={1}>
            6 Wks
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={5}>
            Results 1=normal, 2=suspected 3=confirmed 4=not done{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={2}>
            From
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={2}>
            To
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={5}>
            Reason for Referral
          </TableHeader>
        </TableRow>

        <TableRow>
          <TableHeader colSpan={1} rowSpan={1}>
            Kit Name 1
          </TableHeader>
          {/* </TableRow>
        <TableHeader></TableHeader>
          <TableHeader>(I,R,ND,KP)</TableHeader>
          <TableHeader>(N,P,I,NA)</TableHeader>
          <TableHeader>(N,P,I,NA)</TableHeader>
          <TableHeader>(N,P,I,NA)</TableHeader>
          <TableHeader>(N/P/Ic/NA)</TableHeader>
          <TableHeader>(N/P/Ic/NA)</TableHeader>
          <TableHeader>(Y/N/NA/R)</TableHeader>
          <TableHeader>(Y/N/NA/R)</TableHeader>
          <TableHeader>(Y/N/NA/R)</TableHeader>
          <TableHeader>(Y/N/NA/R)</TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
        <TableRow> */}{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            Kit Name 2
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            Kit Name 3
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            Infant
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            Mother
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            Infant
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            Mother
          </TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader colSpan={1} rowSpan={1}>
            Lot No
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            Lot No
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            Lot No
          </TableHeader>
          <TableHeader rowSpan={3}>NVP + AZT+ CTX or NVP + CTX</TableHeader>
          <TableHeader rowSpan={3}>HAART</TableHeader>

          <TableHeader rowSpan={3}>NVP + AZT+ CTX or NVP + CTX</TableHeader>
          <TableHeader rowSpan={3}>HAART</TableHeader>

          <TableHeader rowSpan={3}> Counselled Method Received</TableHeader>
          <TableHeader rowSpan={3}>1= community unit, 2= another health facility 3=not applicable</TableHeader>
          <TableHeader rowSpan={3}>1= community unit, 2= another health facility 3=not applicable</TableHeader>
        </TableRow>

        <TableRow>
          <TableHeader rowSpan={2}>Expiry No</TableHeader>
          <TableHeader rowSpan={2}>Expiry No</TableHeader>
          <TableHeader rowSpan={2}>Expiry No</TableHeader>
        </TableRow>

        <TableRow>
          <TableHeader colSpan={1} rowSpan={1}>
            less than or =6weeks
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            more than 6weeks
          </TableHeader>
        </TableRow>

        <TableRow>
          <TableHeader></TableHeader>
          <TableHeader>(I,R,ND,KP)</TableHeader>
          <TableHeader>(N,P,I,NA)</TableHeader>
          <TableHeader>(N,P,I,NA)</TableHeader>
          <TableHeader>(N,P,I,NA)</TableHeader>
          <TableHeader>(N/P/Ic/NA)</TableHeader>
          <TableHeader>(N/P/Ic/NA)</TableHeader>
          <TableHeader>(Y/N/NA/R)</TableHeader>
          <TableHeader>(Y/N/NA/R)</TableHeader>
          <TableHeader>(Y/N/NA/R)</TableHeader>
          <TableHeader>(Y/N/NA/R)</TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
        </TableRow>

        <TableRow>
          <TableCell rowSpan={1}>(x)</TableCell>
          <TableCell rowSpan={1}>(y)</TableCell>
          <TableCell rowSpan={1}>(z)</TableCell>
          <TableCell rowSpan={1}>(aa)</TableCell>
          <TableCell rowSpan={1}>(ab)</TableCell>
          <TableCell rowSpan={1}>(ac)</TableCell>
          <TableCell rowSpan={1}>(ad)</TableCell>
          <TableCell rowSpan={1}>(ae)</TableCell>
          <TableCell rowSpan={1}>(af)</TableCell>
          <TableCell rowSpan={1}>(ag)</TableCell>
          <TableCell rowSpan={1}>(ah)</TableCell>
          <TableCell rowSpan={1}>(ai)</TableCell>
          <TableCell rowSpan={1}>(aj)</TableCell>
          <TableCell rowSpan={1}>(ak)</TableCell>
          <TableCell rowSpan={1}>(al)</TableCell>
          <TableCell rowSpan={1}>(am)</TableCell>
          <TableCell rowSpan={1}>(an)</TableCell>
          <TableCell rowSpan={1}>(ao)</TableCell>
          <TableCell rowSpan={1}>(ap)</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {Array.from({ length: 2 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
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

export default RenderMOH406b;
