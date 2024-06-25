import React from 'react';
import styles from './MOH_406.scss';

import { TableContainer, TableHead, TableRow, TableHeader, Table, TableBody, TableCell } from '@carbon/react';

const RenderMOH406: React.FC<{ reportData: any }> = ({ reportData }) => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>MOH 406 PNC REGISTER</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <div className={styles['table-wrapper']}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader rowSpan={2} colSpan={7}>
              Registration Information
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={3}>
              Maternity History
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={2}>
              Postpartum visit
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={3}>
              Vital Signs
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={8}>
              Post Natal Examination
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              TB Screening
            </TableHeader>
            <TableHeader colSpan={6} rowSpan={1}>
              {' '}
            </TableHeader>
            <TableHeader colSpan={4} rowSpan={1}>
              {' '}
              HAART & Infant Prophylaxis and Treatment
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              Cervical Cancer Screening (VIA/VIL/PAP Smear/ND)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={3}>
              {' '}
              Modern Post partum Family Planning (Y/N)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              {' '}
              Other maternal Complications
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              {' '}
              Haematinics
            </TableHeader>
            <TableHeader colSpan={3} rowSpan={1}>
              {' '}
              Referrals
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={7}>
              {' '}
              Remarks
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={1} colSpan={1}>
              Timing Mother
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={1}>
              Timing Baby
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={5}>
              TB Screening
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={5}>
              Tested PNC
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              HIV Test 1
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              HIV Test 2
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              HIV Test 3
            </TableHeader>
            <TableHeader colSpan={2} rowSpan={4}>
              Results in PNC
            </TableHeader>

            <TableHeader colSpan={2} rowSpan={1}>
              6 wks
            </TableHeader>
            <TableHeader colSpan={2} rowSpan={1}>
              6 Wks
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={5}>
              Results 1=normal, 2=suspected 3=confirmed 4=not done{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={2}>
              From
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={2}>
              To
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={5}>
              Reason for Referral
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={5} colSpan={1}>
              Date of Visit <br />
              (dd/mm/yyy)
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={1}>
              PNC Number (New Visit)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              PNC Number /NUPI (Revisit)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Full Name (First,Middle,Last)
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={1}>
              Date of Birth (dd/mm/yyy)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              County/SubCounty
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={1}>
              Village/Estate/LandMark
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Date of Delivery (dd/mm/yyy)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Place of Delivery 1. Facility 2. Home 3. BBA
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Mode of Delivery 1. SVD 2.CS 3. Breach 4. AVD
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              1 = no change <br /> 2 = 10 days to 14 days <br /> 3 = 4 to 6 weeks <br /> 4 = 4 to 6 months
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              1 = no change <br /> 2 = 10 days to 14 days <br /> 3 = 4 to 6 weeks <br /> 4 = 4 to 6 months
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              Temp{' '}
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              Pulse{' '}
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              {' '}
              Blood Pressure{' '}
            </TableHeader>
            <TableHeader rowSpan={2} colSpan={1}>
              Pallor (Y/N)
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Breast 1 = normal 2 = cracked niple 3 = engorged 4 = mastistis
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Uterus 1 = contracted 2 = not contracted 3 = others specify
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              PPH 1 = present 2 = absent{' '}
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              C-Section site 1 = bleading 2 = noraml 3 = infected 4 = Gapping 5 = N/A
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Lochia 1 = normal 2 = foul smelling 3 = excessive{' '}
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Episiotomy 1 = repaired 2 = gaping 3 = infected 4 = healed 5=N/A
            </TableHeader>
            <TableHeader rowSpan={5} colSpan={1}>
              Fistula 1 = Vvf 2 = Rvf 3 = VvR 4 = none
            </TableHeader>

            <TableHeader colSpan={1} rowSpan={1}>
              Kit Name 1
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Kit Name 2
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Kit Name 3
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Infant
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Mother
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Infant
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Mother
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={4} colSpan={1}>
              NUPI{' '}
            </TableHeader>
            <TableHeader rowSpan={4} colSpan={1}>
              Age in Years{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Lot No
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Lot No
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Lot No
            </TableHeader>
            <TableHeader rowSpan={3}>NVP + AZT+ CTX or NVP + CTX</TableHeader>
            <TableHeader rowSpan={3}>HAART</TableHeader>

            <TableHeader rowSpan={3}>NVP + AZT+ CTX or NVP + CTX</TableHeader>
            <TableHeader rowSpan={3}>HAART</TableHeader>

            <TableHeader rowSpan={3}> Counselled Method Received</TableHeader>
            <TableHeader rowSpan={3}>1= community unit, 2= another health facility 3=not applicable</TableHeader>
            <TableHeader rowSpan={3}>1= community unit, 2= another health facility 3=not applicable</TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={3} colSpan={1}>
              Telephone Number{' '}
            </TableHeader>
            <TableHeader rowSpan={3} colSpan={1}>
              1=mild 2=moderate 3=servere{' '}
            </TableHeader>
            <TableHeader rowSpan={2}>Expiry No</TableHeader>
            <TableHeader rowSpan={2}>Expiry No</TableHeader>
            <TableHeader rowSpan={2}>Expiry No</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader colSpan={1} rowSpan={1}>
              less than or =6weeks
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              more than 6weeks
            </TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader></TableHeader>
            <TableHeader>(I,R,ND,KP)</TableHeader>
            <TableHeader>(N,P,I,NA)</TableHeader>
            <TableHeader>(N,P,I,NA)</TableHeader>
            <TableHeader>(N,P,I,NA)</TableHeader>
            <TableHeader>(N/P/Ic/NA)</TableHeader>
            <TableHeader>(N/P/Ic/NA)</TableHeader>
            <TableHeader>(Y/N/NA/R)</TableHeader>
            <TableHeader>(Y/N/NA/R)</TableHeader>
            <TableHeader>(Y/N/NA/R)</TableHeader>
            <TableHeader>(Y/N/NA/R)</TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
            <TableHeader></TableHeader>
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
            <TableCell rowSpan={2}>(u)</TableCell>
            <TableCell rowSpan={2}>(v)</TableCell>
            <TableCell rowSpan={2}>(w)</TableCell>
            <TableCell rowSpan={1}>(x)</TableCell>
            <TableCell rowSpan={1}>(y)</TableCell>
            <TableCell rowSpan={1}>(z)</TableCell>
            <TableCell rowSpan={1}>(aa)</TableCell>
            <TableCell rowSpan={1}>(ab)</TableCell>
            <TableCell rowSpan={1}>(ac)</TableCell>
            <TableCell rowSpan={1}>(ad)</TableCell>
            <TableCell rowSpan={1}>(ae)</TableCell>
            <TableCell rowSpan={1}>(af)</TableCell>
            <TableCell rowSpan={1}>(ag)</TableCell>
            <TableCell rowSpan={1}>(ah)</TableCell>
            <TableCell rowSpan={1}>(ai)</TableCell>
            <TableCell rowSpan={1}>(aj)</TableCell>
            <TableCell rowSpan={1}>(ak)</TableCell>
            <TableCell rowSpan={1}>(al)</TableCell>
            <TableCell rowSpan={1}>(am)</TableCell>
            <TableCell rowSpan={1}>(an)</TableCell>
            <TableCell rowSpan={1}>(ao)</TableCell>
            <TableCell rowSpan={1}>(ap)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 2 }, (_, i) => (
            <React.Fragment key={i}>
              <TableRow>
                <TableCell rowSpan={2}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={1}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={1}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
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
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={1}></TableCell>
                <TableCell rowSpan={1}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
                <TableCell rowSpan={2}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  </TableContainer>
);

export default RenderMOH406;
