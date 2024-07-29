import React from 'react';
import useSWR from 'swr';
import { useTranslation } from 'react-i18next';
import HTSHomePatientTabs from './views/dashboard/patient-list-tabs/hts-patient-list-tabs.component';
import HTSSummaryTile from './views/dashboard/summary-tiles/hts-summary-tiles.component';
import HTSSummaryTileOverallUptake from './views/dashboard/summary-tiles/hts-summary-tiles-overall-uptake.component';
import { HTSHeader } from './header/hts-header.component';
import styles from './hts.scss';
import { openmrsFetch } from '@openmrs/esm-framework';

// export const BASE_URL = '/ws/rest/v1/amrscore';

// const fetcher = async (url) => {
//   try {
//     const response = await openmrsFetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data: ${response.statusText}');
//     }
//     return response.json();
//   } catch (error) {
//     throw new Error('An error occurred while fetching data: ${error.message}')
//   }
// };

// export const useHTSData = () => {
//   const {data, error} = useSWR('$BASE_URL/hts-data', fetcher);
//   if (error) {
//     console.error('Failed to fetch HTS data:', error);
//   }
//   return {
//     data,
//     isLoading: !data && !error,
//     error,
//   };
// };

const HTSDashboard: React.FC = () => {
  const { t } = useTranslation();
  //   const {data, isLoading, error} = useHTSData();
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   }

  return (
    <React.Fragment>
      <HTSHeader />
      <div className={styles.tileLayout}>
        <HTSSummaryTile headerTitle={t('totalScreened', 'Total Screened')} />
        <HTSSummaryTile headerTitle={t('totalEligible', 'Total Eligible')} />
        <HTSSummaryTile headerTitle={t('totalTested', 'Total Tested')} />
        <HTSSummaryTile headerTitle={t('totalPositive', 'Total Positive')} />
        <HTSSummaryTile headerTitle={t('totalNegative', 'Total Negative')} />
        <HTSSummaryTile headerTitle={t('totalInvalid', 'Total Invalid')} />
        <HTSSummaryTileOverallUptake headerTitle={t('overallUptake', 'Overall Uptake')} />
      </div>
      <div className={styles.tabList}>
        <HTSHomePatientTabs />
      </div>
    </React.Fragment>
  );
};

export default HTSDashboard;

{
  /* <HTSSummaryTile headerTitle={t('totalScreened', 'Total Screened')} value={data.totalScreened}/>
<HTSSummaryTile headerTitle={t('totalEligible', 'Total Eligible')} value={data.totalEligible}/>
<HTSSummaryTile headerTitle={t('totalTested', 'Total Tested')} value={data.totalTested}/>
<HTSSummaryTile headerTitle={t('totalPositive', 'Total Positive')} value={data.totalPositive}/>
<HTSSummaryTile headerTitle={t('totalNegative', 'Total Negative')} value={data.totalNegative}/>
<HTSSummaryTile headerTitle={t('totalInvalid', 'Total Invalid')} value={data.totalInvalid}/>
<HTSSummaryTileOverallUptake headerTitle={t('overallUptake', 'Overall Uptake')} value={data.overallUptake}/> */
}
