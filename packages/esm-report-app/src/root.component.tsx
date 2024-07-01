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
import { SelectedLocationsProvider } from '../src/hooks/useSelectedLocations';

const Root: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <SelectedLocationsProvider>
          <ReportHeader />
          <ReportDashboard />
        </SelectedLocationsProvider>
      </div>
    </div>
  );
};

export default Root;
