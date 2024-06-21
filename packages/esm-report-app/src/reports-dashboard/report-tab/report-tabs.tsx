import React, { useEffect, useState } from 'react';
import { Grid, Column, Tabs, TabList, Tab, TabPanels, TabPanel, Checkbox, Button, TextInput } from '@carbon/react';
import styles from './report-tabs.scss';
import RenderTabPanel from '../tab-panel/tab-panel-component';
import { getSPReports } from '../../api/api';

export const RenderReportTab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const { response, isLoading, error, isValidating } = getSPReports();

  const [parsedRows, setParsedRows] = useState<any[]>([]);

  useEffect(() => {
    if (response) {
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
    }
  }, [response]);

  useEffect(() => {
    if (parsedRows.length > 0) {
      const firstTabTitle = parsedRows[0].category_name;
      setSelectedTab(firstTabTitle);
    }
  }, [parsedRows]);

  const handleTabClick = (tabName: any) => {
    setSelectedTab(tabName);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const tabPanelsContent = parsedRows.reduce((acc: any, row: any) => {
    const category = acc.find((cat: any) => cat.title === row.category_name);
    if (category) {
      category.rows.push(row);
    } else {
      acc.push({
        title: row.category_name,
        rows: [row],
      });
    }
    return acc;
  }, []);

  return (
    parsedRows.length > 0 && (
      <div>
        <Tabs>
          <TabList aria-label="List of tabs" contained className={styles['full-width-tablist']}>
            {tabPanelsContent.map((tab, index) => (
              <Tab key={index} onClick={() => handleTabClick(tab.title)}>
                {tab.title}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {tabPanelsContent.map((tab, index) => (
              <TabPanel key={index} className={styles['tab-panels']}>
                {selectedTab === tab.title && <RenderTabPanel rows={tab.rows} />}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    )
  );
};
