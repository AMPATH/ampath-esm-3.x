import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, MultiSelect } from '@carbon/react';
import styles from './location.scss';
import IptTableComponent from '../clinical-dashboard/ipt-report/ipt-table-component';
import { getFacilityLocations, getLocations } from '../api/api';
import { useSession } from '@openmrs/esm-framework';
import { useSelectedLocations } from '../hooks/useSelectedLocations';

export const LocationsComponent = ({ facilitylocations }) => {
  const { t } = useTranslation();
  const [currentLocation, setCurrentLocation] = useState(null);
  const { facilityLocations } = getFacilityLocations();
  const locationUuid = useSession()?.sessionLocation?.uuid;
  const [currentLocations, setCurrentLocations] = useState([]);
  const { setSelectedLocations } = useSelectedLocations();

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await getLocations(locationUuid);
      try {
        const resultsArray = JSON.parse(response.results);
        if (Array.isArray(resultsArray)) {
          setCurrentLocations(
            resultsArray.map((location) => ({
              value: location.uuid,
              label: location.location_name,
            })),
          );
        } else {
          console.error('Error: Parsed results is not an array.');
        }
      } catch (error) {
        console.error('Error parsing response.results:', error);
      }
    };

    fetchLocations();
  }, [locationUuid]);

  const handleLocationChange = (selectedItems) => {
    if (Array.isArray(selectedItems)) {
      const selectedValues = selectedItems.map((item) => item.value);
      setCurrentLocation(selectedValues);
    } else {
      setSelectedLocations(selectedItems);
    }
  };

  return (
    <div className={styles.container}>
      <MultiSelect
        label="Locations"
        items={currentLocations}
        placeholder="Select locations"
        onChange={handleLocationChange}
        // onChange={(selectedItems) => setCurrentLocation(selectedItems)}
      />
      {/* <IptTableComponent locationUuid={'18c343eb-b353-462a-9139-b16606e6b6c2'} endDate={'2024-02-29'} /> */}
    </div>
  );
};
