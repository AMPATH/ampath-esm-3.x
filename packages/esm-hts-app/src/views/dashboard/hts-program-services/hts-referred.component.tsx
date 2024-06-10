import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@openmrs/esm-patient-common-lib';

const HtsReferred: React.FC = () => {
  const { t } = useTranslation();

  const headerHtsReferred = t('htsReferred', 'HTS Referred');

  return (
    <>
      <EmptyState displayText={headerHtsReferred} headerTitle={headerHtsReferred} />
    </>
  );
};

export default HtsReferred;
