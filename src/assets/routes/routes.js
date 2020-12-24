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
    label: 'ProfilePage',
    exact: true,
    component: lazy(() => import('../../pages/ProfilePage/ProfilePage')),
    private: true,
    restricted: false,
  },
];

export const homeRoute = routes.find(route => route.label === 'AuthPage');
export const profileRoute = routes.find(route => route.label === 'ProfilePage');
