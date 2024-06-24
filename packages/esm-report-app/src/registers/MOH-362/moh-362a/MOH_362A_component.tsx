import React from 'react';
import styles from '../MOH-362.scss';
import { TableContainer, TableHead, TableRow, TableHeader, Table, TableBody, TableCell } from '@carbon/react';

const RenderMOH362a: React.FC<{ reportData: any }> = ({ reportData }) => {
  return (
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
            <TableHeader rowSpan={1}>
              National <br />
              Identification <br />
              Number
            </TableHeader>
            <TableHeader rowSpan={5}>
              Date of visit <br />
              (DD/MM/YYYY)
            </TableHeader>
            <TableHeader rowSpan={5}>
              Client Name <br />
              (First, Middle, Last)
            </TableHeader>
            <TableHeader rowSpan={5}>Age</TableHeader>
            <TableHeader rowSpan={5}>
              Sex <br />
              (M/F)
            </TableHeader>
            <TableHeader rowSpan={5}>
              Telephone <br />
              Number
            </TableHeader>
            <TableHeader rowSpan={5}>
              Marital Status <br />
              1=Married <br />
              2=Widowed <br />
              3=Single <br />
              4=Divorced <br />
              5=Separated
            </TableHeader>
            <TableHeader rowSpan={5}>
              Population Type <br />
              1. Gen Pop <br />
              2. Key and <br />
              Vulnerable Pop. <br />
              Codes for KVP <br />
              -DC <br />
              -MSM/MSW <br />
              -FSW <br />
              -PWID/PWUD <br />
              -VP
            </TableHeader>
            <TableHeader rowSpan={5}>
              Setting <br /> (1=Facility <br />
              2=Community)
            </TableHeader>
            <TableHeader rowSpan={1}>HIV Test 1</TableHeader>
            <TableHeader rowSpan={1}>HIV Test 2</TableHeader>
            <TableHeader rowSpan={1}>HIV Test 3</TableHeader>
            <TableHeader rowSpan={4}>
              Final HIV <br />
              Result
            </TableHeader>
            <TableHeader rowSpan={4}>
              Discordant <br />
              Couple
            </TableHeader>
            <TableHeader rowSpan={5}>
              Referred for <br />
              Prevention <br />
              Services <br />
              1. PrEP <br />
              2. PEP <br />
              3. VMMC <br />
              4. PMTCT <br />
              5. NA
            </TableHeader>
            <TableHeader rowSpan={5}>
              HTS Provider <br />
              (Name)
            </TableHeader>
            <TableHeader rowSpan={5}>Remarks</TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={4}>
              National Unique <br />
              Patient Identifier <br />
              (NUPI) Number
            </TableHeader>
            <TableHeader rowSpan={1}>Kit Name:</TableHeader>
            <TableHeader rowSpan={1}>Kit Name:</TableHeader>
            <TableHeader rowSpan={1}>Kit Name:</TableHeader>
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
          {reportData && reportData.length > 0 ? (
            reportData.map((item, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell rowSpan={2}>{i}</TableCell>
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.patient_id}
                  </TableCell>
                  <TableCell rowSpan={2}>{item.visit_date}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.patient_id}
                  </TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.patient_id}
                  </TableCell>
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.patient_id}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={19}>No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RenderMOH362a;
