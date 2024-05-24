import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OtzDashboard from './hts.component';

const Root: React.FC = () => {
  const basePath = window.getOpenmrsSpaBase() + 'home/hts';

  return (
    <BrowserRouter basename={basePath}>
      <Routes>
        <Route path="/" element={<OtzDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
