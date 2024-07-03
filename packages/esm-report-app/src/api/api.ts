import useSWR from 'swr';
import { Buffer } from 'buffer';
import { openmrsFetch, restBaseUrl, useConfig } from '@openmrs/esm-framework';
import { FacilityLocationsConfig } from '../config-schema';
import { type ReportData } from '../types';

export const BASE_URL = '/ws/rest/v1/amrsetl';
export const url = '/ws/rest/v1';

const username = '';
const password = '';
const basicAuthBase64 = Buffer.from(`${username}:${password}`).toString('base64');

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

async function postData(data: ReportData, url: string, ac = new AbortController()) {
  const response = await openmrsFetch(url, {
    signal: ac.signal,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.data;
}

export const generateMOH362Reports = (id) => {
  const { data, error, isLoading, isValidating } = useSWR(`${BASE_URL}/reports/view?id=${id}`, fetcher);

  const mohData = data ? (data as any)?.results : [];
  return {
    mohData,
    isLoading,
    error,
    isValidating,
  };
};

export const generateReportLogs = async (data: ReportData, ac = new AbortController()) => {
  const results = await openmrsFetch(`${BASE_URL}/reports/generate`, {
    signal: ac.signal,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return results.data;
};

export const getSPReports = () => {
  const { data, isLoading, error, isValidating } = useSWR(`${BASE_URL}/reports`, fetcher);

  const response = data ? (data as any)?.results : [];

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
  const results = await openmrsFetch(`${BASE_URL}/reports/logs?locationUuid=${locationUuid}&report_id=${reportId}`, {
    signal: ac.signal,
  });
  return results.data;
};

export const generateReportData = async (reportId: number, multiLocations: any, ac = new AbortController()) => {
  const results = await openmrsFetch(`${BASE_URL}/reports/view?id=${reportId}&multilocations=${multiLocations}`, {
    signal: ac.signal,
  });
  return results.data;
};

export const getParentLocation = async (locationUuid: string, ac = new AbortController()) => {
  const results = await openmrsFetch(`${BASE_URL}/parentlocation?locationUuid=${locationUuid}`, {
    signal: ac.signal,
  });
  return results.data;
};

export const getFacilityLocations = () => {
  const { data, error, isLoading, isValidating } = useSWR(`${url}/location?v=default`, async () => {
    const response = await openmrsFetch(`${url}/location?v=default`, {
      headers: {
        Authorization: `Basic ${basicAuthBase64}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
  });

  return {
    facilityLocations: data?.results ?? [],
    isLoading,
    error,
    isValidating,
  };
};

export const getLocations = async (locationUuid: any, ac = new AbortController()) => {
  const results = await openmrsFetch(`${url}/amrsetl/locations?locationUuid=${locationUuid}`, {
    signal: ac.signal,
  });
  return results.data;
};
