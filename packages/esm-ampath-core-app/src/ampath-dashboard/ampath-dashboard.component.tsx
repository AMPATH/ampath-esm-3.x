import React, { useEffect, useMemo, useState } from 'react';
import { attach, detach, ExtensionSlot, isDesktop, useExtensionSlotMeta, useLayoutType } from '@openmrs/esm-framework';
import styles from './ampath-dashboard.scss';
import { useParams } from 'react-router-dom';

const AmpathDashboard = () => {
  const { view } = useParams();
  const [dashboards, setDashboards] = useState([]);
  const metaLinks = useExtensionSlotMeta('dashboard-links-slot') as Record<string, any>;
  const metaFolders = useExtensionSlotMeta('dashboard-slot') as Record<string, any>;
  const [currentDashboard, setCurrentDashboard] = useState(null);
  const layout = useLayoutType();

  useEffect(() => {
    if (view) {
      setCurrentDashboard(dashboards.find((db) => db.name == view));
    } else if (!currentDashboard) {
      setCurrentDashboard(dashboards[0]);
    }
  }, [view, dashboards]);

  useEffect(() => {
    if (!isDesktop(layout)) {
      attach('nav-menu-slot', 'ampath-nav-items-ext');
    }
    return () => detach('nav-menu-slot', 'ampath-nav-items-ext');
  }, [layout]);

  useEffect(() => {
    const programSpecificLinks = metaFolders ? Object.values(metaFolders).filter((link) => link.isLink) : [];
    const linksWithDashboardMeta = [
      ...Object.values(metaLinks).filter((link) => Object.keys(link).length),
      ...programSpecificLinks,
    ];
    if (linksWithDashboardMeta.length) {
      setDashboards([...dashboards, ...linksWithDashboardMeta]);
    }
  }, [metaLinks, metaFolders]);

  const state = useMemo(() => {
    if (currentDashboard) {
      return { programme: currentDashboard?.config?.programme, dashboardTitle: currentDashboard.title };
    }
    return null;
  }, [currentDashboard]);

  return (
    <div className={styles.dashboardContainer}>
      {Object.values(metaFolders).map((f, index) => {
        return (
          <GroupAbleMenuItem
            groupSlot={f.slot}
            dashboards={dashboards}
            setDashboards={setDashboards}
            updateDashboardState={index == Object.keys(metaFolders).length - 1}
            key={index}
          />
        );
      })}
      {isDesktop(layout) && <ExtensionSlot name="ampath-nav-items-slot" key={layout} />}
      <div className={` ${styles.dashboardContent}`}>
        {currentDashboard && <ExtensionSlot name={currentDashboard.slot} state={state} />}
      </div>
    </div>
  );
};

const GroupAbleMenuItem = ({ groupSlot, dashboards, setDashboards, updateDashboardState }) => {
  const meta = useExtensionSlotMeta(groupSlot);
  useEffect(() => {
    if (meta && Object.keys(meta).length) {
      dashboards.push(...Object.values(meta).filter((entry) => Object.keys(entry).length));
      updateDashboardState && setDashboards([...dashboards]);
    }
  }, [meta]);

  return <></>;
};

export default AmpathDashboard;
