import React from 'react';
import styles from '../nutrition.scss';
import { TableContainer, TableHead, TableRow, TableHeader, Table, TableBody, TableCell } from '@carbon/react';

const NutritionRegister: React.FC<{ reportData: any }> = ({ reportData }) => (
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

    <Table>
      <TableHead>
        <TableRow>
          <TableHeader rowSpan={3}>NO.</TableHeader>
          <TableHeader rowSpan={2}>
            Date: <br />
            (DD/MM/YYYY)
          </TableHeader>
          <TableHeader rowSpan={1}>
            National Identification <br />
            Number
          </TableHeader>
          <TableHeader rowSpan={2}>CCC Number</TableHeader>
          <TableHeader rowSpan={2}>
            Patient Names
            <br /> (First, Middle, Last)
          </TableHeader>
          <TableHeader rowSpan={2}>
            Patient visit <br />
            type
            <br />
            1=New, <br />
            2=Revisit
          </TableHeader>
          <TableHeader rowSpan={2}>
            Residence: <br />
            Village/Estate
          </TableHeader>
          <TableHeader rowSpan={2}>
            Sex <br />
            (M=Male, F=Female)
          </TableHeader>
          <TableHeader rowSpan={1} colSpan={2}>
            Age
          </TableHeader>
          <TableHeader rowSpan={2}>
            Pregnant
            <br /> and
            <br /> Lactating <br />
            (Y/N/NA)
          </TableHeader>
          <TableHeader rowSpan={2}>
            Nutrition Assessment <br />
            1.Weight for Height (Under 5's) <br />
            2.Weight for Age (Under 5's) <br />
            3.MUAC (6-59months, Pregnant, Lactating, and any other bedridden client.) <br />
            4.BMI for Age (5-17 Years) <br />
            5.BMI Kg/m (18+ Years)
          </TableHeader>
          <TableHeader rowSpan={2}>
            Nutrition <br />
            Status <br />
            (Indicate codes) <br />
            1.SAM, <br />
            2.MAM, <br />
            3.Mild/At risk, <br />
            4.Normal, <br />
            5.Overweight/Obese
          </TableHeader>
          <TableHeader rowSpan={2}>
            Serostatus <br />
            (N/P/HEI/U)
          </TableHeader>
          <TableHeader rowSpan={2}>
            Comorbidities <br />
            1.TB, <br />
            2.Diabetes, <br />
            3.Hypertension, <br />
            4.Others specify, <br />
            5.None
          </TableHeader>
          <TableHeader rowSpan={2}>
            Food <br />
            Secure <br />
            1-Yes <br />
            2-No
          </TableHeader>
          <TableHeader rowSpan={2}>Remarks</TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader rowSpan={1}>
            Client Unique <br />
            Number <br />
            (NUPI)
          </TableHeader>
          <TableHeader rowSpan={1}>Years</TableHeader>
          <TableHeader rowSpan={1}>Months</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell rowSpan={1}>A</TableCell>
          <TableCell rowSpan={1}>B</TableCell>
          <TableCell rowSpan={1}>C</TableCell>
          <TableCell rowSpan={1}>D</TableCell>
          <TableCell rowSpan={1}>E</TableCell>
          <TableCell rowSpan={1}>F</TableCell>
          <TableCell rowSpan={1}>G</TableCell>
          <TableCell rowSpan={1}>H</TableCell>
          <TableCell rowSpan={1}>I</TableCell>
          <TableCell rowSpan={1}>J</TableCell>
          <TableCell rowSpan={1}>K</TableCell>
          <TableCell rowSpan={1}>L</TableCell>
          <TableCell rowSpan={1}>M</TableCell>
          <TableCell rowSpan={1}>N</TableCell>
          <TableCell rowSpan={1}>O</TableCell>
          <TableCell rowSpan={1}>P</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reportData && reportData.length > 0 ? (
          reportData.map((item, i) => (
            <React.Fragment key={i}>
              <TableRow>
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
                <TableCell className={styles['dotted-border']} rowSpan={1}>
                  {item.patient_id}
                </TableCell>
                <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                <TableCell rowSpan={2}>{item.patient_id}</TableCell>
                <TableCell rowSpan={2}>{item.patient_id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
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

export default NutritionRegister;
