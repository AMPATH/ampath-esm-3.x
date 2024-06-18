import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, MultiSelect } from '@carbon/react';
import styles from './location.scss';
import IptTableComponent from '../clinical-dashboard/ipt-report/ipt-table-component';
import makeAnimated from 'react-select/animated';
import { getFacilityLocations } from '../api/api';

const animatedComponents = makeAnimated();

export const LocationsComponent = ({ facilitylocations }) => {
  const { t } = useTranslation();
  const [currentLocation, setCurrentLocation] = useState(facilitylocations[0]);
  const { facilityLocations } = getFacilityLocations();
  const locations = [
    { value: 'MTRH Module 1', label: 'MTRH Module 1' },
    { value: 'Mosoriot', label: 'Mosoriot' },
    { value: 'Turbo', label: 'Turbo' },
    { value: 'Burnt Forest', label: 'Burnt Forest' },
  ];

  if (facilitylocations.length)
    return (
      <div>
        <MultiSelect
          label="Locations"
          items={locations}
          placeholder="Select locations"
          onChange={(selectedItems) => setCurrentLocation(selectedItems)}
        />
        <div className={styles.container}>
          <h2>{t('iptReportComponent', 'TB Treatment Therapy Report')}</h2>
        </div>
        <IptTableComponent locationUuid={'18c343eb-b353-462a-9139-b16606e6b6c2'} endDate={'2024-02-29'} />
      </div>
    );
};
