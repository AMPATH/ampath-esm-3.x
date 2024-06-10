import React, { useState } from 'react';
import { Tabs, Tab, TabList } from '@carbon/react';
import styles from './common.scss';
import { useTranslation } from 'react-i18next';
import HtsScreening from './hts-screening.component';
import HtsInitial from './hts-initial.component';
import HtsRetest from './hts-retest.component';
import HtsReferred from './hts-referred.component';
import HtsLinkage from './hts-linkage.component';

const HtsProgramManagementSummary: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('htsScreening');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.tabContainer}>
      <Tabs selected={activeTab} onSelectionChange={handleTabChange}>
        <TabList contained>
          <Tab id="htsScreening">{t('htsScreening', 'HTS Screening')}</Tab>
          <Tab id="htsInitial">{t('htsInitial', 'HTS Initial')}</Tab>
          <Tab id="htsRetest ">{t('htsRetest', 'HTS Retest')}</Tab>
          <Tab id="htsReferred">{t('htsReferred', 'HTS Referred')}</Tab>
          <Tab id="htsLinkage">{t('htsLinkage', 'HTS Linkage')}</Tab>
        </TabList>
      </Tabs>
      {activeTab === 'htsScreening' && <HtsScreening />}
      {Tab === 'htsInitial' && <HtsInitial />}
      {Tab === 'htsRetest' && <HtsRetest />}
      {Tab === 'htsReferred' && <HtsReferred />}
      {Tab === 'htsLinkage' && <HtsLinkage />}
    </div>
  );
};

export default HtsProgramManagementSummary;
