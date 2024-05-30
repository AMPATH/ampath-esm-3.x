import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import styles from './hts-patient-list-tabs.scss';
import HTSScreening from './hts-patient-list-tables/hts-screening.component';
import Eligible from './hts-patient-list-tables/eligible.component';
import Tested from './hts-patient-list-tables/tested.component';
import DueForLinkage from './hts-patient-list-tables/due-for-linkage.component';
import DueForRetest from './hts-patient-list-tables/due-for-retest.component';
import InvalidResult from './hts-patient-list-tables/invalid-result.component';

function HTSHomePatientTabs() {
  const { t } = useTranslation();

  return (
    <div className={styles.tabs}>
      <Tabs>
        <TabList aria-label="List of tabs" contained>
          <Tab>{t('HTSScreening', 'HTS Screening')}</Tab>
          <Tab>{t('totalEligible', 'Total Eligible')}</Tab>
          <Tab>{t('totalTested', 'Total Tested')}</Tab>
          <Tab>{t('dueForRetest', 'Due For Retest')}</Tab>
          <Tab>{t('dueForLinkage', 'Due For Linkage')}</Tab>
          <Tab>{t('invalidResult', 'Invalid Result')}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HTSScreening />
          </TabPanel>
          <TabPanel>
            <Eligible />
          </TabPanel>
          <TabPanel>
            <Tested />
          </TabPanel>
          <TabPanel>
            <DueForRetest />
          </TabPanel>
          <TabPanel>
            <DueForLinkage />
          </TabPanel>
          <TabPanel>
            <InvalidResult />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default HTSHomePatientTabs;
