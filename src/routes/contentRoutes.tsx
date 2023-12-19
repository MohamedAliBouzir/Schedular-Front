import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu, authPagesMenu } from '../menu';
import Login from '../pages/auth/Login';

const HOME = {
  HOME: lazy(() => import('../pages/home')),
};

const presentation: RouteProps[] = [
  {
    path: authPagesMenu.login.path,
    element: <Login />,
  },
  {
    path: dashboardPagesMenu.homePage.path,
    element: <HOME.HOME />,
  },
];

const contents = [...presentation];

export default contents;
