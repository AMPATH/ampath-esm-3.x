import useSWR from 'swr';
import { Buffer } from 'buffer';
import { openmrsFetch, restBaseUrl, useConfig } from '@openmrs/esm-framework';

export const BASE_URL = '/ws/rest/v1/provider?v=full';
export const custom =
  '/ws/rest/v1/provider?&v=custom:(uuid,identifier,display,person:(uuid,display),attributes:(uuid,display),retired)';

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

export const getAllProviders = () => {
  const { data, isLoading, error, isValidating } = useSWR(`${custom}`, fetcher);

  const response = data ? (data as any)?.results : [];

  return {
    response,
    isLoading,
    error,
    isValidating,
  };
};