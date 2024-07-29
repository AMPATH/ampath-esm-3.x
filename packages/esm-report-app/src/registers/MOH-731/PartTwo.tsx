import React from 'react';
import { TableRow, TableCell } from '@carbon/react';
import styles from './MOH_731.scss';

const PartTwo: React.FC = () => {
  return (
    <div className={styles['div-two']}>
      <div className={styles['two-one']}>
        <TableRow>
          <TableCell className={styles['bold']} colSpan={12}>
            2.1 Maternal HIV Testing
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Known Positive at 1st ANC</TableCell>
          <TableCell>
            HV02-01 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Initial</TableCell>
          <TableCell>Retest</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tested at ANC</TableCell>
          <TableCell>
            HV02-02 <div className={styles['small-cont']} />
          </TableCell>
          <TableCell>
            HV02-03 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tested at L&D</TableCell>
          <TableCell>
            HV02-04 <div className={styles['small-cont']} />
          </TableCell>
          <TableCell>
            HV02-05 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tested at PNC_&lt;=6 weeks</TableCell>
          <TableCell>
            HV02-06 <div className={styles['small-cont']} />
          </TableCell>
          <TableCell>
            HV02-07 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tested at PNC_&gt;6 weeks</TableCell>
          <TableCell>
            HV02-08 <div className={styles['small-cont']} />
          </TableCell>
          <TableCell>
            HV02-09 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
      </div>
      <div className={styles['two-two']}>
        <TableRow>
          <TableCell className={styles['bold']} colSpan={12}>
            2.2 HIV Positive Results
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Positive Results_ANC</TableCell>
          <TableCell>
            HV02-10 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Positive Results_L&D</TableCell>
          <TableCell>
            HV02-11 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Positive Results_PNC &lt;=6 weeks</TableCell>
          <TableCell>
            HV02-12 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Positive Results_PNC &gt;=6 weeks</TableCell>
          <TableCell>
            HV02-13 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
      </div>
      <div className={styles['two-three']}>
        <TableRow>
          <TableCell className={styles['bold']} colSpan={12}>
            2.3 Maternal HAART
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>On HAART at 1st ANC</TableCell>
          <TableCell>
            HV02-14 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Start HAART_ANC</TableCell>
          <TableCell>
            HV02-15 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Start HAART_L&D</TableCell>
          <TableCell>
            HV02-16 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Start HAART_PNC &lt;= 6 weeks</TableCell>
          <TableCell>
            HV02-17 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Start HAART_PNC&gt;6 weeks</TableCell>
          <TableCell>
            HV02-18 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
      </div>
      <div className={styles['two-four']}>
        <TableRow>
          <TableCell className={styles['bold']} colSpan={12}>
            2.4 HBV Screening at ANC
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Screened_HBV_ANC</TableCell>
          <TableCell>
            HV02-19 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>HBV Screened_Positive</TableCell>
          <TableCell>
            HV02-20 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
      </div>
      <div className={styles['two-five']}>
        <TableRow>
          <TableCell className={styles['bold']} colSpan={12}>
            2.5 Adolescents girls & Young Women (10-24 Yrs) testing & results
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>10-19yrs</TableCell>
          <TableCell>20-24yrs</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1st ANC KP</TableCell>
          <TableCell>
            HV02-21 <div className={styles['small-cont']} />
          </TableCell>
          <TableCell>
            HV02-22 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>New HIV Positive</TableCell>
          <TableCell>
            HV02-23 <div className={styles['small-cont']} />
          </TableCell>
          <TableCell>
            HV02-24 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>On HAART 1st ANC KP</TableCell>
          <TableCell>
            HV02-25 <div className={styles['small-cont']} />
          </TableCell>
          <TableCell>
            HV02-26 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Started HAART New</TableCell>
          <TableCell>
            HV02-27 <div className={styles['small-cont']} />
          </TableCell>
          <TableCell>
            HV02-28 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
      </div>
      <div className={styles['two-six']}>
        <TableRow>
          <TableCell className={styles['bold']}>2.6 Infant Prophylaxis</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Infant ARV Prophylaxis_ANC</TableCell>
          <TableCell>
            HV02-29 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Infant ARV Prophylaxis_L&D</TableCell>
          <TableCell>
            HV02-30 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Infant ARV Prophylaxis_PNC</TableCell>
          <TableCell>
            HV02-31 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
      </div>
      <div className={styles['two-seven']}>
        <TableRow>
          <TableCell className={styles['bold']} colSpan={12}>
            <h6>2.7 Infant Feeding</h6>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles['bold']}>Below 6 months</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Exclusive Breastfeeding (EBF)</TableCell>
          <TableCell>
            HV02-32 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles['bold']}>6 to 24 months</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Breastfeeding (BF)</TableCell>
          <TableCell>
            HV02-33 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Not Breastfeeding (NBF)</TableCell>
          <TableCell>
            HV02-34 <div className={styles['small-cont']} />
          </TableCell>
        </TableRow>
      </div>
    </div>
  );
};

export default PartTwo;
