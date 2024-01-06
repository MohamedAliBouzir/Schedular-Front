import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu, authPagesMenu, protectedRoutesMenu } from '../menu';
import Login from '../pages/auth/Login';

const HOME = {
  HOME: lazy(() => import('../pages/home')),
};
const PROTECTED = {
  WELCOME: lazy(() => import('../pages/welcome')),
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
  {
    path: protectedRoutesMenu.welcomingPage.path,
    element: <PROTECTED.WELCOME />,
  },
];

const contents = [...presentation];

export default contents;
