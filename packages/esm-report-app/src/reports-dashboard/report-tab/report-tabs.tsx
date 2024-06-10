import React, { useEffect, useState } from 'react';
import { Grid, Column, Tabs, TabList, Tab, TabPanels, TabPanel, Checkbox, Button, TextInput } from '@carbon/react';
import styles from './report-tabs.scss';
import RenderTabPanel from '../tab-panel/tab-panel-component';
import { getSPReports } from '../../api/api';

export const RenderReportTab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('HIV Treatment');
  const { response, isLoading, error, isValidating } = getSPReports();

  const tabPanelsContent = [
    {
      title: 'HIV Treatment',
      rows: [
        {
          id: '1',
          report_name: 'MOH 361A',
        },
        {
          id: '2',
          report_name: 'MOH 362B',
        },
        {
          id: '3',
          report_name: 'MOH 731',
        },
        {
          id: '4',
          report_name: 'MOH 711',
        },
        {
          id: '5',
          report_name: 'MOH 715',
        },
      ],
    },
    {
      title: 'MNCH',
      rows: [
        { id: '1', report_name: 'MNCH Report 1' },
        { id: '2', report_name: 'MNCH Report 2' },
      ],
    },
    {
      title: 'Care & Treatment',
      rows: [
        { id: '1', report_name: 'Care Report 1' },
        { id: '2', report_name: 'Care Report 2' },
      ],
    },
    {
      title: 'TPT',
      rows: [
        { id: '1', report_name: 'TPT Report 1' },
        { id: '2', report_name: 'TPT Report 2' },
      ],
    },
    {
      title: 'MCH',
      rows: [
        { id: '1', report_name: 'MCH Report 1' },
        { id: '2', report_name: 'MCH Report 2' },
      ],
    },
    {
      title: 'OVC',
      rows: [
        { id: '1', report_name: 'OVC Report 1' },
        { id: '2', report_name: 'OVC Report 2' },
      ],
    },
    {
      title: 'Key Population',
      rows: [
        { id: '1', report_name: 'Key Report 1' },
        { id: '2', report_name: 'Key Report 2' },
      ],
    },
    {
      title: 'Prep',
      rows: [
        { id: '1', report_name: 'Prep Report 1' },
        { id: '2', report_name: 'Prep Report 2' },
      ],
    },
    {
      title: 'VMMC',
      rows: [
        { id: '1', report_name: 'VMMC Report 1' },
        { id: '2', report_name: 'VMMC Report 2' },
      ],
    },
    {
      title: 'ADHOC',
      rows: [
        { id: '1', report_name: 'ADHOC Report 1' },
        { id: '2', report_name: 'ADHOC Report 2' },
      ],
    },
  ];

  const [parsedRows, setParsedRows] = useState<any[]>([]);

  useEffect(() => {
    try {
      const jsonObject = JSON.parse(response);
      if (Array.isArray(jsonObject)) {
        setParsedRows(jsonObject);
      } else {
        setParsedRows([]);
      }
    } catch (error) {
      setParsedRows([]);
    }
  }, [response]);

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
              {selectedTab === tab.title && <RenderTabPanel rows={parsedRows} />}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};
