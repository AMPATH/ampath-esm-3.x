import React from 'react';
import { TableContainer, TableHead, TableRow, TableHeader, Table, TableCell, TableBody } from '@carbon/react';
import styles from '../MOH-362.scss';
const RenderMOH362b: React.FC<{ reportData: any }> = ({ reportData }) => {
  return (
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
            <TableHeader rowSpan={1}>
              {' '}
              National <br />
              Identification <br />
              Number
            </TableHeader>
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
          {reportData && reportData.length > 0 ? (
            reportData.map((item, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell rowSpan={2}> {item.patient_id}</TableCell>
                  {/* a */}
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.patient_id}
                  </TableCell>{' '}
                  {/* b */}
                  <TableCell rowSpan={2}> {item.patient_id}</TableCell>
                  {/* c */}
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.patient_id}
                  </TableCell>
                  {/* d */}
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  {/* e */}
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  {/* f */}
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.patient_id}
                  </TableCell>
                  {/* g */}
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  {/* h */}
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  {/* i */}
                  <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                  {/* j */}
                </TableRow>
                <TableRow>
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.patient_id}
                  </TableCell>
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

export default RenderMOH362b;
