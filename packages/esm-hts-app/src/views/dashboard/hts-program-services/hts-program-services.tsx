import React, { useState } from 'react';
import { Tabs, Tab, TabList } from '@carbon/react';
import styles from './common.scss';
import { useTranslation } from 'react-i18next';
import HtsEnrolmentList from './hts-enrolment.component';

const HtsProgramManagementSummary: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('htsEnrolment');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.tabContainer}>
      <Tabs selected={activeTab} onSelectionChange={handleTabChange}>
        <TabList contained>
          <Tab id="htsEnrolment">{t('htsEnrolment', 'HTS Enrolment')}</Tab>
        </TabList>
      </Tabs>
      {activeTab === 'htsEnrolment' && <HtsEnrolmentList />}
    </div>
  );
};

export default HtsProgramManagementSummary;
