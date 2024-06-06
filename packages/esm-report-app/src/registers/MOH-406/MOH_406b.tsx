import React from 'react';
import styles from './MOH_406.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';

const RenderMOH406b: React.FC = () => (
  <TableContainer className={styles['table-container']} title="MOH 362 HTS LAB, REFERRAL AND LINKAGE REGISTER">
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>MOH 406 PNC REGISTER</p>
      </div>
      {/*   <div className={styles['center']}>
        <h2>MOH 362 HTS LAB REGISTER</h2>
      </div> */}
      {/*  <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div> */}
    </div>

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
          <TableHeader rawSpan={4}>NVP + AZT+ CTX or NVP + CTX</TableHeader>
          <TableHeader rawSpan={4}>HAART</TableHeader>
          <TableHeader rawSpan={4}>NVP + AZT+ CTX or NVP + CTX</TableHeader>
          <TableHeader rawSpan={4}>HAART</TableHeader>
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
        {Array.from({ length: 15 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
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
  </TableContainer>
);
const RenderMOH362b: React.FC = () => (
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
          <TableHeader rowSpan={1}>National Identification Number</TableHeader>
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
        {Array.from({ length: 15 }, (_, i) => (
          <React.Fragment key={i}>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              {/* a */}
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell> {/* b */}
              <TableCell rowSpan={2}></TableCell>
              {/* c */}
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              {/* d */}
              <TableCell rowSpan={2}></TableCell>
              {/* e */}
              <TableCell rowSpan={2}></TableCell>
              {/* f */}
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              {/* g */}
              <TableCell rowSpan={2}></TableCell>
              {/* h */}
              <TableCell rowSpan={2}></TableCell>
              {/* i */}
              <TableCell rowSpan={2}></TableCell>
              {/* j */}
            </TableRow>
            <TableRow>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
              <TableCell className={styles['dotted-border']} rowSpan={1}></TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default RenderMOH406b;
