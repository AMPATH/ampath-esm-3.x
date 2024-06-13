import React from 'react';
import { TableContainer, Table, TableHead, TableHeader, TableCell, TableRow, TableBody } from '@carbon/react';
import styles from './Care_and_Treatment.scss';

const CareAndTreatment: React.FC = () => {
  return (
    <TableContainer>
      <div className={styles['title']}>
        <h5>Ministry Of Health</h5>
        <h1>HIV Care Treatment Daily Activity Register MOH 366</h1>
        <h5>Ver. July 2023</h5>
      </div>
      <Table className={styles['table']}>
        <TableHead>
          <TableRow>
            <TableHeader rowSpan={4}>No</TableHeader>
            <TableHeader rowSpan={4}>Date</TableHeader>
            <TableHeader>
              National Identification <br /> Number
            </TableHeader>
            <TableHeader rowSpan={5}>Client CCC Number</TableHeader>
            <TableHeader rowSpan={5}>Age</TableHeader>
            <TableHeader colSpan={14}>Starting ART</TableHeader>
            <TableHeader colSpan={4}>
              TB in HIV Care <br />
              (Newly Initiated on ART)
            </TableHeader>
            <TableHeader colSpan={14}>Currently on ART (Starting and Continuing ART)</TableHeader>
            <TableHeader colSpan={2}>DSD</TableHeader>
            <TableHeader rowSpan={4}>Remarks</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={4}>
              Client Unique Number <br /> (NUPI)
            </TableHeader>
            <TableHeader colSpan={14}>Tick as appropriate for age</TableHeader>
            <TableHeader colSpan={2}>Screened for TB</TableHeader>
            <TableHeader colSpan={2}>Started TPT</TableHeader>
            <TableHeader colSpan={14}>
              Indicate No. of months of till next appointment or <br /> "R"for patients making unscheduled visits
            </TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Type</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              &lt;1 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              &lt;1 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              1-4 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              1-4 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              5-9 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              5-9 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              10-14 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              10-14 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              15-19 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              15-19 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              20-24 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              20-24 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              25+ yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              25+ yrs (F)
            </TableHeader>
            <TableHeader colSpan={4}>Indicate Y/N/NA</TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              &lt;1 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              &lt;1 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              1-4 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              1-4 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              5-9 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              5-9 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              10-14 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              10-14 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              15-19 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              15-19 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              20-24 yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              20-24 yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              25+ yrs (M)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              25+ yrs (F)
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              E=Established <br /> NE=Not Established
            </TableHeader>

            <TableHeader rowSpan={4}>
              C <br />
              FT <br />
              HFAG <br />
              PFAG <br />
              HCAG <br />
              PCAG <br />
              CP <br />
              CADP <br />
              IACD
            </TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              &lt;15 yrs
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              15+ yrs
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              &lt;15 yrs
            </TableHeader>
            <TableHeader className={styles['vertical-text']} rowSpan={4}>
              15+ yrs
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>(a)</TableCell>
            <TableCell>(b)</TableCell>
            <TableCell>(c)</TableCell>
            <TableCell>(d)</TableCell>
            <TableCell>(e)</TableCell>
            <TableCell>(f)</TableCell>
            <TableCell>(g)</TableCell>
            <TableCell>(h)</TableCell>
            <TableCell>(i)</TableCell>
            <TableCell>(j)</TableCell>
            <TableCell>(k)</TableCell>
            <TableCell>(l)</TableCell>
            <TableCell>(m)</TableCell>
            <TableCell>(n)</TableCell>
            <TableCell>(o)</TableCell>
            <TableCell>(p)</TableCell>
            <TableCell>(q)</TableCell>
            <TableCell>(r)</TableCell>
            <TableCell>(s)</TableCell>
            <TableCell>(t)</TableCell>
            <TableCell>(u)</TableCell>
            <TableCell>(v)</TableCell>
            <TableCell>(w)</TableCell>
            <TableCell>(x)</TableCell>
            <TableCell>(y)</TableCell>
            <TableCell>(z)</TableCell>
            <TableCell>(aa)</TableCell>
            <TableCell>(ab)</TableCell>
            <TableCell>(ac)</TableCell>
            <TableCell>(ad)</TableCell>
            <TableCell>(ae)</TableCell>
            <TableCell>(af)</TableCell>
            <TableCell>(ag)</TableCell>
            <TableCell>(ah)</TableCell>
            <TableCell>(ai)</TableCell>
            <TableCell>(aj)</TableCell>
            <TableCell>(ak)</TableCell>
            <TableCell>(al)</TableCell>
            <TableCell>(am)</TableCell>
            <TableCell>(an)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}></TableCell>
            <TableCell rowSpan={2}></TableCell>
            <TableCell></TableCell>
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
            <TableCell rowSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2}></TableCell>
            <TableCell rowSpan={2}></TableCell>
            <TableCell></TableCell>
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
            <TableCell rowSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2}></TableCell>
            <TableCell rowSpan={2}></TableCell>
            <TableCell></TableCell>
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
            <TableCell rowSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2}></TableCell>
            <TableCell rowSpan={2}></TableCell>
            <TableCell></TableCell>
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
            <TableCell rowSpan={2}></TableCell>
          </TableRow>
          <br />
          <TableRow>
            <TableCell rowSpan={2}></TableCell>
            <TableCell rowSpan={2}></TableCell>
            <TableCell></TableCell>
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
            <TableCell rowSpan={2}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CareAndTreatment;
