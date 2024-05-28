import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@openmrs/esm-patient-common-lib';
const htsEnrolmentList: React.FC = () => {
  const { t } = useTranslation();

  const headerHtsEnrolment = t('htsEnrolment', 'HTS Enrolment');

  return (
    <>
      <EmptyState displayText={headerHtsEnrolment} headerTitle={headerHtsEnrolment} />
    </>
  );
};

export default htsEnrolmentList;
