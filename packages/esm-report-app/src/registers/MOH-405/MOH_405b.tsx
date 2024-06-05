import React from 'react';
import styles from './MOH-405.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';
const RenderMOH405b: React.FC = () => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>MOH 405 ANC Register</p>
      </div>
    </div>

    <Table>
      <TableHead>
        <TableRow>
          <TableHeader colspan={12} rowSpan={2}>
            Laboratory
          </TableHeader>
          <TableHeader colspan={1} rowSpan={7}>
            Maternal HAART
          </TableHeader>
          <TableHeader rowSpan={7}>Infant Prophylaxis</TableHeader>
          <TableHeader rowSpan={7}>Partner HIV Testing</TableHeader>
          <TableHeader rowSpan={2}>Other Conditions and Treatment</TableHeader>
          <TableHeader rowSpan={7}>Deworming</TableHeader>
          <TableHeader rowSpan={7}>IPT 1-3</TableHeader>
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
        <TableRow></TableRow>
        <TableRow>
          <TableHeader colSpan={1} rowSpan={6}>
            Haemoglobin (Level/ND/NA){' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={6}>
            Blood Sugar Testing for Diabetes 1=RBS &lt 11.1mmol/L,No Diabetes 2=RBS &gt 11.1mmol/L,Has Diabetes 3= No
            RBS Done
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={6}>
            {' '}
            Blood Group and rhesus (Y/N)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={6}>
            {' '}
            Urinalysis (Y/N)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            {/* Blank */}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={5}>
            {' '}
            Hepatitis B Virus Screening Result (P/N/ND){' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            TB Screening Codes (1-5){' '}
          </TableHeader>
          <TableHeader colSpan={5} rowSpan={1}>
            {' '}
            {/* Blank */}{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={5}>
            {' '}
            1=Hypertension 2=Diabetes 3=Epilepsy 4=Malaria in Pregnancy 5=STIs/RTIs 6=Others (specify) 7=None Record all
            that apply{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={6}>
            {' '}
            1=TT Dose 1st Dose 2=Second Dose 3=3rd Dose 4=4th Dose 5=5th Dose NA=None{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={6}>
            {' '}
            Given Supplementation 1=Combined IFAs 2=Iron 3=Folate 4=Iron +Folate Separately 5=Calcium{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={6}>
            {' '}
            Received LLITNs (Y/N){' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            From{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            To{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={6}>
            {' '}
            Reason for Referral Specify{' '}
          </TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader colSpan={0} rowSpan={4}>
            Type of Test RPR/VDRL/Duo Test/NA{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={5}>
            1=Presumed TB 2=No Signs 3=On TB Treatment 4=On TPT 5=Not done{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={4}>
            HIV testing (Initial or Retest, Known Positive or Revisit){' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            HIV test1{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            HIV test2{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            HIV test3{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={4}>
            Test Results{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={5}>
            1= From Community Unit 2==Another HealthFacility 3= Not Applicable{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={5}>
            1=To Community Unit 2=HIV Preventative Services 3=Another HealthFacility 4= Not Applicable{' '}
          </TableHeader>{' '}
        </TableRow>

        <TableRow>
          <TableHeader colSpan={1} rowSpan={1}>
            Kit Name{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            Kit Name{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            Kit Name{' '}
          </TableHeader>{' '}
        </TableRow>

        <TableRow>
          <TableHeader colSpan={1} rowSpan={1}>
            Lot No{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            Lot No{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            Lot No{' '}
          </TableHeader>{' '}
        </TableRow>
        <TableRow>
          <TableHeader colSpan={1} rowSpan={1}>
            Expiry
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            Expiry{' '}
          </TableHeader>{' '}
          <TableHeader colSpan={1} rowSpan={1}>
            Expiry{' '}
          </TableHeader>{' '}
        </TableRow>
        <TableRow>
          <TableHeader colSpan={1} rowSpan={1}>
            Test Results(P/N/NA)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            Treatment (Y/N/NA)
          </TableHeader>

          <TableHeader colSpan={1} rowSpan={1}>
            (I,R,KP,ND,Rev)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            (N,P/I/NA)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            (N,P/I/NA)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            (N,P/I/NA)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            (N/P/Ic/U/NA)
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            N=New on ART OA = OnART NA=Not Applicable{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            AN=AZT&NVP A=AZT N=NVP NA{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            N/P/KP/NA{' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            Treatment (Y/N/NA){' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            (Y/N/NA){' '}
          </TableHeader>
          <TableHeader colSpan={1} rowSpan={1}>
            {' '}
            (1,2,3,N,NA){' '}
          </TableHeader>
        </TableRow>
        <TableRow>
          <TableCell rowSpan={2}>(u)</TableCell>
          <TableCell rowSpan={2}>(v)</TableCell>
          <TableCell rowSpan={2}>(w)</TableCell>
          <TableCell rowSpan={2}>(x)</TableCell>
          <TableCell rowSpan={2}>(y)</TableCell>
          <TableCell rowSpan={2}>(z)</TableCell>
          <TableCell rowSpan={2}>(aa)</TableCell>
          <TableCell rowSpan={2}>(ab)</TableCell>
          <TableCell rowSpan={2}>(ac)</TableCell>
          <TableCell rowSpan={2}>(ad)</TableCell>
          <TableCell rowSpan={2}>(ae)</TableCell>
          <TableCell rowSpan={2}>(af)</TableCell>
          <TableCell rowSpan={2}>(ag)</TableCell>
          <TableCell rowSpan={2}>(ah)</TableCell>
          <TableCell rowSpan={2}>(ai)</TableCell>
          <TableCell rowSpan={2}>(aj)</TableCell>
          <TableCell rowSpan={2}>(ak)</TableCell>
          <TableCell rowSpan={2}>(al)</TableCell>
          <TableCell rowSpan={2}>(am)</TableCell>
          <TableCell rowSpan={2}>(an)</TableCell>
          <TableCell rowSpan={2}>(ao)</TableCell>
          <TableCell rowSpan={2}>(ap)</TableCell>
          <TableCell rowSpan={2}>(aq)</TableCell>
          <TableCell rowSpan={2}>(ar)</TableCell>
          <TableCell rowSpan={2}>(as)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: 15 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
            </TableRow>
            <TableRow>
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
    <div className={styles['right']}>
      <p>Ver. July 2023</p>
    </div>
  </TableContainer>
);
export default RenderMOH405b;
