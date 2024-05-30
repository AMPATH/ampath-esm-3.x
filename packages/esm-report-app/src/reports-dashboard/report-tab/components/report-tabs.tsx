import React from 'react';
import { Grid, Column, Tabs, TabList, Tab, TabPanels, TabPanel, Checkbox, Button, TextInput } from '@carbon/react';
import styles from '../styles/report-tabs.scss';
import RenderReportUtility from '../../left-report-list tab/components/left-tab-component';
export const ReportsList: React.FC = () => {
  return (
    <div className={styles['reports-list-container']}>
      <Grid condensed>
        <Column lg={16} md={8} sm={4}>
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
              <Tab>Prep</Tab>
              <Tab>ADHOC</Tab>
              <Tab>Prep</Tab>
              <Tab>VMMC</Tab>
              <Tab>Prep</Tab>
              <Tab>ADHOC</Tab>
              <Tab>ADHOC</Tab>
            </TabList>

            {/* TabPanels Component */}
            <TabPanels>
              {/* TabPanel 2 (contains form elements) */}
              <TabPanel>
                <RenderReportUtility />
                {/* <form>
                  <legend className={`cds--label`}>Validation example</legend>
                  <Checkbox id="cb" labelText="Accept privacy policy" />
                  <Button style={{ marginTop: '1rem', marginBottom: '1rem' }} type="submit">
                    Submit
                  </Button>
                  <TextInput type="text" labelText="Text input label" helperText="Optional help text" />
                </form> */}
              </TabPanel>
              <TabPanel>Tab Panel 3</TabPanel>
              <TabPanel>Tab Panel 4</TabPanel>
              <TabPanel>Tab Panel 5</TabPanel>
              <TabPanel>Tab Panel 6</TabPanel>
              <TabPanel>Tab Panel 7</TabPanel>
              <TabPanel>Tab Panel 8</TabPanel>
            </TabPanels>
          </Tabs>
        </Column>
      </Grid>
    </div>
  );
};
