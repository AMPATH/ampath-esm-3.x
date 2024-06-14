import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './bread-crumb.scss';

const UseBreadcrumb = () => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/reports">Reports</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default UseBreadcrumb;
