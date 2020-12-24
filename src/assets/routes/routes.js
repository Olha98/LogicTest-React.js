import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    label: 'AuthPage',
    exact: true,
    component: lazy(() => import('../../pages/AuthPage/AuthPage')),
    private: false,
    restricted: true,
  },

  {
    path: '/profile',
    label: 'MainPage',
    exact: true,
    component: lazy(() => import('../../pages/MainPage/MainePage')),
    private: true,
    restricted: false,
  }
];

export const homeRoute = routes.find(route => route.label === 'AuthPage');
export const mainRoute = routes.find(route => route.label === 'MainePage');
