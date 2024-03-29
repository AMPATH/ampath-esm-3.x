import { openmrsFetch } from '@openmrs/esm-framework';

export async function PostToEid(uuid: string, body: any) {
  const abortController = new AbortController();

  return openmrsFetch(`/ws/rest/v1/order/${uuid}/fulfillerdetails/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    signal: abortController.signal,
    body: body,
  });
}
