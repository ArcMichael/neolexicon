// src/route/route-config.tsx

import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { lazy } from 'react';

const PrivateRoute = lazy(() => import('../route/private-route'));

const NotFoundPage = lazy(() => import('../page/not-found'));
const LoginPage = lazy(() => import('../page/login'));
const HomePage = lazy(() => import('../page/home'));
const HelpPage = lazy(() => import('../page/help'));

const SettingsPage = lazy(() => import('../page/settings'));
const MainPage = lazy(() => import('../page/main'));
const ListPage = lazy(() => import('../page/list'));
const WordPage = lazy(() => import('../page/word'));

export interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  showInSider: boolean;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <PrivateRoute children={<HomePage />} />,
    title: 'welcome',
    icon: <UserOutlined />,
    showInSider: true,
  },
  {
    path: '/login',
    element: <LoginPage />,
    title: 'login',
    icon: <UploadOutlined />,
    showInSider: false,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
    title: 'settings',
    icon: <UploadOutlined />,
    showInSider: true,
  },
  {
    path: '/main',
    element: <MainPage />,
    title: 'd3',
    icon: <UploadOutlined />,
    showInSider: true,
  },
  {
    path: '/list',
    element: <ListPage />,
    title: 'list',
    icon: <UploadOutlined />,
    showInSider: true,
  },
  {
    path: '/word',
    element: <WordPage />,
    title: 'word',
    icon: <UploadOutlined />,
    showInSider: false,
  },
  {
    path: '/help',
    element: <HelpPage />,
    title: 'help',
    icon: <UploadOutlined />,
    showInSider: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    title: 'notFound',
    icon: <UploadOutlined />,
    showInSider: false,
  },
];

export default routes;
