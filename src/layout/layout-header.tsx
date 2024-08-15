import React from 'react';

import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import UserMenu from '../component/user-menu';
import { useSider } from '../context/sider-context';

const { Header } = Layout;

interface LayoutHeaderProps {
  showUserMenu?: boolean;
}

const LayoutHeader: React.FC<LayoutHeaderProps> = ({ showUserMenu = true }) => {
  const { collapsed, setCollapsed } = useSider();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header
      style={{
        padding: 0,
        background: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapse}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
          data-testid='collapse-toggle-button'
        />
      </div>
      {showUserMenu && (
        <div style={{ marginRight: '16px' }}>
          <UserMenu />
        </div>
      )}
    </Header>
  );
};

export default LayoutHeader;
