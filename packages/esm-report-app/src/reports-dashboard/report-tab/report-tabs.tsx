import React from 'react';
import { Grid, Column, Tabs, TabList, Tab, TabPanels, TabPanel, Checkbox, Button, TextInput } from '@carbon/react';
import styles from './report-tabs.scss';
import RenderTabPanel from '../tab-panel/tab-panel-component';
export const RenderReportTab: React.FC = () => {
  return (
    <div>
      <Tabs>
        {/* TabList Component */}
        <TabList aria-label="List of tabs" contained fullWidth className={styles['full-width-tablist']}>
          <Tab>Common</Tab>
          <Tab>Cohort</Tab>
          <Tab>EHR</Tab>
          <Tab>HW</Tab>
          <Tab>TB</Tab>
          <Tab>TPT</Tab>
          <Tab>MCH</Tab>
          <Tab>072</Tab>
          <Tab>OVC</Tab>
          <Tab>Key Population</Tab>
          <Tab>Prep</Tab>
          <Tab>VMMC</Tab>
        </TabList>

        {/* TabPanels Component */}
        <TabPanels>
          <TabPanel className={styles['tab-panels']}>
            <RenderTabPanel />
          </TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 3</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 4</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 5</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 6</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 7</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 8</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 9</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 10</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 11</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 12</TabPanel>
          <TabPanel className={styles['tab-panels']}>Tab Panel 13</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
