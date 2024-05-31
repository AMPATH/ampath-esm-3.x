import { defineConfigSchema, getSyncLifecycle } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';
import AMRSChartLinkComponent from './amrs-link/amrs-chart-link.component';
import patientFlagsComponent from './patient-flags/patient-flags.component';
import NavbarActionButton from './navbar/navbar-action-button.component';

const moduleName = '@ampath/esm-patient-flags-app';

const options = {
  featureName: 'patient-flags',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');
export const navbarButtons = getSyncLifecycle(NavbarActionButton, options);
export const amrs2ChartLink = getSyncLifecycle(AMRSChartLinkComponent, options);
export const patientFlag = getSyncLifecycle(patientFlagsComponent, options);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}
