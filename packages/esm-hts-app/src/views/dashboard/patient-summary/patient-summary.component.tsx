import React from 'react';
import { EmptyState } from '@openmrs/esm-patient-common-lib';
import { useTranslation } from 'react-i18next';

const HtsPatientSummary: React.FC = () => {
  const { t } = useTranslation();

  const headerCharacteristics = t('characteristics', 'Characteristics');
  const headerHIVMonitoring = t('HIVMonitoring', 'HIV Monitoring');
  const headerLastVisitDetails = t('lastVisitDetails', 'Last Visit Details');

  return (
    <>
      <EmptyState displayText={headerCharacteristics} headerTitle={headerCharacteristics} />

      <EmptyState displayText={headerHIVMonitoring} headerTitle={headerHIVMonitoring} />

      <EmptyState displayText={headerLastVisitDetails} headerTitle={headerLastVisitDetails} />
    </>
  );
};

export default HtsPatientSummary;
