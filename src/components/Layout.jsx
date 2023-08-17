import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from './pages/header/Headers';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Headers />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
