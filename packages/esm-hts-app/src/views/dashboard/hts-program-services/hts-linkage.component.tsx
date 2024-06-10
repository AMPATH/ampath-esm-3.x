import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@openmrs/esm-patient-common-lib';

const HtsLinkage: React.FC = () => {
  const { t } = useTranslation();

  const headerHtsLinkage = t('htsLinkage', 'HTS Linkage');

  return (
    <>
      <EmptyState displayText={headerHtsLinkage} headerTitle={headerHtsLinkage} />
    </>
  );
};

export default HtsLinkage;
