import { openmrsFetch } from '@openmrs/esm-framework';
import useSWR from 'swr';

// Configuration
const BASE_URL = '/ws/rest/v1/amrscore/reports';

// GET Fetcher
const getFetcher = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
};

// POST Fetcher
const postFetcher = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`An error occurred while fetching data: ${error.message}`);
  }
};

const useApi = (endpoint, data, fetcher) => {
  const { data: response, isLoading, error, isValidating } = useSWR([endpoint, data], () => fetcher(endpoint, data));

  return {
    response: response?.results ?? [],
    isLoading,
    error,
    isValidating,
  };
};

export const generateSpReport = (result) => {
  const { response, isLoading, error, isValidating } = useApi(`${BASE_URL}/generate`, result, postFetcher);

  return {
    response,
    isLoading,
    error,
    isValidating,
  };
};

export const getSPReports = () => {
  const { data, isLoading, error, isValidating } = useSWR(
    'https://ngx.ampath.or.ke/amrs/ws/rest/v1/amrscore/reports',
    getFetcher,
  );

  // console.log('Data:', data);
  return {
    data,
    isLoading,
    error,
    isValidating,
  };
};
