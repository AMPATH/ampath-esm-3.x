import { Coronavirus } from '@carbon/react/icons';

export const htsPatientChartMeta = {
  title: 'HTS',
  slotName: 'ampath-hts-patient-chart-slot',
  isExpanded: false,
};

export const htsDashboardMeta = {
  name: 'hts-cases',
  slot: 'hts-cases-dashboard-slot',
  config: { columns: 1, type: 'grid', programme: 'hts', dashboardTitle: 'HTS clubs', icon: Coronavirus },
  title: 'HTS clubs',
  dashboardIcon: Coronavirus,
};

export const htsPatientSummaryMeta = {
  slot: 'hts-patient-summary-slot',
  columns: 1,
  title: 'HTS Patient Summary',
  path: 'hts-patient-summary',
  layoutMode: 'anchored',
};

export const htsProgramManagementDashboardMeta = {
  slot: 'hts-program-management-summary-slot',
  columns: 1,
  title: 'HTS Services',
  path: 'hts-program-management',
  layoutMode: 'anchored',
};
