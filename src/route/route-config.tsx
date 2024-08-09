import { UploadOutlined, UserOutlined } from '@ant-design/icons';

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
    element: <div>"/"</div>,
    title: 'home',
    icon: <UserOutlined />,
    showInSider: true,
  },
  {
    path: '/login',
    element: <div>login</div>,
    title: 'login',
    icon: <UploadOutlined />,
    showInSider: false,
  },
  {
    path: '*',
    element: <div>404</div>,
    title: 'notFound',
    icon: <UploadOutlined />,
    showInSider: false,
  },
];

export default routes;
