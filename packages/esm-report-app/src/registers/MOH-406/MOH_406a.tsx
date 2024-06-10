import React from 'react';
import styles from './MOH_406.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';

const RenderMOH406a: React.FC = () => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>MOH 406a PNC REGISTER</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <div className={styles['table-wrapper']}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader rowSpan={2} colSpan={7}>
              Registration Information
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={3}>
              Maternity History
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={2}>
              Postpartum visit
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={3}>
              Vital Signs
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={8}>
              Post Natal Examination
            </TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={1} colSpan={1}>
              Timing Mother
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={1}>
              Timing Baby
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={5} colSpan={1}>
              Date of Visit <br />
              (dd/mm/yyy)
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={1}>
              PNC Number (New Visit)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              PNC Number /NUPI (Revisit)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Full Name (First,Middle,Last)
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={1}>
              Date of Birth (dd/mm/yyy)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              County/SubCounty
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={1}>
              Village/Estate/LandMark
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Date of Delivery (dd/mm/yyy)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Place of Delivery 1. Facility 2. Home 3. BBA
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Mode of Delivery 1. SVD 2.CS 3. Breach 4. AVD
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              1 = no change, 2 = 10 days to 14 days, 3 = 4 to 6 weeks, 4 = 4 to 6 months
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              1 = no change, 2 = 10 days to 14 days, 3 = 4 to 6 weeks, 4 = 4 to 6 months
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              Temp{' '}
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              Pulse{' '}
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              Blood Pressure{' '}
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={1}>
              Pallor (Y/N)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Breast 1 = normal 2 = cracked niple 3 = engorged 4 = mastistis
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Uterus 1 = contracted 2 = not contracted 3 = others specify
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              PPH 1 = present 2 = absent{' '}
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              C-Section site 1 = bleading 2 = noraml 3 = infected 4 = Gapping 5 = N/A
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Lochia 1 = normal 2 = foul smelling 3 = excessive{' '}
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Episiotomy 1 = repaired 2 = gaping 3 = infected 4 = healed 5=N/A
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Fistula 1 = Vvf 2 = Rvf 3 = VvR 4 = none
            </TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={4} colSpan={1}>
              NUPI{' '}
            </TableHeader>
            <TableHeader rowSpan={4} colSpan={1}>
              Age in Years{' '}
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={3} colSpan={1}>
              Telephone Number{' '}
            </TableHeader>
            <TableHeader rowSpan={3} colSpan={1}>
              1=mild 2=moderate 3=servere{' '}
            </TableHeader>
          </TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
        </TableHead>
      </Table>
    </div>
  </TableContainer>
);

export default RenderMOH406a;
