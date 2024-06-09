import { openmrsFetch } from '@openmrs/esm-framework';
import useSWR from 'swr';

// Configuration
const BASE_URL = '/ws/rest/v1/amrscore/reports';

const fetcher = async (url) => {
  try {
    const response = await openmrsFetch(url, {});
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
};

export const generateSpReport = (result) => {
  const { data, isLoading, error, isValidating } = useSWR(`${BASE_URL}/generate`, fetcher);

  const response = data ? (data as any)?.result : [];

  return {
    response,
    isLoading,
    error,
    isValidating,
  };
};

export const getSPReports = () => {
  const { data, isLoading, error, isValidating } = useSWR(BASE_URL, fetcher);

  const response = data ? (data as any)?.result : [];

  return {
    response,
    isLoading,
    error,
    isValidating,
  };
};
