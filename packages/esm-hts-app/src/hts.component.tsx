import React from 'react';
import { useTranslation } from 'react-i18next';
import OTZHomePatientTabs from './views/dashboard/patient-list-tabs/hts-patient-list-tabs.component';
import OTZSummaryTile from './views/dashboard/summary-tiles/hts-summary-tiles.component';
import { HTSHeader } from './header/hts-header.component';
import styles from './hts.scss';

const HTSDashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <HTSHeader />
      <div className={styles.tileLayout}>
        <OTZSummaryTile headerTitle={t('totalEnrolled', 'Total enrolled')} />
        <OTZSummaryTile headerTitle={t('totalActive', 'Total active')} />
        <OTZSummaryTile headerTitle={t('eligibleNotEnrolled', 'Eligible not enrolled')} />
      </div>
      <div className={styles.tabList}>
        <OTZHomePatientTabs />
      </div>
    </React.Fragment>
  );
};

export default HTSDashboard;
