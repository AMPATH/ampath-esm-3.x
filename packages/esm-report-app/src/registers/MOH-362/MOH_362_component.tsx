import React from 'react';
import styles from './MOH-362.scss';

const RenderMOH362 = () => {
  return (
    <div className={styles['register-container']}>
      <header className={styles['register-header']}>
        <h2>MOH 362 HTS LAB, REFERRAL AND LINKAGE REGISTER</h2>
        <h3>MOH 362: HTS LAB REGISTER</h3>
        <p>Ver. July 2023</p>
      </header>

      {/* <div className="row">
        <div class="col-md-4">
          <b>Ministry Of Health</b>
        </div>
        <div class="col-md-4 text-center">
          <b>
            MOH 362 HTS LAB, REFERRAL AND LINKAGE REGISTER <br />
            MOH 362: HTS LAB REGISTER
          </b>
        </div>
        <div class="col-md-4 text-right">
          <b>Ver. July 2023</b>
        </div>
      </div> */}
      <table className={styles['register-table']}>
        <thead>
          <tr>
            <th rowSpan={5}>
              Serial <br />
              Number
            </th>
            <th>
              National <br />
              Identification <br />
              Number
            </th>
            <th rowSpan={5}>
              Date of visit <br />
              (DD/MM/YYYY)
            </th>
            <th rowSpan={5}>
              Client Name <br />
              (First, Middle, Last)
            </th>
            <th rowSpan={5}>Age</th>
            <th rowSpan={5}>
              Sex
              <br />
              (M/F)
            </th>
            <th rowSpan={5}>Telephone Number</th>
            <th rowSpan={5}>
              Marital
              <br />
              Status <br />
              1=Married
              <br />
              2=Widowed <br />
              3=Single
              <br />
              4=Divorced
              <br />
              5=Separated
            </th>
            <th rowSpan={5}>
              Population Type <br />
              1. Gen Pop
              <br />
              2. Key and <br />
              Vulnerable Pop. <br />
              Codes for KVP
              <br />
              - DC
              <br />
              - MSM/MSW
              <br />
              - FSW
              <br />
              - PWID/PWUD
              <br />- VP
            </th>
            <th rowSpan={5}>
              Setting <br />
              (1=Facility
              <br />
              2=Community)
            </th>
            <th>HIV Test 1</th>
            <th>HIV Test 2</th>
            <th>HIV Test 3</th>
            <th>
              Final HIV <br />
              Result
            </th>
            <th>
              Discordant <br />
              Couple
            </th>
            <th rowSpan={5}>
              Referred for <br />
              Prevention <br />
              Services
              <br />
              1. PrEP
              <br />
              2. PEP
              <br />
              3. VMMC
              <br />
              4. PMTCT
              <br />
              5.NA
            </th>
            <th rowSpan={5}>
              HTS Provider <br />
              (Name)
            </th>
            <th rowSpan={5}>Remarks</th>
          </tr>
          <tr>
            <th rowSpan={4}>
              National Unique <br />
              Patient Identifier <br />
              (NUPI) Number
            </th>
            <th>Kit Name:</th>
            <th>Kit Name:</th>
            <th>Kit Name:</th>
            <th rowSpan={4}>(N,P,Ic)</th>
            <th rowSpan={4}>(Y/N/NA)</th>
          </tr>
          <tr>
            <th>Lot No.</th>
            <th>Lot No.</th>
            <th>Lot No.</th>
          </tr>
          <tr>
            <th>Expiry Date / /</th>
            <th>Expiry Date / /</th>
            <th>Expiry Date / /</th>
          </tr>
          <tr>
            <th>(N,P,I)</th>
            <th>(N,P,I,NA)</th>
            <th>(N,P,I,NA)</th>
          </tr>
          <tr>
            <th>(a)</th>
            <th>(b)</th>
            <th>(c)</th>
            <th>(d)</th>
            <th>(e)</th>
            <th>(f)</th>
            <th>(g)</th>
            <th>(h)</th>
            <th>(i)</th>
            <th>(j)</th>
            <th>(k)</th>
            <th>(l)</th>
            <th>(m)</th>
            <th>(n)</th>
            <th>(o)</th>
            <th>(p)</th>
            <th>(q)</th>
            <th>(r)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RenderMOH362;
