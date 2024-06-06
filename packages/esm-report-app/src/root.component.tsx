/**
 * From here, the application is pretty typical React, but with lots of
 * support from `@openmrs/esm-framework`. Check out `Greeter` to see
 * usage of the configuration system, and check out `PatientGetter` to
 * see data fetching using the OpenMRS FHIR API.
 *
 * Check out the Config docs:
 *   https://openmrs.github.io/openmrs-esm-core/#/main/config
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Resources from './resources/resources.component';
import styles from './root.scss';
import ClinicalDashboardComponent from './clinical-dashboard/clinical-dashboard.component';
import IptReportComponent from './clinical-dashboard/ipt-report/ipt-report.component';
import { ReportHeader } from './headers/report-header-component';
import ReportDashboard from './reports-dashboard/report-dashboard-component';
import RenderMOH362 from './registers/MOH-362/MOH_362_component';
import NutritionRegisters from './registers/MOH-407/nutrition-register-component';
import PrepRegister from './registers/MOH-267/prep-activity-register.component';
import RenderMOH405 from './registers/MOH-405/MOH_405_component';
import RenderMOH406 from './registers/MOH-406/MOH_406_component';

const Root: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.container}>
        {/* <h3 className={styles.welcome}>
        {t("reportsHeader", "Reports Dashboard")}
      </h3>
      <Resources /> */}
        <ReportHeader />

        <IptReportComponent />

        <ReportDashboard />

        <RenderMOH405 />
        <RenderMOH406 />

        <RenderMOH362 />

        <NutritionRegisters />

        <PrepRegister />
      </div>
    </div>
  );
};

export default Root;
