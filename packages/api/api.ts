import { openmrsFetch, getConfig } from '@openmrs/esm-framework';
import useSWR from 'swr';

const BASE_WS_API_URL = '/rest/v2/amrs/';
const config = await getConfig('@ampath/esm-preappointment-app');

export function generateIdentifier(source: string) {
  return openmrsFetch(`/ws/rest/v1/idgen/identifiersource/${source}/identifier`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: {},
  });
}

export function getPreappointment() {
  return openmrsFetch(`${BASE_WS_API_URL}preappointment`).then(({ data }) => {
    if (data) {
      return data;
    }
    return null;
  });
}
