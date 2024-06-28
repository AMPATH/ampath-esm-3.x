import React from 'react';
import styles from './jua_mtoto_wako.scss';
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
            <TableHeader rowSpan={8}>S/No</TableHeader>
            <TableHeader rowSpan={1}>Facility</TableHeader>
            <TableHeader rowSpan={8}>CCC No</TableHeader>
            <TableHeader rowSpan={8}>Name</TableHeader>
            <TableHeader rowSpan={8}>Sex</TableHeader>
            <TableHeader rowSpan={1}> Date of birth DD/MM/YYYY</TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              Age at enrollment to JMW
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={1}>
              Month of enrollment to JMW (Cohort)
            </TableHeader>
            <TableHeader rowSpan={8}>Empty</TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              HIV Status of the Care Giver (Pos, Neg, Uknown)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              {' '}
              Suppression Status of the Care Giver (Suppressed, Not Suppressed, NA)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={5}>
              Caregiver education (None, Primary, Secondary, Tertiary)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={5}>
              Disclosure status for Children 6 yrs and Adolescents (Y, N, NA){' '}
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              Disclosure status for Children (6 yrs) and Adolescents (Type: Assisted and Unassisted){' '}
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              Current ART Regimen line
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              {' '}
              Current ART Regimen (e.g TDF + 3TC + EFV){' '}
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              Is the Regimen Correct (Y/N)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              Start Date of Current ART Regimen DD/MM/YYYY
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={8}>
              Viral Load copies (Most Current VL)
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={4}>
              Date VL done (DD/MM/YYYY)
            </TableHeader>
            <TableHeader colspan={12} rowSpan={2}>
              Weight{' '}
            </TableHeader>
            <TableHeader colspan={1} rowSpan={7}>
              Height(cm){' '}
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={7}>
              BMI (Calculated)/Z-score
            </TableHeader>
            <TableHeader className={styles['vertical_text']} rowSpan={7}>
              MDT 1 held(Y/N) -------------- Date (DD/MM/YYYY)
            </TableHeader>
            <TableHeader rowSpan={2}>Main Reason for Non-Suppression </TableHeader>
            <TableHeader rowSpan={7}>Other Reason for Non-Suppression </TableHeader>
            <TableHeader rowSpan={7}>Priority Solution </TableHeader>
            <TableHeader rowSpan={2}>Dose</TableHeader>
            <TableHeader rowSpan={2}>Supplementation</TableHeader>
            <TableHeader rowSpan={2}>LLITNS </TableHeader>
            <TableHeader colSpan={3} rowSpan={2}>
              Referrals
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={8}>
              Remarks
            </TableHeader>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  </TableContainer>
);

export default RenderJuaMtotoWako;
