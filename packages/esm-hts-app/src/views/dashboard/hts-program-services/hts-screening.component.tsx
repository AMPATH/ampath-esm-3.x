import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@openmrs/esm-patient-common-lib';

const HtsScreening: React.FC = () => {
  const { t } = useTranslation();

  const headerHtsScreening = t('htsScreening', 'HTS Screening');

  return (
    <>
      <EmptyState displayText={headerHtsScreening} headerTitle={headerHtsScreening} />
    </>
  );
};

export default HtsScreening;
