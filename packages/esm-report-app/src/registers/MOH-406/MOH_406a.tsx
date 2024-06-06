import React from 'react';
import styles from './MOH_406.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';

const RenderMOH406a: React.FC = () => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>MOH 406a PNC REGISTER</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <div className={styles['table-wrapper']}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader rowSpan={2}>
              Date of Visit <br />
              (dd/mm/yyy)
            </TableHeader>
            <TableHeader rowSpan={1}>PNC Number (New Visit)</TableHeader>
            <TableHeader rowSpan={2}>PNC Number /NUPI (Revisit)</TableHeader>
            <TableHeader rowSpan={2}>Full Name (First,Middle,Last)</TableHeader>
            <TableHeader rowSpan={1}>Date of Birth (dd/mm/yyy)</TableHeader>
            <TableHeader rowSpan={2}>County/SubCounty</TableHeader>
            <TableHeader rowSpan={1}>Village/Estate/LandMark</TableHeader>
            <TableHeader rowSpan={2}>Date of Delivery (dd/mm/yyy)</TableHeader>
            <TableHeader rowSpan={2}>Place of Delivery 1. Facility 2. Home 3. BBA</TableHeader>
            <TableHeader rowSpan={2}>Mode of Delivery 1. SVD 2.CS 3. Breach 4. AVD</TableHeader>
            <TableHeader rowSpan={2}>
              1 = no change, 2 = 10 days to 14 days, 3 = 4 to 6 weeks, 4 = 4 to 6 months
            </TableHeader>
            <TableHeader rowSpan={2}>
              1 = no change, 2 = 10 days to 14 days, 3 = 4 to 6 weeks, 4 = 4 to 6 months
            </TableHeader>
            <TableHeader rowSpan={2}>Temp</TableHeader>
            <TableHeader rowSpan={2}>Pulse</TableHeader>
            <TableHeader rowSpan={2}>Blood Pressure</TableHeader>
            <TableHeader rowSpan={1}>Pallor (Y/N)</TableHeader>
            <TableHeader rowSpan={2}>Breast 1 = normal 2 = cracked niple 3 = engorged 4 = mastistis</TableHeader>
            <TableHeader rowSpan={2}>Uterus 1 = contracted 2 = not contracted 3 = others specify</TableHeader>
            <TableHeader rowSpan={2}>PPH 1 = present 2 = absent </TableHeader>
            <TableHeader rowSpan={2}>
              C-Section site 1 = bleading 2 = noraml 3 = infected 4 = Gapping 5 = N/A
            </TableHeader>
            <TableHeader rowSpan={2}>Lochia 1 = normal 2 = foul smelling 3 = excessive </TableHeader>
            <TableHeader rowSpan={2}>Episiotomy 1 = repaired 2 = gaping 3 = infected 4 = healed 5=N/A</TableHeader>
            <TableHeader rowSpan={2}>Fistula 1 = Vvf 2 = Rvf 3 = VvR 4 = none</TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={1}>NUPI</TableHeader>
            <TableHeader rowSpan={1}> Age in Years </TableHeader>
            <TableHeader rowSpan={1}>Telephone Number</TableHeader>
            <TableHeader rowSpan={1}>1=mild 2=moderate 3=servere</TableHeader>
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
              </TableRow>
              <TableRow>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
                <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader rowSpan={1}>TB Screaning</TableHeader>
            <TableHeader rowSpan={1} colSpan={6}></TableHeader>
            <TableHeader rowSpan={1} colSpan={4}>
              HAART & Infant Prophylaxis and Treatment
            </TableHeader>
            <TableHeader rowSpan={1} colSpan={1}>
              Cervical Cancer Screening (VIA/VIL/PAP Smear/ND)
            </TableHeader>
            <TableHeader rowSpan={3} colSpan={1}>
              Modern Post partum Family Planning (Y/N)
            </TableHeader>
            <TableHeader rowSpan={5}>Other Maternal Complications </TableHeader>
            <TableHeader rowSpan={5}>Haemanatics (Y/N)</TableHeader>
            <TableHeader rowSpan={1} colSpan={3}>
              Referals
            </TableHeader>
            <TableHeader rowSpan={5}>Remarks</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader colSpan={1} rowSpan={4}>
              TB Screening 1:Presumed TB 2:NO signs 3:On TB Treatment 4:Not done
            </TableHeader>
            <TableHeader rowSpan={4}>Tested PNC</TableHeader>
            <TableHeader rowSpan={1}>HIV Test 1</TableHeader>
            <TableHeader rowSpan={1}>HIV Test 2</TableHeader>
            <TableHeader rowSpan={1}>HIV Test 3</TableHeader>
            <TableHeader rowSpan={3} colSpan={2}>
              Results in PNC
            </TableHeader>
            <TableHeader colSpan={2} rowSpan={1}>
              less than or =6weeks
            </TableHeader>
            <TableHeader colSpan={2} rowSpan={1}>
              more than 6weeks
            </TableHeader>
            <TableHeader rowSpan={4}> Results 1=normal, 2=suspected 3=confirmed 4=not done</TableHeader>
            <TableHeader rowSpan={2}>From</TableHeader>
            <TableHeader rowSpan={2}>To</TableHeader>
            <TableHeader rowSpan={4}>Reasons for referal (specify) </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader>Kit Name:</TableHeader>
            <TableHeader>Kit Name:</TableHeader>
            <TableHeader>Kit Name:</TableHeader>
            <TableHeader>infant</TableHeader>
            <TableHeader>mother</TableHeader>
            <TableHeader>infant</TableHeader>
            <TableHeader>mother</TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={1}>Lot No.</TableHeader>
            <TableHeader rowSpan={1}>Lot No.</TableHeader>
            <TableHeader rowSpan={1}>Lot No.</TableHeader>
            <TableHeader rawSpan={6}>NVP + AZT+ CTX or NVP + CTX</TableHeader>
            <TableHeader rawSpan={6}>HAART</TableHeader>
            <TableHeader rawSpan={6}>NVP + AZT+ CTX or NVP + CTX</TableHeader>
            <TableHeader rawSpan={6}>HAART</TableHeader>
            <TableHeader rawSpan={4}>Counseled method received</TableHeader>
            <TableHeader rawSpan={4}> 1= community unit, 2= another health facility 3=not applicable</TableHeader>
            <TableHeader rawSpan={4}>1= community unit, 2= another health facility 3=not applicable</TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rawSpan={2}>Expiary No.</TableHeader>
            <TableHeader rawSpan={2}>Expiary No.</TableHeader>
            <TableHeader rawSpan={2}>Expiary No.</TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              less than or =6weeks
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              more than 6weeks
            </TableHeader>
          </TableRow>
          <TableRow>
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
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  </TableContainer>
);

export default RenderMOH406a;
