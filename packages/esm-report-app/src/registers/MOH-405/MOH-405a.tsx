import React from 'react';
import styles from './MOH-405.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';

const RenderMOH405a: React.FC = () => (
  <TableContainer className={styles['table-container']} title="MOH 362 HTS LAB, REFERRAL AND LINKAGE REGISTER">
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>AnteNatal(ANC) Register MOH 405</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <Table>
      <TableHead>
        <TableRow>
          <TableHeader rowSpan={3}>Date of visit</TableHeader>
          <TableHeader rowSpan={1}>(New Client)</TableHeader>
          <TableHeader rowSpan={3}>ANC Number/NUPI (Re Visit)</TableHeader>
          <TableHeader rowSpan={3}>Number of Visits (1st,2nd,3rd,4th...)</TableHeader>
          <TableHeader rowSpan={3}>Full Name (First,Middle,Surname)</TableHeader>
          <TableHeader rowSpan={2}> Date of birth (DD/MM/YYY)</TableHeader>
          <TableHeader rowSpan={3}>Subcounty/County</TableHeader>
          <TableHeader rowSpan={2}>Village/Estate/Landmark</TableHeader>
          <TableHeader rowSpan={3}>
            Marital Status NM=Never,Married/Single,MM=Married Monogamous MP=Married Polygamous W=Widowed D=Divorced
            S=Separated
          </TableHeader>
          <TableHeader rowSpan={3}>Parity</TableHeader>
          <TableHeader rowSpan={3}> Gravidae</TableHeader>
          <TableHeader rowSpan={2}>Date of Last Menstrual Period(LMP)</TableHeader>
          <TableHeader rowSpan={2}>Expected Date of Delivery (EDD)</TableHeader>
          <TableHeader rowSpan={3}>Gestation in Weeks</TableHeader>
          <TableHeader rowSpan={3}>MUAC 1=Green 2=Yellow 3=Red</TableHeader>
          <TableHeader rowSpan={3}>Height(cm)</TableHeader>
          <TableHeader rowSpan={3}>Weight (kg)</TableHeader>
          <TableHeader rowSpan={3}>Blood Pressure</TableHeader>
          <TableHeader rowSpan={3}>Breast Exam 1=normal 2=abnormal</TableHeader>
          <TableHeader rowSpan={2}>FGM (Y/N)</TableHeader>
        </TableRow>

        <TableRow>
          <TableHeader rowSpan={1}>ANC Number</TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader rowSpan={1}>NUPI</TableHeader>
          <TableHeader rowSpan={1}>Age</TableHeader>
          <TableHeader rowSpan={1}>Phone Number</TableHeader>
          <TableHeader rowSpan={1}>(dd/mm/yyy)</TableHeader>
          <TableHeader rowSpan={1}>(dd/mm/yyy)</TableHeader>
          <TableHeader rowSpan={1}>
            {' '}
            FGM Associated Complications 1.Scarring 2=keloids 3=Dyspaneuria 4=UTi 5=N/A
          </TableHeader>
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
          <TableCell rowSpan={2}>(s)</TableCell>
          <TableCell rowSpan={2}>(t)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: 15 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              {/* a */}
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell> {/* b */}
              <TableCell rowSpan={2}></TableCell>
              {/* c */}
              <TableCell rowSpan={2}></TableCell>
              {/* d */}
              <TableCell rowSpan={2}></TableCell>
              {/* e */}
              <TableCell rowSpan={1}></TableCell>
              {/* f */}
              <TableCell rowSpan={2}></TableCell>
              {/* g */}
              <TableCell rowSpan={1}></TableCell>
              {/* h */}
              <TableCell rowSpan={2}></TableCell>
              {/* i */}
              <TableCell rowSpan={2}></TableCell>
              {/* j */}
              <TableCell rowSpan={2}></TableCell>
              {/* k */}
              <TableCell rowSpan={2}></TableCell>
              {/* l */}
              <TableCell rowSpan={2}></TableCell>
              {/* m */}
              <TableCell rowSpan={2}></TableCell>
              {/* n */}
              <TableCell rowSpan={2}></TableCell>
              {/* o */}
              <TableCell rowSpan={2}></TableCell>
              {/* p */}
              <TableCell rowSpan={2}></TableCell>
              {/* q */}
              <TableCell rowSpan={2}></TableCell>
              {/* r */}
              <TableCell rowSpan={2}></TableCell>
              {/* s */}
              <TableCell rowSpan={1}></TableCell>
              {/* t */}
            </TableRow>
            <TableRow>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
export default RenderMOH405a;
