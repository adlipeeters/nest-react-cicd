import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet, Link, useRoutes, useLocation } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import Dashboard from './views/Dashboard'
import WebsiteLayout from './layouts/WebsiteLayout/WebsiteLayout';
import Login from './views/Auth/Login';

const App = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        // { index: true, element: <Landing /> },
        { index: true, path: '/', element: <Dashboard /> },
        { index: true, path: '/home', element: <Dashboard /> },
        { index: true, path: '/about', element: <Dashboard /> },
      ],
    },
    {
      path: '/login',
      element: <WebsiteLayout />,
      children: [
        // { index: true, element: <Landing /> },
        { index: true, path: '/login', element: <Login /> },
      ],
    },
  ];

  return useRoutes(routes);
};


export default App;
