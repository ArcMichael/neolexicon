import { Layout, theme } from 'antd';
import React, { ReactNode } from 'react';
import Breadcrumbs from '../component/bread-crumbs';

const { Content } = Layout;

interface LayoutContentProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

const LayoutContent: React.FC<LayoutContentProps> = ({
  children,
  showBreadcrumbs = true,
}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {showBreadcrumbs && <Breadcrumbs />}
      {children}
    </Content>
  );
};

export default LayoutContent;
