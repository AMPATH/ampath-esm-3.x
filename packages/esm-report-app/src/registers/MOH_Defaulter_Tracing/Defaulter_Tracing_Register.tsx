import React from 'react';
import styles from './Defaulter_tracing_register.scss';
import { TableContainer, TableHead, TableRow, TableHeader, Table, TableBody, TableCell } from '@carbon/react';

const DefaulterTracingRegister: React.FC = () => {
  return (
    <TableContainer>
      <Table className={styles['table']}>
        <TableHead>
          <TableRow>
            <TableHeader rowSpan={2} colSpan={13}>
              <div className={styles['title']}> Defaulter Tracing Register</div>
              <br />
              <div className={styles['title']}>
                Enter all current clients that did not come for their scheduled appointment
              </div>
            </TableHeader>
          </TableRow>
          <br />
          <TableRow>
            <TableHeader colSpan={7}>
              <div className={styles['title']}>Section A</div>
            </TableHeader>
            <TableHeader colSpan={2}></TableHeader>
            <TableHeader colSpan={2}>
              <div className={styles['title']}>Section B</div>
            </TableHeader>
            <TableHeader colSpan={2}></TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader colSpan={7}>
              <div className={styles['title']}>Client Tracking Information</div>
            </TableHeader>
            <TableHeader colSpan={2}></TableHeader>
            <TableHeader colSpan={2}>
              <div className={styles['title']}>Defaulter Tracing Outcomes</div>
            </TableHeader>
            <TableHeader colSpan={2}></TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader colSpan={1}>a</TableHeader>
            <TableHeader colSpan={1}>b</TableHeader>
            <TableHeader colSpan={3}>c</TableHeader>
            <TableHeader colSpan={1}>d</TableHeader>
            <TableHeader colSpan={1}>e</TableHeader>

            <TableHeader colSpan={2}>f</TableHeader>
            <TableHeader colSpan={1.5}>g</TableHeader>
            <TableHeader colSpan={1.5}>h</TableHeader>
            <TableHeader colSpan={2}>i</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={4} colSpan={1}>
              S/NO.
            </TableHeader>
            <TableHeader colSpan={1}>
              Client <br /> Identification <br /> Number/
              {/* <br /> Unique Patient <br /> Number (NUPI) */}
            </TableHeader>
            <TableHeader rowSpan={4} colSpan={3}>
              Client Name <br /> (First, Middle, Last)
            </TableHeader>
            <TableHeader rowSpan={4} colSpan={1}>
              Village/Estate/ <br />
              Landmark
            </TableHeader>
            <TableHeader rowSpan={4} colSpan={1}>
              Telephone number
            </TableHeader>

            <TableHeader rowSpan={4} colSpan={2}>
              Date of missed <br /> appointment
            </TableHeader>
            <TableHeader rowSpan={4} colSpan={1.5}>
              Return to care/ <br /> Dead/ <br /> Transfered/ <br /> Stopped Treatment/ <br /> On follow up
            </TableHeader>
            <TableHeader rowSpan={4} colSpan={1.5}>
              Date of outcome <br /> (dd/mm/yy)
            </TableHeader>
            <TableHeader rowSpan={4} colSpan={2}>
              Remarks
            </TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={1}>
              Unique Patient <br /> Number (NUPI)
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              1
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              2
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              3
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              4
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              5
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              6
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              7
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              8
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              9
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              10
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              11
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              12
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              13
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              14
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>

            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2} colSpan={1}>
              15
            </TableCell>
            <TableCell colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={3}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={1}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={1.5}></TableCell>
            <TableCell rowSpan={2} colSpan={2}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DefaulterTracingRegister;
