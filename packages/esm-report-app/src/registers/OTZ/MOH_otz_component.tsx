import React from 'react';
import styles from './MOH_otz.scss';
import { TableContainer } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableHead } from '@carbon/react';
import { TableRow } from '@carbon/react';
import { TableHeader } from '@carbon/react';
import { TableCell } from '@carbon/react';
import { TableBody } from '@carbon/react';

const RenderOtzregister: React.FC = () => {
  return (
    <TableContainer className={styles['table-container']}>
      <div className={styles['header']}>
        <div className={styles['left']}>
          <p>Ministry Of Health</p>
        </div>
        <div className={styles['center']}>
          <h1>OTZ REGISTER</h1>
        </div>
      </div>
      <div className={styles['table-wrapper']}>
        <Table className={styles['table']}>
          <TableHead>
            <TableRow>
              <TableHeader rowSpan={4} colSpan={1}>
                Serial Counter
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={6}>
                Registration Details
              </TableHeader>
              <TableHeader colSpan={3} rowSpan={1}>
                Status of Enrollment into Otz
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={1}></TableHeader>
              <TableHeader colSpan={6} rowSpan={2}>
                Art Regimen Switch Post Enrolment into OTZ
              </TableHeader>
              <TableHeader colSpan={18} rowSpan={2}>
                Viral Load Post Enrolment into OTZ
              </TableHeader>

              <TableHeader colSpan={1} rowSpan={2}>
                Transistion/Attrition
              </TableHeader>
              <TableHeader colSpan={1} rowSpan={3}>
                OTZ modules Completion Tracker
              </TableHeader>
              <TableHeader rowSpan={5} colSpan={1}>
                Remarks
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader rowSpan={3}>
                Date of Enrollment to OTZ <br />
                (dd/mm/yyy)
              </TableHeader>
              <TableHeader rowSpan={2}>
                Date of birth <br />
                (dd/mm/yyy)
              </TableHeader>
              <TableHeader rowSpan={3}>
                Unique PatientNumber <br />
                (CCC Number)
              </TableHeader>
              <TableHeader rowSpan={2}>Art Start Date</TableHeader>
              <TableHeader rowSpan={1}>Patients Name</TableHeader>
              <TableHeader rowspan={3}>
                sex <br /> (M/F)
              </TableHeader>
              <TableHeader rowSpan={1} colSpan={2}>
                Most Current Viral Load
              </TableHeader>
              <TableHeader rowspan={1}>Most Current Art Regimen </TableHeader>
              <TableHeader rowSpan={3}>
                Current Regimen Line <br />
                (1st/2nd/3rd)
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader rowSpan={1}>
                First Name, <br /> MiddleName
              </TableHeader>
              <TableHeader rowSpan={1}>
                VL Results <br /> (copies/ml)
              </TableHeader>
              <TableHeader rowSpan={2}>
                VL Done within 6 months <br /> (yes/no)
              </TableHeader>
              <TableHeader rowSpan={1}>ART Regimen</TableHeader>
              <TableHeader rowSpan={1}>1st Regimen Switch</TableHeader>
              <TableHeader rowSpan={1}>Date</TableHeader>
              <TableHeader rowSpan={1}>Reasons</TableHeader>
              <TableHeader rowSpan={1}>3rd Regimen Switch</TableHeader>
              <TableHeader rowSpan={1}>Date</TableHeader>
              <TableHeader rowSpan={1}>Reasons</TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                Viral Load Results <br /> (copis/ml)
              </TableHeader>
              <TableHeader rowSpan={1}>
                OutComes <br />
                (TransferOut, LTFU, Dead , Opt Out, Transistion to adult care)
              </TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader rowSpan={1}>
                Age at enrollment <br /> (in compleated years)
              </TableHeader>
              <TableHeader rowSpan={1}>Original ART Regimen</TableHeader>
              <TableHeader rowSpan={1}>
                Last <br /> (Surname)
              </TableHeader>
              <TableHeader rowSpan={1}>Date Done</TableHeader>
              <TableHeader rowSpan={1}>Date Started on Current Regimen</TableHeader>
              <TableHeader rowSpan={1}>2nd Regimen Switch</TableHeader>
              <TableHeader rowSpan={1}>Date</TableHeader>
              <TableHeader rowSpan={1}>Reasons</TableHeader>
              <TableHeader rowSpan={1}>4th Regimen Switch</TableHeader>
              <TableHeader rowSpan={1}>Date</TableHeader>
              <TableHeader rowSpan={1}>Reasons</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date of VL</TableHeader>
              <TableHeader rowSpan={1}>Date</TableHeader>
              <TableHeader rowSpan={1}>Tick for each Session compleated</TableHeader>
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
              <TableCell rowSpan={1} colSpan={6}>
                l
              </TableCell>
              <TableCell rowSpan={1} colSpan={18}>
                m
              </TableCell>
              <TableCell rowSpan={1} colSpan={1}>
                n
              </TableCell>
              <TableCell rowSpan={1} colSpan={1}>
                o
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={2}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
              <TableCell rowSpan={1}></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default RenderOtzregister;
