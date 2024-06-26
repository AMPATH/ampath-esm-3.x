import React from 'react';
import styles from './MOH-405.scss';
import { TableContainer, TableHead, TableRow, Table, TableBody, TableCell, TableHeader } from '@carbon/react';

const RenderMOH405: React.FC<{ reportData: any }> = ({ reportData }) => (
  <TableContainer className={styles['table-container']}>
    <div className={styles['header']}>
      <div className={styles['left']}>
        <p>Ministry of Health</p>
      </div>
      <div className={styles['center']}>
        <h2>AnteNatal(ANC) Register MOH 405</h2>
      </div>
      <div className={styles['right']}>
        <p>Ver. July 2023</p>
      </div>
    </div>

    <div className={styles['table-wrapper']}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader rowSpan={8}>Date of visit</TableHeader>
            <TableHeader rowSpan={1}>(New Client)</TableHeader>
            <TableHeader rowSpan={8}>ANC Number/NUPI (Re Visit)</TableHeader>
            <TableHeader rowSpan={8}>Number of Visits (1st,2nd,3rd,4th...)</TableHeader>
            <TableHeader rowSpan={8}>Full Name (First,Middle,Surname)</TableHeader>
            <TableHeader rowSpan={5}> Date of birth (DD/MM/YYY)</TableHeader>
            <TableHeader rowSpan={8}>Subcounty/County</TableHeader>
            <TableHeader rowSpan={5}>Village/Estate/Landmark</TableHeader>
            <TableHeader rowSpan={8}>
              Marital Status NM=Never,Married/Single,MM=Married Monogamous MP=Married Polygamous W=Widowed D=Divorced
              S=Separated
            </TableHeader>
            <TableHeader rowSpan={8}>Parity</TableHeader>
            <TableHeader rowSpan={8}> Gravidae</TableHeader>
            <TableHeader rowSpan={5}>Date of Last Menstrual Period(LMP)</TableHeader>
            <TableHeader rowSpan={5}>Expected Date of Delivery (EDD)</TableHeader>
            <TableHeader rowSpan={8}>Gestation in Weeks</TableHeader>
            <TableHeader rowSpan={8}>MUAC 1=Green 2=Yellow 3=Red</TableHeader>
            <TableHeader rowSpan={8}>Height(cm)</TableHeader>
            <TableHeader rowSpan={8}>Weight (kg)</TableHeader>
            <TableHeader rowSpan={8}>Blood Pressure</TableHeader>
            <TableHeader rowSpan={8}>Breast Exam 1=normal 2=abnormal</TableHeader>
            <TableHeader rowSpan={4}>FGM (Y/N)</TableHeader>
            <TableHeader colspan={12} rowSpan={2}>
              Laboratory
            </TableHeader>
            <TableHeader colspan={1} rowSpan={7}>
              Maternal HAART
            </TableHeader>
            <TableHeader rowSpan={7}>Infant Prophylaxis</TableHeader>
            <TableHeader rowSpan={7}>Partner HIV Testing</TableHeader>
            <TableHeader rowSpan={2}>Other Conditions and Treatment</TableHeader>
            <TableHeader rowSpan={7}>Deworming</TableHeader>
            <TableHeader rowSpan={7}>IPT 1-3</TableHeader>
            <TableHeader rowSpan={2}>Dose</TableHeader>
            <TableHeader rowSpan={2}>Supplementation</TableHeader>
            <TableHeader rowSpan={2}>LLITNS </TableHeader>
            <TableHeader colSpan={3} rowSpan={2}>
              Referrals
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={8}>
              Remarks
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader rowSpan={1}>ANC Number</TableHeader>
          </TableRow>
          <TableRow>
            <TableHeader rowSpan={6}>NUPI</TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              Haemoglobin (Level/ND/NA){' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={6}>
              Blood Sugar Testing for Diabetes 1=RBS &lt 11.1mmol/L,No Diabetes 2=RBS &gt 11.1mmol/L,Has Diabetes 3= No
              RBS Done
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              {' '}
              Blood Group and rhesus (Y/N)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              {' '}
              Urinalysis (Y/N)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              {/* Blank */}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={5}>
              {' '}
              Hepatitis B Virus Screening Result (P/N/ND){' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              TB Screening Codes (1-5){' '}
            </TableHeader>
            <TableHeader colSpan={5} rowSpan={1}>
              {' '}
              {/* Blank */}{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={5}>
              {' '}
              1=Hypertension 2=Diabetes 3=Epilepsy 4=Malaria in Pregnancy 5=STIs/RTIs 6=Others (specify) 7=None Record
              all that apply{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              {' '}
              1=TT Dose 1st Dose 2=Second Dose 3=3rd Dose 4=4th Dose 5=5th Dose NA=None{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              {' '}
              Given Supplementation 1=Combined IFAs 2=Iron 3=Folate 4=Iron +Folate Separately 5=Calcium{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              {' '}
              Received LLITNs (Y/N){' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              From{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              To{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={6}>
              {' '}
              Reason for Referral Specify{' '}
            </TableHeader>
          </TableRow>

          <TableRow>
            <TableHeader colSpan={0} rowSpan={4}>
              Type of Test RPR/VDRL/Duo Test/NA{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={5}>
              1=Presumed TB 2=No Signs 3=On TB Treatment 4=On TPT 5=Not done{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={4}>
              HIV testing (Initial or Retest, Known Positive or Revisit){' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              HIV test1{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              HIV test2{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              HIV test3{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={4}>
              Test Results{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={5}>
              1= From Community Unit 2==Another HealthFacility 3= Not Applicable{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={5}>
              1=To Community Unit 2=HIV Preventative Services 3=Another HealthFacility 4= Not Applicable{' '}
            </TableHeader>{' '}
          </TableRow>
          <TableRow>
            <TableHeader colSpan={1} rowSpan={4}>
              FGM Associated Complications 1.Scarring 2=keloids 3=Dyspaneuria 4=UTi 5=N/A{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              Kit Name{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              Kit Name{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              Kit Name{' '}
            </TableHeader>{' '}
          </TableRow>
          <TableRow>
            <TableHeader colSpan={1} rowSpan={3}>
              Age{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={3}>
              Phone Number{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={3}>
              (dd/mm/yyy){' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={3}>
              (dd/mm/yyy){' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              Lot No{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              Lot No{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              Lot No{' '}
            </TableHeader>{' '}
          </TableRow>
          <TableRow>
            <TableHeader colSpan={1} rowSpan={1}>
              Expiry
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              Expiry{' '}
            </TableHeader>{' '}
            <TableHeader colSpan={1} rowSpan={1}>
              Expiry{' '}
            </TableHeader>{' '}
          </TableRow>
          <TableRow>
            <TableHeader colSpan={1} rowSpan={1}>
              Test Results(P/N/NA)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              Treatment (Y/N/NA)
            </TableHeader>

            <TableHeader colSpan={1} rowSpan={1}>
              (I,R,KP,ND,Rev)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              (N,P/I/NA)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              (N,P/I/NA)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              (N,P/I/NA)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              (N/P/Ic/U/NA)
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              N=New on ART OA = OnART NA=Not Applicable{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              AN=AZT&NVP A=AZT N=NVP NA{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              N/P/KP/NA{' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              Treatment (Y/N/NA){' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              (Y/N/NA){' '}
            </TableHeader>
            <TableHeader colSpan={1} rowSpan={1}>
              {' '}
              (1,2,3,N,NA){' '}
            </TableHeader>
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
            <TableCell rowSpan={2}>(x)</TableCell>
            <TableCell rowSpan={2}>(y)</TableCell>
            <TableCell rowSpan={2}>(z)</TableCell>
            <TableCell rowSpan={2}>(aa)</TableCell>
            <TableCell rowSpan={2}>(ab)</TableCell>
            <TableCell rowSpan={2}>(ac)</TableCell>
            <TableCell rowSpan={2}>(ad)</TableCell>
            <TableCell rowSpan={2}>(ae)</TableCell>
            <TableCell rowSpan={2}>(af)</TableCell>
            <TableCell rowSpan={2}>(ag)</TableCell>
            <TableCell rowSpan={2}>(ah)</TableCell>
            <TableCell rowSpan={2}>(ai)</TableCell>
            <TableCell rowSpan={2}>(aj)</TableCell>
            <TableCell rowSpan={2}>(ak)</TableCell>
            <TableCell rowSpan={2}>(al)</TableCell>
            <TableCell rowSpan={2}>(am)</TableCell>
            <TableCell rowSpan={2}>(an)</TableCell>
            <TableCell rowSpan={2}>(ao)</TableCell>
            <TableCell rowSpan={2}>(ap)</TableCell>
            <TableCell rowSpan={2}>(aq)</TableCell>
            <TableCell rowSpan={2}>(ar)</TableCell>
            <TableCell rowSpan={2}>(as)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData && reportData.length > 0 ? (
            reportData.map((item, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell rowSpan={2}>{item.visit_date}</TableCell>
                  {/* Date of visit */}
                  <TableCell className={styles['dotted-border']} rowSpan={1}>
                    {item.anc_number}
                  </TableCell>{' '}
                  {/* ANC Number */}
                  <TableCell rowSpan={2}>{item.anc_number_nupi_revisit} </TableCell>
                  {/* c */}
                  <TableCell rowSpan={2}>{item.no_of_anc_visits} </TableCell>
                  {/* Number of Visits */}
                  <TableCell rowSpan={2}>{item.full_names} </TableCell>
                  {/* Full Name */}
                  <TableCell rowSpan={1}>{item.date_of_birth} </TableCell>
                  {/* Date of birth */}
                  <TableCell rowSpan={2}>{item.county_subcounty} </TableCell>
                  {/* Subcounty/County */}
                  <TableCell rowSpan={1}>{item.village_estate_landmark} </TableCell>
                  {/* Village/Estate/Landmark */}
                  <TableCell rowSpan={2}>{item.marital_status} </TableCell>
                  {/* Marital Status */}
                  <TableCell rowSpan={2}>{item.parity} </TableCell>
                  {/* Parity */}
                  <TableCell rowSpan={2}>{item.gravidae} </TableCell>
                  {/* Gravidae */}
                  <TableCell rowSpan={2}>{item.lmp} </TableCell>
                  {/* Last Menstrual Period(LMP) */}
                  <TableCell rowSpan={2}>{item.edd} </TableCell>
                  {/* EDD */}
                  <TableCell rowSpan={2}>{item.gestation_in_weeks} </TableCell>
                  {/* Gestation in Weeks */}
                  <TableCell rowSpan={2}>{item.muac} </TableCell>
                  {/* MUAC */}
                  <TableCell rowSpan={2}>{item.height_in_cm} </TableCell>
                  {/* Height */}
                  <TableCell rowSpan={2}>{item.weight_in_kg} </TableCell>
                  {/* Weight */}
                  <TableCell rowSpan={2}>{item.blood_pressure} </TableCell>
                  {/* Blood Pressure */}
                  <TableCell rowSpan={2}>{item.breast_exam} </TableCell>
                  {/* Breast Exam */}
                  <TableCell rowSpan={1}>{item.fgm_done} </TableCell>
                  {/* FGM (Y/N) */}
                  <TableCell rowSpan={2}>{item.haemoglobin} </TableCell>
                  {/*Haemoglobin */}
                  <TableCell rowSpan={2}>{item.blood_sugar_testing_for_diabetes} </TableCell>
                  {/*Blood Sugar Testing for Diabetes*/}
                  <TableCell rowSpan={2}>{item.blood_group_and_rhesus} </TableCell>
                  {/*Blood Group and rhesus*/}
                  {/*Referrals To*/}
                  <TableCell rowSpan={2}>{item.urinalysis} </TableCell>
                  {/*Urinalysis */}
                  <TableCell rowSpan={1}>{item.type_of_test} </TableCell>
                  {/*Type of Test*/}
                  <TableCell rowSpan={1}>{item.hepatitis_b_screening_result} </TableCell>
                  {/*Hepatitis B Virus Screening Result */}
                  <TableCell rowSpan={2}>{item.tb_screening_codes} </TableCell>
                  {/*TB Screening Codes */}
                  <TableCell rowSpan={2}>{item.hiv_test_type} </TableCell>
                  {/*HIV testing (Initial or Retest, Known Positive or Revisit)*/}
                  <TableCell rowSpan={1}>{item.test_1_result} </TableCell>
                  {/*HIV test1_result*/}
                  <TableCell rowSpan={1}>{item.test_2_result} </TableCell>
                  {/*HIV test2 */}
                  <TableCell rowSpan={1}>{item.test_3_result} </TableCell>
                  {/*HIV test3 results*/}
                  <TableCell rowSpan={1}>{item.final_test_results} </TableCell>
                  {/*Final Test Results */}
                  <TableCell rowSpan={2}>{item.maternal_haart} </TableCell>
                  {/*Maternal HAART */}
                  <TableCell rowSpan={2}>{item.infant_prophylaxis} </TableCell>
                  {/*Infant Prophylaxis */}
                  <TableCell rowSpan={2}>{item.partner_hiv_status} </TableCell>
                  {/*Partner HIV Testing*/}
                  <TableCell rowSpan={1}>{item.other_conditions} </TableCell>
                  {/*Other Conditions and Treatment */}
                  <TableCell rowSpan={2}>{item.deworming} </TableCell>
                  {/*Deworming */}
                  <TableCell rowSpan={2}>{item.ipt_1_3} </TableCell>
                  {/*IPT 1-3 */}
                  <TableCell rowSpan={2}>{item.tt_dose} </TableCell>
                  {/* TT Dose */}
                  <TableCell rowSpan={2}>{item.supplementation}</TableCell>
                  {/*Referrals */}
                  <TableCell rowSpan={2}>{item.llitns} </TableCell>
                  {/*LLITNS */}
                  <TableCell rowSpan={2}>{item.refferals_from} </TableCell>
                  {/*Referrals From */}
                  <TableCell rowSpan={2}>{item.refferrals_to} </TableCell>
                  {/*Referrals To*/}
                  <TableCell rowSpan={2}>{item.reason_for_referral} </TableCell>
                  {/*Reason for Referral Specify */}
                  <TableCell rowSpan={2}>{item.remarks} </TableCell>
                  {/*Reason for Referral Specify */}
                </TableRow>
                <TableRow>
                  <TableCell rowSpan={1}>{item.nupi}</TableCell>
                  {/*NUPI */}

                  <TableCell rowSpan={1}>{item.age} </TableCell>
                  {/*age */}
                  <TableCell rowSpan={1}>{item.telephone_number} </TableCell>
                  {/*telephone number */}

                  <TableCell rowSpan={1}> {item.fgm_associated_complications} </TableCell>
                  {/*FGM Associated Complications */}
                  <TableCell rowSpan={1}> {item.test_results} </TableCell>
                  {/*telephone number */}
                  <TableCell rowSpan={1}> {item.other_conditions_treatment} </TableCell>
                  {/*other conditions Treatment */}
                  {/*telephone number */}
                  <TableCell rowSpan={1}> </TableCell>
                  {/*hiv_test_1 */}
                  <TableCell rowSpan={1}> </TableCell>
                  {/*hiv_test_2 */}
                  <TableCell rowSpan={1}> </TableCell>
                  {/*hiv_test_3 */}
                  <TableCell rowSpan={1}> </TableCell>
                  {/*telephone number */}
                  <TableCell rowSpan={1}>{item.hepatitis_b_treatment} </TableCell>
                  {/*Treatment (Y/N/NA)  */}
                </TableRow>
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={45}>No data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </TableContainer>
);

export default RenderMOH405;
