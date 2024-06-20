import { openmrsFetch } from '@openmrs/esm-framework';
import useSWR from 'swr';
import { type FacilityLocationsConfig } from '../config-schema';
import { useConfig } from '@openmrs/esm-framework';
import { Buffer } from 'buffer';

const username = '';
const password = '';
const basicAuthBase64 = Buffer.from(`${username}:${password}`).toString('base64');
const fetcher = async (url) => {
  try {
    const response = await openmrsFetch(url, {
      headers: { Authorization: `Basic ${basicAuthBase64}` },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
};

export const useFacilityLocation = () => {
  const { basicAuthBase64 } = useConfig<FacilityLocationsConfig>();

  const url = `/ws/rest/v1/location?v=default`;
  const { data, isLoading, error, isValidating } = useSWR(url, () => fetcher(url));

  return {
    facilitylocations: data?.results ?? [],
    isLoading,
    error,
    isValidating,
  };
};
