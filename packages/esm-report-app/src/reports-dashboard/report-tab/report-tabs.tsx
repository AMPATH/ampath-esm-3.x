import React, { useEffect, useState } from 'react';
import { Grid, Column, Tabs, TabList, Tab, TabPanels, TabPanel, Checkbox, Button, TextInput } from '@carbon/react';
import styles from './report-tabs.scss';
import RenderTabPanel from '../tab-panel/tab-panel-component';
export const RenderReportTab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('HIV Treatment');

  const tabPanelsContent = [
    {
      title: 'HIV Treatment',
      rows: [
        {
          id: '1',
          name: 'MOH 361A',
        },
        {
          id: '2',
          name: 'MOH 362B',
        },
        {
          id: '3',
          name: 'MOH 731',
        },
        {
          id: '4',
          name: 'MOH 711',
        },
        {
          id: '5',
          name: 'MOH 715',
        },
      ],
    },
    {
      title: 'MNCH',
      rows: [
        { id: '1', name: 'MNCH Report 1' },
        { id: '2', name: 'MNCH Report 2' },
      ],
    },
    {
      title: 'Care & Treatment',
      rows: [
        { id: '1', name: 'Care Report 1' },
        { id: '2', name: 'Care Report 2' },
      ],
    },
    {
      title: 'TPT',
      rows: [
        { id: '1', name: 'TPT Report 1' },
        { id: '2', name: 'TPT Report 2' },
      ],
    },
    {
      title: 'MCH',
      rows: [
        { id: '1', name: 'MCH Report 1' },
        { id: '2', name: 'MCH Report 2' },
      ],
    },
    {
      title: 'OVC',
      rows: [
        { id: '1', name: 'OVC Report 1' },
        { id: '2', name: 'OVC Report 2' },
      ],
    },
    {
      title: 'Key Population',
      rows: [
        { id: '1', name: 'Key Report 1' },
        { id: '2', name: 'Key Report 2' },
      ],
    },
    {
      title: 'Prep',
      rows: [
        { id: '1', name: 'Prep Report 1' },
        { id: '2', name: 'Prep Report 2' },
      ],
    },
    {
      title: 'VMMC',
      rows: [
        { id: '1', name: 'VMMC Report 1' },
        { id: '2', name: 'VMMC Report 2' },
      ],
    },
    {
      title: 'ADHOC',
      rows: [
        { id: '1', name: 'ADHOC Report 1' },
        { id: '2', name: 'ADHOC Report 2' },
      ],
    },
  ];

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <div>
      <Tabs>
        {/* TabList Component */}
        <TabList aria-label="List of tabs" contained className={styles['full-width-tablist']}>
          {tabPanelsContent.map((tab, index) => (
            <Tab key={index} onClick={() => handleTabClick(tab.title)}>
              {tab.title}
            </Tab>
          ))}
        </TabList>

        {/* TabPanels Component */}
        <TabPanels>
          {tabPanelsContent.map((tab, index) => (
            <TabPanel key={index} className={styles['tab-panels']}>
              {selectedTab === tab.title && <RenderTabPanel title={tab.title} rows={tab.rows} />}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};
