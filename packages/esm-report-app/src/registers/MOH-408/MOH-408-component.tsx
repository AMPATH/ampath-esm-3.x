import React from 'react';
import styles from './MOH-408.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';
const RenderMOH408: React.FC = () => {
  return (
    <TableContainer className={styles['table-container']}>
      <div className={styles['header']}>
        <div className={styles['left']}>
          <p>Ministry of Health</p>
        </div>
        <div className={styles['center']}>
          <h2>HIV EXPOSED INFANT REGISTER MOH 408</h2>
        </div>
        <div className={styles['right']}>
          <p>Ver. July 2023</p>
        </div>
      </div>

      <div className={styles['table-wrapper']}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader colSpan={31} rowSpan={1}>
                Cohort: Month/year(MMM YYY)
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader colSpan={9} rowSpan={1}>
                Infant and Mother/Guardian Information
              </TableHeader>
              <TableHeader colSpan={3} rowSpan={2}>
                First HIV DNA PCR Test at Birth <br />6 weeks or First Contact
              </TableHeader>
              <TableHeader colSpan={2} rowSpan={2}>
                Second HIV DNA <br /> PCR Test
              </TableHeader>
              <TableHeader colSpan={2} rowSpan={2}>
                Third HIV DNA PCR <br /> Test
              </TableHeader>
              <TableHeader colSpan={2} rowSpan={2}>
                Hei Outcomes at 12 months
              </TableHeader>
              <TableHeader colSpan={2} rowSpan={2}>
                Confirmatory PCR
              </TableHeader>
              <TableHeader colSpan={2} rowSpan={2}>
                Antibody test <br /> (18 to 24 months)
              </TableHeader>
              <TableHeader colSpan={2} rowSpan={2}>
                Hei Outcomes at 24 <br /> months
              </TableHeader>
              <TableHeader colSpan={1} rowSpan={4}>
                Comments{' '}
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader rowSpan={1} colSpan={4}>
                Registration Information
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={4}>
                Infant's Information
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Parent's Information
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader rowSpan={2} colSpan={1}>
                Serial No
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                Date of <br /> Enrollment (DD/MM/YYY)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Birth Certificate <br /> Number
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                HEI ID
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                Infant's Name
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                DOB
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Sex
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Infant Prophylaxis <br /> 1=NVP <br /> 2=AZT <br /> 3=NVP&AZT <br /> 4=None
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Father's/Mothers/Guardian's Name
              </TableHeader>

              <TableHeader rowSpan={2} colSpan={1}>
                Age at Test (in wks)
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                Type&nbsp;of&nbsp;Test
                <br /> 1=At Birth <br /> 2= At 6 WWeeks <br /> 3=at First Contact
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Date Sample
                <br /> Collected
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                Age at
                <br /> Test <br /> in <br /> Months
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Date Sample
                <br /> Collected
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                Age at
                <br /> Test <br /> in <br /> Months
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Date Sample
                <br /> Collected
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Infant Feeding
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                1=Infected <br /> 2= Uninfected <br /> 3=Lost to Follow <br /> 4=Transfer Out <br /> 5=Dead
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                Age at
                <br /> Test <br /> in <br /> Months
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Date Sample
                <br /> Collected
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                Age at
                <br /> Test <br /> in <br /> Months
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Date Sample
                <br /> Collected
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Infant Feeding
              </TableHeader>
              <TableHeader rowSpan={2} colSpan={1}>
                1=Infected <br /> 2= Uninfected <br /> 3=Lost to Follow <br /> 4=Transfer Out <br /> 5=Dead{' '}
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader rowSpan={1} colSpan={1}>
                Client Unique Number (NUPI)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                (M/F)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                (M/F)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Telephone number
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Test Result (P,N)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Test Result (P,N)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Test Result (P,N)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                BF= Breast Feeding NBF= Not Breast Feeding
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Test Result (P,N)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}>
                Test Result (P,N)
              </TableHeader>

              <TableHeader rowSpan={1} colSpan={1}>
                BF= Breast Feeding NBF= Not Breast Feeding
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
              <TableCell rowSpan={1}>(l)</TableCell>
              <TableCell rowSpan={1}>(m)</TableCell>
              <TableCell rowSpan={1}>(n)</TableCell>
              <TableCell rowSpan={1}>(o)</TableCell>
              <TableCell rowSpan={1}>(p)</TableCell>
              <TableCell rowSpan={1}>(q)</TableCell>
              <TableCell rowSpan={1}>(r)</TableCell>
              <TableCell rowSpan={1}>(s)</TableCell>
              <TableCell rowSpan={1}>(t)</TableCell>
              <TableCell rowSpan={1}>(u)</TableCell>
              <TableCell rowSpan={1}>(v)</TableCell>
              <TableCell rowSpan={1}>(w)</TableCell>
              <TableCell rowSpan={1}>(x)</TableCell>
              <TableCell rowSpan={1}>(y)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 2 }, (_, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell rowSpan={2}></TableCell>
                  {/* a */}
                  <TableCell rowSpan={2}></TableCell> {/* b */}
                  <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                  {/* c */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* d */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* e */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* f */}
                  <TableCell rowSpan={1}></TableCell>
                  {/* g */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* h */}
                  <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                  {/* i */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* j */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* k */}
                  <TableCell rowSpan={1}></TableCell>
                  {/* l */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* m */}
                  <TableCell rowSpan={1}></TableCell>
                  {/* n */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* o */}
                  <TableCell rowSpan={1}></TableCell>
                  {/* p */}
                  <TableCell rowSpan={1}></TableCell>
                  {/* q */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* r */}
                  <TableCell rowSpan={2}></TableCell>
                  {/* s */}
                  <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                  {/* t */}
                  <TableCell rowSpan={2}></TableCell>
                  <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                  <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={2}></TableCell>
                  {/* <TableCell rowSpan={2}></TableCell> */}
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                  <TableCell rowSpan={1}></TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default RenderMOH408;
