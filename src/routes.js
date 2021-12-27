import { lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';
import Login from './pages/Login';
import Info from './pages/Info';

const routerConfig = [
  {
    path: '/',
    exact: true,
    component: UserLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Login,
      },
    ],
  },
  {
    path: '/home',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Info,
      },
    ],
  },
];
export default routerConfig;
