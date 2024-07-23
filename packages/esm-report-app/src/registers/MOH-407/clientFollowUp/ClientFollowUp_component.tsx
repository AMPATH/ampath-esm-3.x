import React from 'react';
import styles from '../nutrition.scss';
import { TableContainer, TableHead, TableRow, TableHeader, Table, TableBody, TableCell } from '@carbon/react';

const ClientFollowUpRegister: React.FC<{ reportData: any }> = ({ reportData }) => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>Nutrition Service Register MOH 407</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>
    <div className={styles['table-wrapper']}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader colSpan={79} className={styles['center']}>
              Client's follow up Register
            </TableHeader>
          </TableRow>
          <tr></tr>
          <TableRow>
            <TableHeader rowSpan={3}>SNO.</TableHeader>
            <TableHeader rowSpan={2}>Date: (dd/mm/yyyy)</TableHeader>
            <TableHeader rowSpan={1}>
              National
              <br /> Identification
              <br /> Number
            </TableHeader>
            <TableHeader rowSpan={2}>CCC Number</TableHeader>
            <TableHeader rowSpan={2}>Client's Name</TableHeader>
            <TableHeader rowSpan={2}>Village/Estate/Landmark</TableHeader>
            <TableHeader rowSpan={2}>Mobile number</TableHeader>
            <TableHeader rowSpan={1} colSpan={2}>
              Age
            </TableHeader>
            <TableHeader rowSpan={2}>
              Sex <br />
              (M/F)
            </TableHeader>
            <TableHeader rowSpan={2}>
              Type of Admission <br />
              1.new-admission
              <br />
              2.relapse
              <br />
              3.returned defaulter
            </TableHeader>
            <TableHeader rowSpan={2}>
              Pregnant <br />
              and <br />
              Lactating <br />
              (Y/N/NA)
            </TableHeader>
            <TableHeader rowSpan={2}>
              Serostatus <br />
              (N/P/HEI/U)
            </TableHeader>
            <TableHeader rowSpan={2}>
              Admission Criteria <br />
              1. WFH Z-score <br />
              2. MUAC <br />
              3. BMI for age <br />
              4. BMI kg/m2
            </TableHeader>
            <TableHeader rowSpan={2}>Weight (Kg)</TableHeader>
            <TableHeader rowSpan={2}>Height (cm)</TableHeader>
            <TableHeader rowSpan={2}>W/H Zscore/BMI For Age/BMI Kg/m2</TableHeader>
            <TableHeader rowSpan={2}>MUAC</TableHeader>
            <TableHeader rowSpan={2}>Nutrition Intervention</TableHeader>
            {[...Array(12)].map((_, index) => (
              <TableHeader colSpan={4} key={index}>
                Week {index + 1}
              </TableHeader>
            ))}
            <TableHeader colSpan={8}>Discharge/Transfer Measurements</TableHeader>
            <TableHeader colSpan={2}>Outcome</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={1}>Client Unique Number (NUPI)</TableHeader>
            <TableHeader rowSpan={1}>Years</TableHeader>
            <TableHeader rowSpan={1}>Months</TableHeader>
            {[...Array(12)].map((_, index) => (
              <React.Fragment key={index}>
                <TableHeader>Weight (Kg)</TableHeader>
                <TableHeader>W/H Zscore/BMI For Age/BMI Kg/m2</TableHeader>
                <TableHeader>MUAC</TableHeader>
                <TableHeader>Nutrition Intervention</TableHeader>
              </React.Fragment>
            ))}
            <TableHeader>Nutrition Intervention</TableHeader>
            <TableHeader>Weight (Kg)</TableHeader>
            <TableHeader>Height/Length(cm)</TableHeader>
            <TableHeader>W/H Zscore/BMI For Age/BMI Kg/m2</TableHeader>
            <TableHeader>MUAC</TableHeader>
            <TableHeader>Nutrition Intervention</TableHeader>
            <TableHeader>
              Exit
              <br />
              dd/mm/yyyy
            </TableHeader>
            <TableHeader>Length of stay in days</TableHeader>
            <TableHeader>
              Exit Outcome
              <br />
              1-Cured,
              <br />
              2-Defaulter,
              <br />
              3-Non-Respondant,
              <br />
              4-Referral,
              <br />
              5-Transfer,
              <br />
              6-Death
            </TableHeader>
            <TableHeader>Remarks</TableHeader>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={1}>a</TableCell>
            <TableCell rowSpan={1}>b</TableCell>
            <TableCell rowSpan={1}>c</TableCell>
            <TableCell rowSpan={1}>d</TableCell>
            <TableCell rowSpan={1}>e</TableCell>
            <TableCell rowSpan={1}>f</TableCell>
            <TableCell rowSpan={1}>g</TableCell>
            <TableCell rowSpan={1}>h</TableCell>
            <TableCell rowSpan={1}>i</TableCell>
            <TableCell rowSpan={1}>j</TableCell>
            <TableCell rowSpan={1}>k</TableCell>
            <TableCell rowSpan={1}>l</TableCell>
            <TableCell rowSpan={1}>m</TableCell>
            <TableCell rowSpan={1}>n</TableCell>
            <TableCell rowSpan={1}>o</TableCell>
            <TableCell rowSpan={1}>p</TableCell>
            <TableCell rowSpan={1}>q</TableCell>
            <TableCell rowSpan={1}>r</TableCell>
            <TableCell rowSpan={1}>s</TableCell>
            <TableCell rowSpan={1}>t</TableCell>
            <TableCell rowSpan={1}>u</TableCell>
            <TableCell rowSpan={1}>v</TableCell>
            <TableCell rowSpan={1}>w</TableCell>
            <TableCell rowSpan={1}>x</TableCell>
            <TableCell rowSpan={1}>y</TableCell>
            <TableCell rowSpan={1}>z</TableCell>
            <TableCell rowSpan={1}>aa</TableCell>
            <TableCell rowSpan={1}>ab</TableCell>
            <TableCell rowSpan={1}>ac</TableCell>
            <TableCell rowSpan={1}>ad</TableCell>
            <TableCell rowSpan={1}>ae</TableCell>
            <TableCell rowSpan={1}>af</TableCell>
            <TableCell rowSpan={1}>ag</TableCell>
            <TableCell rowSpan={1}>ah</TableCell>
            <TableCell rowSpan={1}>ai</TableCell>
            <TableCell rowSpan={1}>aj</TableCell>
            <TableCell rowSpan={1}>ak</TableCell>
            <TableCell rowSpan={1}>al</TableCell>
            <TableCell rowSpan={1}>am</TableCell>
            <TableCell rowSpan={1}>an</TableCell>
            <TableCell rowSpan={1}>ao</TableCell>
            <TableCell rowSpan={1}>ap</TableCell>
            <TableCell rowSpan={1}>aq</TableCell>
            <TableCell rowSpan={1}>ar</TableCell>
            <TableCell rowSpan={1}>as</TableCell>
            <TableCell rowSpan={1}>at</TableCell>
            <TableCell rowSpan={1}>au</TableCell>
            <TableCell rowSpan={1}>av</TableCell>
            <TableCell rowSpan={1}>aw</TableCell>
            <TableCell rowSpan={1}>ax</TableCell>
            <TableCell rowSpan={1}>ay</TableCell>
            <TableCell rowSpan={1}>az</TableCell>
            <TableCell rowSpan={1}>ba</TableCell>
            <TableCell rowSpan={1}>bb</TableCell>
            <TableCell rowSpan={1}>bc</TableCell>
            <TableCell rowSpan={1}>bd</TableCell>
            <TableCell rowSpan={1}>be</TableCell>
            <TableCell rowSpan={1}>bf</TableCell>
            <TableCell rowSpan={1}>bg</TableCell>
            <TableCell rowSpan={1}>bh</TableCell>
            <TableCell rowSpan={1}>bi</TableCell>
            <TableCell rowSpan={1}>bj</TableCell>
            <TableCell rowSpan={1}>bk</TableCell>
            <TableCell rowSpan={1}>bl</TableCell>
            <TableCell rowSpan={1}>bm</TableCell>
            <TableCell rowSpan={1}>bn</TableCell>
            <TableCell rowSpan={1}>bo</TableCell>
            <TableCell rowSpan={1}>bp</TableCell>
            <TableCell rowSpan={1}>bq</TableCell>
            <TableCell rowSpan={1}>br</TableCell>
            <TableCell rowSpan={1}>bs</TableCell>
            <TableCell rowSpan={1}>bt</TableCell>
            <TableCell rowSpan={1}>bu</TableCell>
            <TableCell rowSpan={1}>bv</TableCell>
            <TableCell rowSpan={1}>bw</TableCell>
            <TableCell rowSpan={1}>bx</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData && reportData.length > 0 ? (
            reportData.map((item, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
                  <TableCell>{item.patient_id}</TableCell>
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
    </div>
  </TableContainer>
);

export default ClientFollowUpRegister;
