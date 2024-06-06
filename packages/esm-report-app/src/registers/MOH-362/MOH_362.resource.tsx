import useSWR from 'swr';
import { Buffer } from 'buffer';
import { openmrsFetch, restBaseUrl, useConfig } from '@openmrs/esm-framework';

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

export const useAPI362a = () => {
  let url = `/ws/rest/v1/amrscore/reports/view`;

  const { data, error, isLoading, isValidating } = useSWR(url, fetcher);

  const moh362a = data ? (data as any)?.result : [];

  return {
    moh362a: moh362a,
    isLoading,
    isValidating,
    error,
  };
};

export const useAPI362b = () => {
  let url = `/ws/rest/v1/amrscore/reports/view`;

  const { data, error, isLoading, isValidating } = useSWR(url, fetcher);

  const moh362b = data ? (data as any)?.result : [];

  return {
    moh362b: moh362b,
    isLoading,
    isValidating,
    error,
  };
};
