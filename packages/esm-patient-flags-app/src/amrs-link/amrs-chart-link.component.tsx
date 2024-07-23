import React from 'react';
import { Button } from '@carbon/react';
import { Home } from '@carbon/react/icons';
import { useTranslation } from 'react-i18next';
import { usePatientId } from '../hooks/usePatientId';
import { navigate } from '@openmrs/esm-framework';

const AMRSChartLink = () => {
  const { t } = useTranslation();
  const [, , , , patientUuid] = window.location.pathname.split('/');
  const { isLoading, patient } = usePatientId(patientUuid);

  return (
    <Button
      onClick={() =>
        navigate({
          to: `https://ngx.ampath.or.ke/ng2-amrs/#/patient-dashboard/patient/${patient?.patientId}/general/general/landing-page`,
        })
      }
      renderIcon={Home}
      style={{ margin: ' 0 0.25rem' }}>
      {t('2xChart', 'AMRS POC')}
    </Button>
  );
};

export default AMRSChartLink;
