import { defineConfigSchema, getSyncLifecycle } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';
import Root from './root.component';
import {
  otzPatientClinicalChartMeta,
  otzPatientSummaryMeta,
  otzProgramManagementDashboardMeta,
} from './dashboard.meta';
import { createDashboardGroup, createDashboardLink } from '@openmrs/esm-patient-common-lib';
import OTZHomePatientTabs from './views/dashboard/patient-list-tabs/hts-patient-list-tabs.component';
import { createLeftPanelLink } from './left-panel-link.component';
import OTZSummaryTiles from './views/dashboard/summary-tiles/hts-summary-tiles.component';
import otzPatientSummary from './views/dashboard/patient-summary/patient-summary.component';
import otzProgramManagementSummary from './views/dashboard/hts-program-services/otz-program-services';

export const moduleName = '@ampath/esm-otz-app';

const options = {
  featureName: 'esm-hts-app',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export const root = getSyncLifecycle(Root, options);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}

export const patientChartTptDashboard = getSyncLifecycle(createDashboardGroup(otzPatientClinicalChartMeta), options);

export const otzLeftPanelLink = getSyncLifecycle(
  createLeftPanelLink({
    name: 'hts',
    title: 'HTS',
    slot: 'hts-dashboard-slot',
  }),
  options,
);
export const otzDashboardTiles = getSyncLifecycle(OTZSummaryTiles, {
  featureName: 'hts-home-tiles',
  moduleName,
});

export const otzDashboardTabs = getSyncLifecycle(OTZHomePatientTabs, {
  featureName: 'hts-home-tabs',
  moduleName,
});

export const otzPatientSummaryDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...otzPatientSummaryMeta, moduleName }),
  options,
);
export const otzPatientSummaryDashboard = getSyncLifecycle(otzPatientSummary, {
  featureName: 'hts-patient-summary',
  moduleName,
});

export const otzProgramManagementDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...otzProgramManagementDashboardMeta, moduleName }),
  options,
);
export const otzProgramManagementDashboard = getSyncLifecycle(otzProgramManagementSummary, {
  featureName: 'otz-program-management-summary',
  moduleName,
});
