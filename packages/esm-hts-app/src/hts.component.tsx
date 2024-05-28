import React from 'react';
import { useTranslation } from 'react-i18next';
import HTSHomePatientTabs from './views/dashboard/patient-list-tabs/hts-patient-list-tabs.component';
import HTSSummaryTile from './views/dashboard/summary-tiles/hts-summary-tiles.component';
import { HTSHeader } from './header/hts-header.component';
import styles from './hts.scss';

const HTSDashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <HTSHeader />
      <div className={styles.tileLayout}>
        <HTSSummaryTile headerTitle={t('totalEnrolled', 'Total enrolled')} />
        <HTSSummaryTile headerTitle={t('totalActive', 'Total active')} />
        <HTSSummaryTile headerTitle={t('eligibleNotEnrolled', 'Eligible not enrolled')} />
      </div>
      <div className={styles.tabList}>
        <HTSHomePatientTabs />
      </div>
    </React.Fragment>
  );
};

export default HTSDashboard;
