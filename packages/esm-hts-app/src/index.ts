import { defineConfigSchema, getSyncLifecycle } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';
import Root from './root.component';
import { htsPatientSummaryMeta, htsProgramManagementDashboardMeta } from './dashboard.meta';
import { createDashboardLink } from '@openmrs/esm-patient-common-lib';
import HTSHomePatientTabs from './views/dashboard/patient-list-tabs/hts-patient-list-tabs.component';
import { createLeftPanelLink } from './left-panel-link.component';
import HTSSummaryTiles from './views/dashboard/summary-tiles/hts-summary-tiles.component';
import htsPatientSummary from './views/dashboard/patient-summary/patient-summary.component';
import HtsProgramManagementSummary from './views/dashboard/hts-program-services/hts-program-services';

export const moduleName = '@ampath/esm-hts-app';

const options = {
  featureName: 'esm-hts-app',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export const root = getSyncLifecycle(Root, options);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}

export const htsLeftPanelLink = getSyncLifecycle(
  createLeftPanelLink({
    name: 'hts',
    title: 'HTS',
    slot: 'hts-dashboard-slot',
  }),
  options,
);
export const htsDashboardTiles = getSyncLifecycle(HTSSummaryTiles, {
  featureName: 'hts-home-tiles',
  moduleName,
});

export const htsDashboardTabs = getSyncLifecycle(HTSHomePatientTabs, {
  featureName: 'hts-home-tabs',
  moduleName,
});

export const htsPatientSummaryDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...htsPatientSummaryMeta, moduleName }),
  options,
);
export const htsPatientSummaryDashboard = getSyncLifecycle(htsPatientSummary, {
  featureName: 'hts-patient-summary',
  moduleName,
});

export const htsProgramManagementDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...htsProgramManagementDashboardMeta, moduleName }),
  options,
);
export const htsProgramManagementDashboard = getSyncLifecycle(HtsProgramManagementSummary, {
  featureName: 'hts-program-management-summary',
  moduleName,
});
