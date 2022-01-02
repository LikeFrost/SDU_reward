import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';
import Login from './pages/Login';
import Info from './pages/Info';
import Reward from './pages/Reward';
import Suggestion from './pages/Suggestion';

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
      // {
      //   path: 'reward',
      //   exact: true,
      //   component: Reward,
      // },
      // {
      //   path: 'suggestion',
      //   exact: true,
      //   component: Suggestion,
      // },
    ],
  },
];
export default routerConfig;
