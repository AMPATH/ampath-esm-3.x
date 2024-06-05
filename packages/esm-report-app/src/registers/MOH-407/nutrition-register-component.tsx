import React from 'react';
import styles from './nutrition.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';

const NutritionRegister: React.FC = () => (
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
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
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

const ClientFollowUpRegister: React.FC = () => (
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
        {Array.from({ length: 15 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
const NutritionRegisters: React.FC = () => (
  <div>
    <NutritionRegister />
    <ClientFollowUpRegister />
  </div>
);

export default NutritionRegisters;
