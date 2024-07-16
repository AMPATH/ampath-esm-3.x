import React from 'react';
import styles from './about.scss';
import { useModules } from '../hooks/useModules';
import { useDefaultFacility, useSystemSetting } from '../hooks/useSystemSetting';
import { formatDatetime } from '@openmrs/esm-framework';
import FrontendModule from '../frontend-modules/frontend-modules.component';
const packageInfo = require('../release-version.js');

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { modules, isLoading } = useModules();
  const AMRS = modules.find(({ uuid }) => uuid === 'amrs');
  //const { mflCodeResource } = useSystemSetting('facility.mflcode');
  //const mflCode = mflCodeResource ? `(${mflCodeResource?.value ?? ''})` : '';
  const facilityName = useDefaultFacility();
  const { title, container, aboutBody, aboutPage } = styles;
  const { VERSION } = packageInfo;

  return (
    <div className={styles.main}>
      <div className={aboutPage}>
        <div className={container}>
          <div className={title}>
            <div>
              <h3>Government of Kenya</h3>
              <h4>Ministry of Health</h4>
            </div>
            <img src="https://portal.health.go.ke/assets/coa.ec23b38a.svg" alt="court_of_arms" width="50" height="50" />
          </div>
          <div className={aboutBody}>
            <p>AMPATH</p>
            <p>
              <img
                src="https://poc-test-builds.fra1.digitaloceanspaces.com/@brand/logo_with_tagline.svg"
                alt="court_of_arms"
                width="150"
                height="20"
              />
            </p>
            <p>AMRS Version</p>
            <p>{`v${AMRS?.version}`}</p>
            <p>SPA Version</p>
            <p>{`v${VERSION.version}`}</p>
            <p>Build date time</p>
            <p>{formatDatetime(new Date(VERSION.buildDate), { mode: 'standard' })}</p>
            <p>Facility code</p>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
      <FrontendModule />
    </div>
  );
};

export default About;
