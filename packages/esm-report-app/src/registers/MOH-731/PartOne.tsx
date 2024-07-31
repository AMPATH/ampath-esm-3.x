import React from 'react';
import { TableRow, TableCell } from '@carbon/react';
import styles from './MOH_731.scss';

const PartOne: React.FC<{ reportData: any }> = ({ reportData }) => {
  return (
    <div className={styles['div-one']}>
      {reportData &&
        reportData.map((row, index) => (
          <div key={index} className={styles['one-one']}>
            <TableRow>
              <TableCell className={styles['bold']}>1.1 HIV Tests </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell> Male</TableCell>
              <TableCell>Female (including PMTCT)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tests</TableCell>
              <TableCell>
                HV01-01 <div className={styles['small-cont']}>{row.tests_male}</div>
              </TableCell>
              <TableCell>
                HV01-02 <div className={styles['small-cont']}>{row.tests_female}</div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Tests_Facility</TableCell>
              <TableCell>
                HV01-03 <div className={styles['small-cont']}>{row.tests_facility}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tests_Community</TableCell>
              <TableCell>
                HV01-04 <div className={styles['small-cont']}>{row.tests_community}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tested KVP</TableCell>
              <TableCell>
                HV01-05 <div className={styles['small-cont']}>{row.tested_kvp}</div>
              </TableCell>
            </TableRow>
          </div>
        ))}

      {reportData &&
        reportData.map((row, index) => (
          <div key={index} className={styles['one-two']}>
            <TableRow>
              <TableCell className={styles['bold']} colSpan={12}>
                1.2 HIV Positive Results
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Female (including PMTCT)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Positive_2-9</TableCell>
              <TableCell>
                HV01-06
                <div className={styles['small-cont']}>{row.positive_male_2_9}</div>
              </TableCell>
              <TableCell>
                HV01-07
                <div className={styles['small-cont']}>{row.positive_female_2_9}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Positive_10-14</TableCell>
              <TableCell>
                HV01-08 <div className={styles['small-cont']}>{row.positive_male_10_14}</div>
              </TableCell>
              <TableCell>
                HV01-09 <div className={styles['small-cont']}>{row.positive_female_10_14}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Positive_15-19</TableCell>
              <TableCell>
                HV01-10 <div className={styles['small-cont']}>{row.positive_male_15_19}</div>
              </TableCell>
              <TableCell>
                HV01-11 <div className={styles['small-cont']}>{row.positive_female_15_19}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Positive_20-24</TableCell>
              <TableCell>
                HV01-12 <div className={styles['small-cont']}>{row.positive_male_20_24}</div>
              </TableCell>
              <TableCell>
                HV01-13 <div className={styles['small-cont']}>{row.positive_female_20_24}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Positive_25+</TableCell>
              <TableCell>
                HV01-14 <div className={styles['small-cont']}>{row.positive_female_25_plus}</div>
              </TableCell>
              <TableCell>
                HV01-15 <div className={styles['small-cont']}>{row.positive_male_25_plus}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Positive_KVP</TableCell>
              <TableCell>
                HV01-16 <div className={styles['small-cont']}>{row.positive_female_25_plus}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discordant</TableCell>
              <TableCell>
                HV01-17 <div className={styles['small-cont']}>{row.positive_female_25_plus}</div>
              </TableCell>
              <TableCell>
                HV01-18 <div className={styles['small-cont']}>{row.positive_female_25_plus}</div>
              </TableCell>
            </TableRow>
          </div>
        ))}

      {reportData &&
        reportData.map((row) => (
          <div className={styles['one-three']}>
            <TableRow>
              <TableCell className={styles['bold']} colSpan={12}>
                1.3 No. initiated on PrEP (NEW)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Female</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>General popn</TableCell>
              <TableCell>
                HV01-19
                <div className={styles['small-cont']}>{row.prep_population_male}</div>
              </TableCell>
              <TableCell>
                HV01-20 <div className={styles['small-cont']}>{row.prep_population_female}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>MSM/MSW</TableCell>
              <TableCell>
                HV01-21 <div className={styles['small-cont']}>{row.msm_msw_prep}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>FSW</TableCell>
              <TableCell></TableCell>
              <TableCell>
                HV01-22 <div className={styles['small-cont']}>{row.fsw_prep}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PWID/PWUD</TableCell>
              <TableCell>
                HV01-23 <div className={styles['small-cont']}>{row.pwid_pwud_prep_male}</div>
              </TableCell>
              <TableCell>
                HV01-24 <div className={styles['small-cont']}>{row.pwid_pwud_prep_female}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discordant Couple</TableCell>
              <TableCell>
                HV01-25 <div className={styles['small-cont']}>{row.discordant_male}</div>
              </TableCell>
              <TableCell>
                HV01-26 <div className={styles['small-cont']}>{row.discordant_female}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vulnerable Pop</TableCell>
              <TableCell>
                HV01-27 <div className={styles['small-cont']}>{row.vulnerable_population_prep_male_total}</div>
              </TableCell>
              <TableCell>
                HV01-28 <div className={styles['small-cont']}>{row.vulnerable_population_prep_female_total}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AYP (10-24 Yrs)</TableCell>
              <TableCell>
                HV01-29 <div className={styles['small-cont']}>{row.ayp_prep_male}</div>
              </TableCell>
              <TableCell>
                HV01-30 <div className={styles['small-cont']}>{row.ayp_prep_female}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pregnant and breastfeeding women</TableCell>
              <TableCell></TableCell>
              <TableCell>
                HV01-31 <div className={styles['small-cont']}>{row.pregnant_breastfeeding_prep_women}</div>
              </TableCell>
            </TableRow>
          </div>
        ))}

      {reportData &&
        reportData.map((row) => (
          <div className={styles['one-four']}>
            <TableRow>
              <TableCell className={styles['bold']} colSpan={12}>
                1.4 No. on PrEP Diagnosed with STI
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Female</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>General popn</TableCell>
              <TableCell>
                HV01-32
                <div className={styles['small-cont']}>{row.prep_sti_population_male}</div>
              </TableCell>
              <TableCell>
                HV01-33 <div className={styles['small-cont']}>{row.prep_sti_population_female}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>MSM/MSW</TableCell>
              <TableCell>
                HV01-34 <div className={styles['small-cont']}>{row.msm_msw_prep_sti}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>FSW</TableCell>
              <TableCell></TableCell>
              <TableCell>
                HV01-35 <div className={styles['small-cont']}>{row.fsw_prep_sti}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PWID/PWUD</TableCell>
              <TableCell>
                HV01-36 <div className={styles['small-cont']}>{row.pwid_pwud_prep_sti_male}</div>
              </TableCell>
              <TableCell>
                HV01-37 <div className={styles['small-cont']}>{row.pwid_pwud_prep_sti_female}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Discordant Couple</TableCell>
              <TableCell>
                HV01-38 <div className={styles['small-cont']}>{row.discordant_couple_prep_sti_male}</div>
              </TableCell>
              <TableCell>
                HV01-39 <div className={styles['small-cont']}>{row.discordant_couple_prep_sti_female}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vulnerable Pop</TableCell>
              <TableCell>
                HV01-40 <div className={styles['small-cont']}>{row.vulnerable_population_prep_sti_male}</div>
              </TableCell>
              <TableCell>
                HV01-41 <div className={styles['small-cont']}>{row.vulnerable_population_prep_sti_female}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AYP (10-24 Yrs)</TableCell>
              <TableCell>
                HV01-42 <div className={styles['small-cont']}>{row.ayp_prep_sti_male}</div>
              </TableCell>
              <TableCell>
                HV01-43 <div className={styles['small-cont']}>{row.ayp_prep_sti_male}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pregnant and breastfeeding women</TableCell>
              <TableCell></TableCell>
              <TableCell>
                HV01-44 <div className={styles['small-cont']}>{row.pregnant_and_breastfeeding_women_prep_sti}</div>
              </TableCell>
            </TableRow>
          </div>
        ))}

      {reportData &&
        reportData.map((row) => (
          <div className={styles['one-five']}>
            <TableRow>
              <TableCell className={styles['bold']} colSpan={12}>
                1.5 No. Seroconverted while on PrEP
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Male</TableCell>
              <TableCell>Female</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>HIV Positive</TableCell>
              <TableCell>
                HV01-45 <div className={styles['small-cont']}>{row.positive_seroconverted_male}</div>
              </TableCell>
              <TableCell>
                HV01-46 <div className={styles['small-cont']}>{row.positive_seroconverted_female}</div>
              </TableCell>
            </TableRow>
          </div>
        ))}
    </div>
  );
};

export default PartOne;
