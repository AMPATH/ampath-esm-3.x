import { type FetchResponse, openmrsFetch, showNotification, showToast, showSnackbar } from '@openmrs/esm-framework';
import { generateNUPIPayload, handleClientRegistryResponse } from './patient-verification-utils';
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import {
  type ConceptAnswers,
  type ConceptResponse,
  type FormValues,
} from '../patient-registration/patient-registration.types';

export function searchClientRegistry(
  identifierType: string,
  searchTerm: string,
  token: string,
  countryCode: string = 'KE',
) {
  const url = `https://afyakenyaapi.health.go.ke/partners/registry/search/${countryCode}/${identifierType}/${searchTerm}`;
  return fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json());
}

export function savePatientToClientRegistry(formValues: FormValues) {
  const createdRegistryPatient = generateNUPIPayload(formValues);
  return fetch(`https://afyakenyaapi.health.go.ke/partners/registry`, {
    headers: { Authorization: `Bearer ${formValues.token}`, 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(createdRegistryPatient),
  });
}

export async function handleSavePatientToClientRegistry(
  formValues: FormValues,
  setValues: (values: FormValues, shouldValidate?: boolean) => void,
  inEditMode: boolean,
) {
  const mode = inEditMode ? 'edit' : 'new';
  switch (mode) {
    case 'edit': {
      try {
        const searchResponse = await searchClientRegistry(
          'national-id',
          formValues.identifiers['nationalId'].identifierValue,
          formValues.token,
        );

        // if client does not exists post client to registry
        if (searchResponse?.clientExists === false) {
          postToRegistry(formValues, setValues);
        }
      } catch (error) {
        showSnackbar({
          title: 'Client registry error',
          subtitle: `${error}`,
          timeoutInMs: 10000,
          kind: 'error',
          isLowContrast: true,
        });
      }
      return;
    }
    case 'new': {
      postToRegistry(formValues, setValues);
    }
  }
}

export function useConceptAnswers(conceptUuid: string): { data: Array<ConceptAnswers>; isLoading: boolean } {
  const { data, error, isLoading } = useSWR<FetchResponse<ConceptResponse>, Error>(
    `/ws/rest/v1/concept/${conceptUuid}`,
    openmrsFetch,
  );
  if (error) {
    showToast({
      title: error.name,
      description: error.message,
      kind: 'error',
    });
  }
  return { data: data?.data?.answers ?? [], isLoading };
}

const urlencoded = new URLSearchParams();
// urlencoded.append('client_id', 'palladium.partner.client');
// urlencoded.append('client_secret', '28f95b2a');
// urlencoded.append('grant_type', 'client_credentials');
// urlencoded.append('scope', 'DHP.Gateway DHP.Partners');

urlencoded.append('client_id', 'ampath.partner.client');
urlencoded.append('client_secret', '3ae8a7f6');
urlencoded.append('grant_type', 'client_credentials');
urlencoded.append('scope', 'DHP.Gateway DHP.Partners');

const swrFetcher = async (url) => {
  const res = await fetch(url, {
    method: 'POST',
    body: urlencoded,
    redirect: 'follow',
  });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.') as any;
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export function useGlobalProperties() {
  const { data, isLoading, error } = useSWRImmutable(
    `https://afyakenyaidentityapi.health.go.ke/connect/token`,
    swrFetcher,
    { refreshInterval: 864000 },
  );
  return { data: data, isLoading, error };
}

async function postToRegistry(
  formValues: FormValues,
  setValues: (values: FormValues, shouldValidate?: boolean) => void,
) {
  try {
    const clientRegistryResponse = await savePatientToClientRegistry(formValues);
    if (clientRegistryResponse.ok) {
      const savedValues = await clientRegistryResponse.json();
      const nupiIdentifier = {
        ['nationalUniquePatientIdentifier']: {
          identifierTypeUuid: 'cba702b9-4664-4b43-83f1-9ab473cbd64d',
          identifierName: 'National Unique Patient Identifier (NUPI)',
          identifierValue: savedValues['clientNumber'],
          initialValue: savedValues['clientNumber'],
          identifierUuid: undefined,
          selectedSource: { uuid: '', name: '' },
          preferred: false,
          required: false,
        },
      };
      setValues({ ...formValues, identifiers: { ...formValues.identifiers, ...nupiIdentifier } });
      showToast({
        title: 'Posted patient to client registry successfully',
        description: `The patient has been saved to client registry`,
        kind: 'success',
      });
    } else {
      const responseError = await clientRegistryResponse.json();
      const errorMessage = Object.values(responseError.errors ?? {})
        .map((error: any) => error.join())
        .toString();
      setValues({
        ...formValues,
        attributes: {
          ...formValues.attributes,
          ['5553d509-f03a-4982-8e16-0d6f3d70fb8b']: 'Failed validation',
          ['d8f4d295-3f31-47ec-b377-825bd38820b2']: 'Failed',
        },
      });
      showNotification({
        title: responseError.title,
        description: errorMessage,
        kind: 'warning',
        millis: 150000,
      });
    }
  } catch (error) {
    showNotification({ kind: 'error', title: 'NUPI Post failed', description: JSON.stringify(error) });
  }
}

export const useFacilityName = (facilityCode) => {
  const apiUrl = `/ws/rest/v1/amrs/facilityName?facilityCode=${facilityCode}`;
  const { data, error, isLoading } = useSWRImmutable<FetchResponse>(apiUrl, openmrsFetch);

  return {
    facilityName: data ? data?.data : null,
    isLoading: isLoading,
    isError: error,
  };
};
