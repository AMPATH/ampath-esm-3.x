import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Location } from '@carbon/react/icons';
import { useSession, formatDate } from '@openmrs/esm-framework';
import ReportIllustration from './report-illustration-component';
import IptReportComponent from '../clinical-dashboard/ipt-report/ipt-report.component';

import styles from './report-header.scss';

export const ReportHeader: React.FC = () => {
  const { t } = useTranslation();
  const userSession = useSession();
  const userLocation = userSession?.sessionLocation?.display;
  return (
    <>
      <div className={styles.header}>
        <div className={styles['left-justified-items']}>
          <ReportIllustration />
          <div className={styles['page-labels']}>
            <p className={styles['page-name']}>{t('reports', 'Reporting Dashboard')}</p>
          </div>
        </div>
        <div className={styles['right-justified-items']}>
          <div className={styles['date-and-location']}>
            <Location size={16} />
            <span className={styles.value}>{userLocation}</span>
            <span className={styles.middot}>&middot;</span>
            <Calendar size={16} />
            <span className={styles.value}>{formatDate(new Date(), { mode: 'standard' })}</span>
          </div>
        </div>
      </div>
      <IptReportComponent />
    </>
  );
};
