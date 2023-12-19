import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu } from '../menu';

const HOME = {
  HOME: lazy(() => import('../pages/home')),
};

const presentation: RouteProps[] = [
  {
    path: dashboardPagesMenu.homePage.path,
    element: <HOME.HOME />,
  },
];

const contents = [...presentation];

export default contents;
