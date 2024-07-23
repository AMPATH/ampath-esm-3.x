import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BillableServicesDashboard } from './dashboard/dashboard.component';
import AddBillableService from './create-edit/add-billable-service.component';
import { SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import styles from './billable-services.scss';
import BillingHeader from '../billing-header/billing-header.component';
import { Wallet, Money } from '@carbon/react/icons';
import { UserHasAccess, navigate } from '@openmrs/esm-framework';
import BillWaiver from './bill-waiver/bill-waiver.component';
import BillingTariffs from './billing-tariffs/billing-tariffs.component';
import AddTariffsService from './billing-tariffs/add-billings-tariffs-service.component';
const basePath = `${window.spaBase}/billable-services`;
const BillableServiceHome: React.FC = () => {
  const { t } = useTranslation();

  const handleNavigation = (path: string) => {
    navigate({ to: `${basePath}/${path}` });
  };

  return (
    <BrowserRouter basename={`${window.spaBase}/billable-services`}>
      <main className={styles.mainSection}>
        <section>
          <SideNav>
            <SideNavItems>
              <SideNavLink onClick={() => handleNavigation('')} renderIcon={Wallet} isActive>
                {t('billableServices', 'Billable Services')}
              </SideNavLink>
              <UserHasAccess privilege="coreapps.systemAdministration">
                <SideNavLink onClick={() => handleNavigation('waive-bill')} renderIcon={Money}>
                  {t('billWaiver', 'Bill Waiver')}
                </SideNavLink>
              </UserHasAccess>
              <UserHasAccess privilege="coreapps.systemAdministration">
                <SideNavLink onClick={() => handleNavigation('bill-tariffs')} renderIcon={Money}>
                  {t('billTariffs', 'Insurance Tariffs')}
                </SideNavLink>
              </UserHasAccess>
            </SideNavItems>
          </SideNav>
        </section>
        <section>
          <BillingHeader title={t('billServicesManagement', 'Bill services management')} />
          <Routes>
            <Route path="/" element={<BillableServicesDashboard />} />
            <Route path="/add-service" element={<AddBillableService />} />
            <Route path="/waive-bill" element={<BillWaiver />} />
            <Route path="/bill-tariffs" element={<BillingTariffs />} />
            <Route path="/add-tariffs" element={<AddTariffsService />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default BillableServiceHome;
