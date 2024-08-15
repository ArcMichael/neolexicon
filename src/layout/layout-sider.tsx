import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSider } from '../context/sider-context';
import routes, { RouteConfig } from '../route/route-config';
import { Layout, Menu, MenuProps } from 'antd';

const { Sider } = Layout;

const LayoutSider: React.FC = () => {
  const navigate = useNavigate();
  const { collapsed, selectedKey, setSelectedKey, openKeys, setOpenKeys } =
    useSider();

  const renderMenuItems = (routes: RouteConfig[]): MenuProps['items'] =>
    routes
      .map(route => {
        if (route.children) {
          return {
            key: route.path,
            icon: route.icon,
            label: route.title,
            children: route.children
              .filter(child => child.showInSider)
              .map(child => ({
                key: child.path,
                icon: child.icon,
                label: route.title,
              })),
          };
        } else if (route.showInSider) {
          return {
            key: route.path,
            icon: route.icon,
            label: route.title,
          };
        } else {
          return null;
        }
      })
      .filter(item => item !== null);

  const handleMenuClick = ({ key }: { key: string }) => {
    setSelectedKey(key);
    navigate(key);
  };

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        bottom: 0,
        transition: 'width 0.2s',
      }}
    >
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        items={renderMenuItems(routes)}
        onClick={handleMenuClick}
        onOpenChange={handleOpenChange}
      />
    </Sider>
  );
};

export default LayoutSider;
