import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@openmrs/esm-patient-common-lib';

const HtsInitial: React.FC = () => {
  const { t } = useTranslation();

  const headerHtsInitial = t('htsInitial', 'HTS Initial');

  return (
    <>
      <EmptyState displayText={headerHtsInitial} headerTitle={headerHtsInitial} />
    </>
  );
};

export default HtsInitial;
