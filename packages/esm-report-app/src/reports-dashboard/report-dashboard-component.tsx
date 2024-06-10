import React, { useState } from 'react';
import { RenderReportTab } from './report-tab/report-tabs';
import RenderMOH362 from '../registers/MOH-362/MOH_362_component';
import NutritionRegisters from '../registers/MOH-407/nutrition-register-component';
import PrepRegister from '../registers/MOH-267/prep-activity-register.component';
import RenderMOH405 from '../registers/MOH-405/MOH_405_component';
import RenderMOH406 from '../registers/MOH-406/MOH_406_component';
import { useTranslation } from 'react-i18next';

const ReportDashboard: React.FC = () => {
  return (
    <>
      <RenderReportTab />
      <RenderMOH362 />
      {/* <RenderMOH405 />
      <RenderMOH406 />

      <RenderMOH362 />

      <NutritionRegisters />

      <PrepRegister /> */}
    </>
  );
};

export default ReportDashboard;
