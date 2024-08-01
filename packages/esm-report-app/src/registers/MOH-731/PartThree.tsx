import React from 'react';
import { TableRow, TableCell, TableHeader } from '@carbon/react';
import styles from './MOH_731.scss';

const PartThree: React.FC<{ reportData: any }> = ({ reportData }) => {
  return (
    <div className={styles['part-three']}>
      {reportData &&
        reportData.map((row, index) => (
          <>
            <div key={index} className={styles['column1']}>
              <TableRow>
                <TableCell className={styles['bold']}>3.1 Starting ART</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_&lt;1</TableCell>
                <TableCell>
                  (M)HV03-01 <div className={styles['small-cont']}>{row.start_art_less_1_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-02 <div className={styles['small-cont']}>{row.start_art_less_1_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_1-4</TableCell>
                <TableCell>
                  (M)HV03-03 <div className={styles['small-cont']}>{row.start_art_1_4_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-04 <div className={styles['small-cont']}>{row.start_art_1_4_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_5-9</TableCell>
                <TableCell>
                  (M)HV03-05 <div className={styles['small-cont']}>{row.start_art_5_9_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-06 <div className={styles['small-cont']}>{row.start_art_5_9_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_10-14</TableCell>
                <TableCell>
                  (M)HV03-07 <div className={styles['small-cont']}>{row.start_art_10_14_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-08 <div className={styles['small-cont']}>{row.start_art_10_14_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_15-19</TableCell>
                <TableCell>
                  (M)HV03-09 <div className={styles['small-cont']}>{row.start_art_15_19_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-010 <div className={styles['small-cont']}>{row.start_art_15_19_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_20-24</TableCell>
                <TableCell>
                  (M)HV03-011 <div className={styles['small-cont']}>{row.start_art_20_24_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-012 <div className={styles['small-cont']}>{row.start_art_20_24_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_25+</TableCell>
                <TableCell>
                  (M)HV03-013 <div className={styles['small-cont']}>{row.start_art_25_plus_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-014 <div className={styles['small-cont']}>{row.start_art_25_plus_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles['bold']}>3.2 Currently on ART ([All])</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_&lt;1</TableCell>
                <TableCell>
                  (M)HV03-015 <div className={styles['small-cont']}>{row.on_art_less_1_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-016 <div className={styles['small-cont']}>{row.on_art_less_1_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_1-4</TableCell>
                <TableCell>
                  (M)HV03-017 <div className={styles['small-cont']}>{row.on_art_1_4_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-018 <div className={styles['small-cont']}>{row.on_art_1_4_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_5-9</TableCell>
                <TableCell>
                  (M)HV03-019 <div className={styles['small-cont']}>{row.on_art_5_9_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-020 <div className={styles['small-cont']}>{row.on_art_5_9_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_10-14</TableCell>
                <TableCell>
                  (M)HV03-021 <div className={styles['small-cont']}>{row.on_art_10_14_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-022 <div className={styles['small-cont']}>{row.on_art_10_14_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_15-19</TableCell>
                <TableCell>
                  (M)HV03-023 <div className={styles['small-cont']}>{row.on_art_15_19_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-024 <div className={styles['small-cont']}>{row.on_art_15_19_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_20-24</TableCell>
                <TableCell>
                  (M)HV03-025 <div className={styles['small-cont']}>{row.on_art_20_24_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-026 <div className={styles['small-cont']}>{row.on_art_20_24_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start ART_25+</TableCell>
                <TableCell>
                  (M)HV03-027 <div className={styles['small-cont']}>{row.on_art_25_plus_male}</div>
                </TableCell>
                <TableCell>
                  (F)HV03-028 <div className={styles['small-cont']}>{row.on_art_25_plus_female}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles['bold']}>3.3 TB Screening</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Screen for TB_&lt;15</TableCell>
                <TableCell>
                  HV03-029 <div className={styles['small-cont']}>{row.screened_for_tb_less_15}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Screen for TB_15+</TableCell>
                <TableCell>
                  HV03-030 <div className={styles['small-cont']}>{row.screened_for_tb_15_plus}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles['bold']} colSpan={12}>
                  <h6>3.4 Starting TRT</h6>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start TPT_&lt;15</TableCell>
                <TableCell>
                  HV03-031 <div className={styles['small-cont']}>{row.start_tpt_less_15}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start TPT_15+</TableCell>
                <TableCell>
                  HV03-032 <div className={styles['small-cont']}>{row.start_tpt_15_plus}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles['bold']}>3.5 Differentiated Service Delivery</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Established</TableCell>
                <TableCell>
                  HV03-033 <div className={styles['small-cont']}>{row.established}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Not Established</TableCell>
                <TableCell>
                  HV03-034 <div className={styles['small-cont']}>{row.not_established}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Community</TableCell>
                <TableCell>
                  HV03-035 <div className={styles['small-cont']}>{row.community}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Facility</TableCell>
                <TableCell>
                  HV03-036 <div className={styles['small-cont']}>{row.facility}</div>
                </TableCell>
              </TableRow>
            </div>

            <div className={styles['column2']}>
              <TableRow>
                <TableCell className={styles['bold']}>3.6 Nutrition and HIV</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Number SAM +</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>0-5Months</TableCell>
                <TableCell>
                  HV03-037 <div className={styles['small-cont']}>{row.number_sam_positive_0_5_months}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6-59Months</TableCell>
                <TableCell>
                  HV03-038 <div className={styles['small-cont']}>{row.number_sam_positive_6_59_months}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5-9Years</TableCell>
                <TableCell>
                  HV03-039 <div className={styles['small-cont']}>{row.number_sam_positive_5_9_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10-17Years</TableCell>
                <TableCell>
                  HV03-040 <div className={styles['small-cont']}>{row.number_sam_positive_10_17_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>18+ Years</TableCell>
                <TableCell>
                  HV03-041 <div className={styles['small-cont']}>{row.number_sam_positive_18_plus_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pregnant & Lactating</TableCell>
                <TableCell>
                  HV03-042 <div className={styles['small-cont']}>{row.number_sam_positive_pregnat_and_lactating}</div>
                </TableCell>
              </TableRow>
              <TableRow></TableRow>
              <TableRow>
                <TableCell>Number MAM +</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>0-5Months</TableCell>
                <TableCell>
                  HV03-043 <div className={styles['small-cont']}>{row.number_mam_positive_0_5_months}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6-59Months</TableCell>
                <TableCell>
                  HV03-044 <div className={styles['small-cont']}>{row.number_mam_positive_6_59_months}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5-9Years</TableCell>
                <TableCell>
                  HV03-045 <div className={styles['small-cont']}>{row.number_mam_positive_5_9_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10-17Years</TableCell>
                <TableCell>
                  HV03-046 <div className={styles['small-cont']}>{row.number_mam_positive_10_17_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>18+ Years</TableCell>
                <TableCell>
                  HV03-047 <div className={styles['small-cont']}>{row.number_mam_positive_18_plus_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pregnant & Lactating</TableCell>
                <TableCell>
                  HV03-048 <div className={styles['small-cont']}>{row.number_mam_positive_pregnat_and_lactating}</div>
                </TableCell>
              </TableRow>
              <TableRow></TableRow>
              <TableRow>
                <TableCell>Number SAM +receiving theraupetic foods</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>0-5Months</TableCell>
                <TableCell>
                  HV03-049 <div className={styles['small-cont']}>{row.number_sam_positive_therapeutic_0_5_months}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6-59Months</TableCell>
                <TableCell>
                  HV03-050 <div className={styles['small-cont']}>{row.number_sam_positive_therapeutic_6_59_months}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5-9Years</TableCell>
                <TableCell>
                  HV03-051 <div className={styles['small-cont']}>{row.number_sam_positive_therapeutic_5_9_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10-17Years</TableCell>
                <TableCell>
                  HV03-052 <div className={styles['small-cont']}>{row.number_sam_positive_therapeutic_10_17_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>18+ Years</TableCell>
                <TableCell>
                  HV03-053{' '}
                  <div className={styles['small-cont']}>{row.number_sam_positive_therapeutic_18_plus_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pregnant & Lactating</TableCell>
                <TableCell>
                  HV03-054{' '}
                  <div className={styles['small-cont']}>
                    {row.number_sam_positive_therapeutic_pregnat_and_lactating}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow></TableRow>
              <TableRow>
                <TableCell>Number MAM +receiving Supplemental foods</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>0-5Months</TableCell>
                <TableCell>
                  HV03-055 <div className={styles['small-cont']}>{row.number_mam_positive_supplemental_0_5_months}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6-59Months</TableCell>
                <TableCell>
                  HV03-056{' '}
                  <div className={styles['small-cont']}>{row.number_mam_positive_supplemental_6_59_months}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5-9Years</TableCell>
                <TableCell>
                  HV03-057 <div className={styles['small-cont']}>{row.number_mam_positive_supplemental_5_9_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10-17Years</TableCell>
                <TableCell>
                  HV03-058{' '}
                  <div className={styles['small-cont']}>{row.number_mam_positive_supplemental_10_17_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>18+ Years</TableCell>
                <TableCell>
                  HV03-059{' '}
                  <div className={styles['small-cont']}>{row.number_mam_positive_supplemental_18_plus_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pregnant & Lactating</TableCell>
                <TableCell>
                  HV03-060{' '}
                  <div className={styles['small-cont']}>
                    {row.number_mam_positive_supplemental_pregnat_and_lactating}
                  </div>
                </TableCell>
              </TableRow>
            </div>
            <div className={styles['column3']}>
              <TableRow>
                <TableCell className={styles['bold']}>3.7 HIV in TB Clinic</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TB cases_New</TableCell>
                <TableCell>
                  HV03-061 <div className={styles['small-cont']}>{row.tb_cases_new}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TB New_Known HIV Positive(KPs)</TableCell>
                <TableCell>
                  HV03-062 <div className={styles['small-cont']}>{row.tb_case_known_hiv_positive}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TB_New HIV Positive</TableCell>
                <TableCell>
                  HV03-063 <div className={styles['small-cont']}>{row.tb_new_hiv_positive}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TB_New_Known HIV Positive(KP) on HAART</TableCell>
                <TableCell>
                  HV03-064 <div className={styles['small-cont']}>{row.tb_new_known_hiv_positive_on_haart}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TB New_start_HAART</TableCell>
                <TableCell>
                  HV03-065 <div className={styles['small-cont']}>{row.tb_new_start_haart}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeader className={styles['border-two']} colSpan={12}>
                  <h5>4. Medical Male Circumcision</h5>
                </TableHeader>
              </TableRow>
              <TableRow>
                <TableCell className={styles['bold']}>4.1 Number circumcised</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Circumcised_0-60 days</TableCell>
                <TableCell>
                  HV04-01 <div className={styles['small-cont']}>{row.circumcised_0_60_days}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Circumcised_61 days-9 yrs</TableCell>
                <TableCell>
                  HV04-02 <div className={styles['small-cont']}>{row.circumcised_61_days_9_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Circumcised_10-14 yrs</TableCell>
                <TableCell>
                  HV04-03 <div className={styles['small-cont']}>{row.circumcised_10_14_years}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Circumcised_15+ yrs</TableCell>
                <TableCell>
                  HV04-04 <div className={styles['small-cont']}>{row.circumcised_15_plus_years}</div>
                </TableCell>
              </TableRow>
              <TableRow></TableRow>
              <TableRow>
                <TableCell>Tested_HIV+</TableCell>
                <TableCell>
                  HV04-05 <div className={styles['small-cont']}>{row.tested_hiv_positive}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tested_HIV-</TableCell>
                <TableCell>
                  HV04-06 <div className={styles['small-cont']}>{row.tested_hiv_negative}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles['bold']}>4.2 Type of circumcision</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Surgical</TableCell>
                <TableCell>
                  HV04-07 <div className={styles['small-cont']}>{row.surgical}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Devices</TableCell>
                <TableCell>
                  HV04-08 <div className={styles['small-cont']}>{row.devices}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={styles['bold']}>4.3 Circumcision Adverse Events</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>AE_During_Moderate</TableCell>
                <TableCell>
                  HV04-09 <div className={styles['small-cont']}>{row.ae_during_moderate}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>AE_During_Severe</TableCell>
                <TableCell>
                  HV04-10 <div className={styles['small-cont']}>{row.ae_during_severe}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>AE_Post_Moderate</TableCell>
                <TableCell>
                  HV04-11 <div className={styles['small-cont']}>{row.ae_post_moderate}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>AE_Post_Severe</TableCell>
                <TableCell>
                  HV04-12 <div className={styles['small-cont']}>{row.ae_post_severe}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Follow up visit &lt;14d</TableCell>
                <TableCell>
                  HV04-13 <div className={styles['small-cont']}>{row.follow_up_visit_less_14_days}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeader className={styles['border-two']} colSpan={12}>
                  <h5>5. Post Exposure Prophylaxis</h5>
                </TableHeader>
              </TableRow>
              <TableRow>
                <TableCell>Exposed_Occupational</TableCell>
                <TableCell>
                  HV05-01 <div className={styles['small-cont']}>{row.exposed_occupational}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Exposed_Other</TableCell>
                <TableCell>
                  HV05-02 <div className={styles['small-cont']}>{row.exposed_other}</div>
                </TableCell>
              </TableRow>
              <TableRow></TableRow>
              <TableRow>
                <TableCell>PEP_Occupational</TableCell>
                <TableCell>
                  HV05-03 <div className={styles['small-cont']}>{row.pep_occupational}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PEP_Other</TableCell>
                <TableCell>
                  HV05-05 <div className={styles['small-cont']}>{row.pep_other}</div>
                </TableCell>
              </TableRow>
            </div>
          </>
        ))}
    </div>
  );
};

export default PartThree;
