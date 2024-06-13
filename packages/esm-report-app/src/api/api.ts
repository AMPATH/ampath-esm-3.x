import useSWR from 'swr';
import { Buffer } from 'buffer';
import { openmrsFetch, restBaseUrl, useConfig } from '@openmrs/esm-framework';

export const BASE_URL = '/ws/rest/v1/amrscore/reports';

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

async function postData(url: string, ac = new AbortController()) {
  const response = await openmrsFetch(url, {
    signal: ac.signal,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

export const generateMOH362Reports = () => {
  const { data, error, isLoading, isValidating } = useSWR(`${BASE_URL}/view`, fetcher);

  const mohData = data ? (data as any)?.result : [];
  return {
    mohData,
    isLoading,
    error,
    isValidating,
  };
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

export const fetchReportLogsByLocationAndId = async (
  locationUuid: any,
  reportId: number,
  ac = new AbortController(),
) => {
  const results = await openmrsFetch(`${BASE_URL}/logs?locationUuid=${locationUuid}&report_id=${reportId}`, {
    signal: ac.signal,
  });
  return results.data;
};
