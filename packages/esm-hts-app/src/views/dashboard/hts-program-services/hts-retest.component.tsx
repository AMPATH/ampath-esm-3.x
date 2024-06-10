import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@openmrs/esm-patient-common-lib';

const HtsRetest: React.FC = () => {
  const { t } = useTranslation();

  const headerHtsRetest = t('htsRetest', 'HTS Retest');

  return (
    <>
      <EmptyState displayText={headerHtsRetest} headerTitle={headerHtsRetest} />
    </>
  );
};

export default HtsRetest;
