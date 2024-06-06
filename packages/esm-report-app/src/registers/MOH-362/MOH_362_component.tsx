import React from 'react';
import styles from './MOH-362.scss';
import { TableContainer, TableHead, TableRow, TableHeader } from '@carbon/react';
import { Table } from '@carbon/react';
import { TableBody } from '@carbon/react';
import { TableCell } from '@carbon/react';
import RenderMOH362a from './MOH-362a';
import RenderMOH362b from './MOH-362b';

const RenderMOH362: React.FC = () => (
  <div>
    <RenderMOH362a />
    <RenderMOH362b />
  </div>
);
export default RenderMOH362;
