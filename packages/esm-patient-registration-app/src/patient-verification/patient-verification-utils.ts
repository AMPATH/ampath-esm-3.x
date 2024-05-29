import { showModal } from '@openmrs/esm-framework';
import { type FormikProps } from 'formik';
import { type ClientRegistryPatient, type RegistryPatient } from './verification-types';
import counties from './assets/counties.json';
import { type FormValues } from '../patient-registration/patient-registration.types';
import { capitalize } from 'lodash-es';

export function handleClientRegistryResponse(
  clientResponse: ClientRegistryPatient,
  props: FormikProps<FormValues>,
  searchTerm: string,
) {
  if (clientResponse?.clientExists === false) {
    const nupiIdentifiers = {
      ['nationalId']: {
        initialValue: searchTerm,
        identifierUuid: undefined,
        selectedSource: { uuid: '', name: '' },
        preferred: false,
        required: false,
        identifierTypeUuid: '58a47054-1359-11df-a1f1-0026b9348838',
        identifierName: 'Kenyan National ID Number',
        identifierValue: searchTerm,
      },
    };
    const dispose = showModal('empty-client-registry-modal', {
      onConfirm: () => {
        props.setValues({ ...props.values, identifiers: { ...props.values.identifiers, ...nupiIdentifiers } });
        dispose();
      },
      close: () => dispose(),
    });
  }

  if (clientResponse?.clientExists) {
    const {
      client: {
        middleName,
        lastName,
        firstName,
        contact,
        country,
        countyOfBirth,
        residence,
        identifications,
        gender,
        dateOfBirth,
        isAlive,
        clientNumber,
        educationLevel,
        occupation,
        maritalStatus,
      },
    } = clientResponse;

    const nupiIdentifiers = {
      ['nationalId']: {
        initialValue: identifications !== undefined && identifications[0]?.identificationNumber,
        identifierUuid: undefined,
        selectedSource: { uuid: '', name: '' },
        preferred: false,
        required: false,
        identifierTypeUuid: '58a47054-1359-11df-a1f1-0026b9348838',
        identifierName: 'Kenyan National ID Number',
        identifierValue: identifications !== undefined && identifications[0]?.identificationNumber,
      },

      ['nationalUniquePatientIdentifier']: {
        identifierTypeUuid: 'cba702b9-4664-4b43-83f1-9ab473cbd64d',
        identifierName: 'National Unique Patient Identifier (NUPI)',
        identifierValue: clientNumber,
        initialValue: clientNumber,
        identifierUuid: undefined,
        selectedSource: { uuid: '', name: '' },
        preferred: false,
        required: false,
      },
    };

    const dispose = showModal('confirm-client-registry-modal', {
      onConfirm: () => {
        props.setValues({
          ...props.values,
          familyName: lastName,
          middleName: middleName,
          givenName: firstName,
          gender: clientResponse.client.gender,
          birthdate: new Date(dateOfBirth),
          isDead: !isAlive,
          attributes: {
            '72a759a8-1359-11df-a1f1-0026b9348838': contact?.primaryPhone,
            'b0a08406-09c0-4f8b-8cb5-b22b6d4a8e46': contact?.secondaryPhone,
            '2f65dbcb-3e58-45a3-8be7-fd1dc9aa0faa': contact?.emailAddress ?? '',
          },
          address: {
            address1: residence?.address,
            address2: '',
            address4: capitalize(residence?.ward ?? ''),
            cityVillage: residence?.village,
            stateProvince: capitalize(residence?.subCounty ?? ''),
            countyDistrict: counties.find((county) => county.code === parseInt(residence?.county))?.name,
            country: 'Kenya',
            postalCode: residence?.address,
          },
          identifiers: { ...props.values.identifiers, ...nupiIdentifiers },
          obs: {
            'a899a9f2-1350-11df-a1f1-0026b9348838':
              props.values.concepts.find((concept) =>
                concept.display?.toLowerCase()?.includes(clientResponse.client.maritalStatus?.toLowerCase()),
              )?.uuid ?? '',
            'a89e48ae-1350-11df-a1f1-0026b9348838':
              props.values.concepts.find((concept) =>
                concept.display?.toLowerCase()?.includes(clientResponse.client.educationLevel?.toLowerCase()),
              )?.uuid ?? '',
            'a8a0a00e-1350-11df-a1f1-0026b9348838':
              clientResponse.client.occupation === undefined || clientResponse.client.occupation === null
                ? 'a899e0ac-1350-11df-a1f1-0026b9348838'
                : props.values.concepts.find(
                    (concept) => concept.display?.toLowerCase() === clientResponse.client.occupation?.toLowerCase(),
                  )?.uuid ?? 'a8aaf3e2-1350-11df-a1f1-0026b9348838',
          },
        });
        dispose();
      },
      close: () => dispose(),
      patient: clientResponse.client,
    });
  }
}

export function generateNUPIPayload(formValues: FormValues): RegistryPatient {
  const educationLevel = formValues.concepts.find(
    (concept) => concept.uuid === formValues.obs['a89e48ae-1350-11df-a1f1-0026b9348838'],
  );
  const occupation = formValues.concepts.find(
    (concept) => concept.uuid === formValues.obs['a8a0a00e-1350-11df-a1f1-0026b9348838'],
  );
  const maritalStatus = formValues.concepts.find(
    (concept) => concept.uuid === formValues.obs['a899a9f2-1350-11df-a1f1-0026b9348838'],
  );

  let createRegistryPatient: RegistryPatient = {
    firstName: formValues?.givenName,
    middleName: formValues?.middleName,
    lastName: formValues?.familyName,
    gender: formValues?.gender === 'Male' ? 'male' : 'female',
    dateOfBirth: new Date(formValues.birthdate).toISOString(),
    isAlive: !formValues.isDead,
    residence: {
      county: `0${counties.find((county) => county.name.includes(formValues.address['countyDistrict']))?.code}`,
      subCounty: formValues.address['stateProvince']?.toLocaleLowerCase(),
      ward: formValues.address['address4']?.toLocaleLowerCase(),
      village: formValues.address['cityVillage'],
      landmark: formValues.address['address2'],
      address: formValues.address['postalCode'],
    },
    nextOfKins: [],
    contact: {
      primaryPhone: formValues.attributes['72a759a8-1359-11df-a1f1-0026b9348838'],
      secondaryPhone: formValues.attributes['b0a08406-09c0-4f8b-8cb5-b22b6d4a8e46'],
      emailAddress: formValues.attributes['2f65dbcb-3e58-45a3-8be7-fd1dc9aa0faa'],
    },
    country: 'KE',
    countyOfBirth: `0${counties.find((county) => county.name.includes(formValues.address['countyDistrict']))?.code}`,
    educationLevel: educationLevel?.display?.toLowerCase() ?? '',
    religion: '',
    occupation: occupation?.display?.toLowerCase() ?? '',
    maritalStatus: maritalStatus?.display?.toLowerCase() ?? '',
    originFacilityKmflCode: '',
    nascopCCCNumber: '',
    identifications: [
      {
        identificationType: 'national-id',
        identificationNumber: formValues.identifiers['nationalId']?.identifierValue,
      },
    ],
  };
  return createRegistryPatient;
}
