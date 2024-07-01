import React from 'react';
import styles from './Jua_Mtoto_Wako.scss';
import { TableContainer, TableHead, TableRow, Table, TableBody, TableCell, TableHeader } from '@carbon/react';

const RenderJuaMtotoWako: React.FC<{}> = () => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>Jua Mtoto Wako Register</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <div className={styles['table-wrapper']}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader colSpan={8} rowSpan={1}>
              1.0 CALHIV
            </TableHeader>
            <TableHeader colSpan={4} rowSpan={1}>
              2.0 Care giver details and characteristics
            </TableHeader>
            <TableHeader colSpan={12} rowSpan={1}>
              3.0 CALHIV characteristics
            </TableHeader>
            <TableHeader className={styles['brown']} colSpan={4} rowSpan={1}>
              4.0 Assessment - Reasons for Non-Suppression
            </TableHeader>
            <TableHeader className={styles['green']} colSpan={15} rowSpan={1}>
              5.0 EAC Plan and Execution
            </TableHeader>
            <TableHeader className={styles['red']} colSpan={5} rowSpan={1}>
              6.0 Support Intervention Post Suppression
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={1}>S/No</TableHeader>
            <TableHeader rowSpan={1}>Facility</TableHeader>
            <TableHeader rowSpan={1}>CCC No</TableHeader>
            <TableHeader rowSpan={1}>Name</TableHeader>
            <TableHeader rowSpan={1}>Sex</TableHeader>
            <TableHeader rowSpan={1}> Date of birth DD/MM/YYYY</TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Age at enrollment to JMW
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Month of <br /> enrollment <br /> to JMW (Cohort)
            </TableHeader>
            <TableHeader rowSpan={1}></TableHeader>

            <TableHeader className={`${styles['vertical_text']} ${styles['blue']}`} rowSpan={1}>
              HIV Status of <br /> the Care Giver (Pos, <br /> Neg, Uknown)
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['blue']}`} rowSpan={1}>
              Suppression <br /> Status of the Care <br /> Giver (Suppressed, <br /> Not Suppressed, NA)
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['blue']}`} rowSpan={1}>
              Caregiver <br /> education (None, <br /> Primary, <br /> Secondary, <br /> Tertiary)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Disclosure status <br /> for Children &gt; 6 yrs <br /> and Adolescents (Y, N, NA)
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['blue']} `} rowSpan={1}>
              Disclosure status <br /> for Children &gt; (6 yrs) and <br /> Adolescents <br /> (Type: Assisted and
              Unassisted)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Current ART <br /> Regimen line
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Current ART <br /> Regimen (e.g TDF <br /> + 3TC + EFV)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Is the Regimen <br /> Correct (Y/N)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Start Date of <br /> Current ART <br /> Regimen <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Viral Load copies <br /> (Most Current VL)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Date VL done <br /> (DD/MM/YYYY)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Weight
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Height(cm)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              BMI <br /> (Calculated)/Z-score
            </TableHeader>
            <TableHeader rowSpan={1}>
              MDT 1 held(Y/N)
              <br /> --------------
              <br /> Date (DD/MM/YYYY)
            </TableHeader>
            <TableHeader rowSpan={1}>Main Reason for Non-Suppression </TableHeader>
            <TableHeader rowSpan={1}>
              Other Reason for <br /> Non-Suppression
            </TableHeader>

            <TableHeader rowSpan={1}>Priority Solution </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Date of <br /> intervention <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Adherence session <br /> 1 Date done <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Adherence Session 2 <br /> Date done <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              Adherence Session <br /> 3 Date done <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              Home Visit Date <br /> done DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              Repeat Viral load <br /> test result after i<br /> nterventions <br /> (copies/ml)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              Date VL done <br /> DD/MM/YYYY (copies/ml)
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['blue']}`} colSpan={1} rowSpan={1}>
              Eligible for <br /> switching to 2nd <br /> or 3rd line (Yes/No)
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['blue']}`} colSpan={1} rowSpan={1}>
              If Yes, indicate the <br /> Regimen
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['blue']}`} colSpan={1} rowSpan={1}>
              Eligible for DRT <br /> (Yes/No)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              If Yes, indicate <br /> Date done <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              If Resistant, what's <br /> the new Regimen?
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              Date of new <br /> regimen initiation <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              Date 2nd MDT was <br /> done DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              Repeat Viral load <br /> test result after <br /> interventions (copies/ml)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} colSpan={1} rowSpan={1}>
              Date VL done <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['red']}`} colSpan={1} rowSpan={1}>
              Support Intervention 1 <br /> Post Suppression <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['red']}`} colSpan={1} rowSpan={1}>
              Support Intervention 2 <br /> Post Suppression <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['red']}`} colSpan={1} rowSpan={1}>
              Support Intervention 3 <br /> Post Suppression <br /> DD/MM/YYYY
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['red']}`} colSpan={1} rowSpan={1}>
              Status as at July
            </TableHeader>
            <TableHeader className={`${styles['vertical_text']} ${styles['red']}`} colSpan={1} rowSpan={1}>
              Comments
            </TableHeader>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  </TableContainer>
);

export default RenderJuaMtotoWako;
