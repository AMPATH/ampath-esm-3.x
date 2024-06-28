import React from 'react';
import styles from './Defaulter_tracing_register.scss';
import { TableContainer, TableHead, TableRow, TableHeader, Table, TableBody, TableCell } from '@carbon/react';

const DefaulterTracingRegister: React.FC<{ reportData: any }> = ({ reportData }) => {
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
          {reportData && reportData.length > 0 ? (
            reportData.map((item, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell rowSpan={2} colSpan={1}>
                    {i}
                  </TableCell>
                  <TableCell rowSpan={1} colSpan={1}>
                    {item.client_id_number}
                  </TableCell>
                  <TableCell rowSpan={2} colSpan={3}>
                    {item.full_names}
                  </TableCell>
                  <TableCell rowSpan={2} colSpan={1}>
                    {item.village_estate_landmark}
                  </TableCell>
                  <TableCell rowSpan={2} colSpan={1}>
                    {item.telephone_no}
                  </TableCell>
                  <TableCell rowSpan={2} colSpan={2}>
                    {item.date_of_missed_appointment}
                  </TableCell>
                  <TableCell rowSpan={2} colSpan={1.5}>
                    {item.defaulter_tracing_outcomes}
                  </TableCell>
                  <TableCell rowSpan={2} colSpan={1.5}>
                    {item.date_of_outcome}
                  </TableCell>
                  <TableCell rowSpan={2} colSpan={2}>
                    {item.remarks}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={1} colSpan={1}>
                    {item.nupi}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9}>No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DefaulterTracingRegister;
