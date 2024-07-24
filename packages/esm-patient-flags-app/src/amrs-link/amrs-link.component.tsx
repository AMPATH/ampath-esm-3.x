import React from 'react';
import { ConfigurableLink } from '@openmrs/esm-framework';
import { useTranslation } from 'react-i18next';

export default function AMRSLink() {
  const { t } = useTranslation();
  return <ConfigurableLink to={'/openmrs/amrs/userHome.page?'}>{t('AMRSHome', 'AMRS POC Home')}</ConfigurableLink>;
}
