import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, MultiSelect } from '@carbon/react';
import styles from './location.scss';
import IptTableComponent from '../clinical-dashboard/ipt-report/ipt-table-component';
import { getFacilityLocations } from '../api/api';

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

  //   if (facilitylocations.length)
  return (
    <div className={styles.container}>
      <MultiSelect
        label="Locations"
        items={locations}
        placeholder="Select locations"
        onChange={(selectedItems) => setCurrentLocation(selectedItems)}
      />
      {/* <IptTableComponent locationUuid={'18c343eb-b353-462a-9139-b16606e6b6c2'} endDate={'2024-02-29'} /> */}
    </div>
  );
};
