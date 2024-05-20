import { Coronavirus } from '@carbon/react/icons';

export const otzPatientChartMeta = {
  title: 'HTS',
  slotName: 'ampath-hts-patient-chart-slot',
  isExpanded: false,
};

export const otzDashboardMeta = {
  name: 'hts-cases',
  slot: 'hts-cases-dashboard-slot',
  config: { columns: 1, type: 'grid', programme: 'otz', dashboardTitle: 'OTZ clubs', icon: Coronavirus },
  title: 'HTS clubs',
  dashboardIcon: Coronavirus,
};

export const otzPatientClinicalChartMeta = {
  title: 'HTS Program',
  slotName: 'ohri-otz-slot',
  isExpanded: false,
};

export const otzPatientSummaryMeta = {
  slot: 'hts-patient-summary-slot',
  columns: 1,
  title: 'HTS Patient Summary',
  path: 'hts-patient-summary',
  layoutMode: 'anchored',
};

export const otzProgramManagementDashboardMeta = {
  slot: 'hts-program-management-summary-slot',
  columns: 1,
  title: 'HTS Services',
  path: 'hts-program-management',
  layoutMode: 'anchored',
};
