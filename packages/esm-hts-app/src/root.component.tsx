import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HtsDashboard from './hts.component';

const Root: React.FC = () => {
  const basePath = window.getOpenmrsSpaBase() + 'home/hts';

  return (
    <BrowserRouter basename={basePath}>
      <Routes>
        <Route path="/" element={<HtsDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
