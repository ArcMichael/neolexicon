// src/Layout/siteMap.tsx
import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const SiteMap: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'left', padding: '24px 50px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={2}>Site Map and Features</Title>
          <Paragraph>
            Overview of the main sections and features of the website.
          </Paragraph>
        </Col>
        <Col span={24} md={6}>
          <Title level={4}>General</Title>
          <ul>
            <li>Home / Login</li>
            <li>Settings</li>
          </ul>
        </Col>
        <Col span={24} md={6}>
          <Title level={4}>Main View</Title>
          <ul>
            <li>Main Visualization</li>
            <li>Word Details (Parametrized View)</li>
            <li>Explore Network</li>
          </ul>
        </Col>
        <Col span={24} md={6}>
          <Title level={4}>Word List & Details</Title>
          <ul>
            <li>Word List Overview</li>
            <li>Word Details</li>
          </ul>
        </Col>
        <Col span={24} md={6}>
          <Title level={4}>Help & Support</Title>
          <ul>
            <li>Help</li>
            <li>Support</li>
          </ul>
        </Col>
      </Row>
    </Footer>
  );
};

export default SiteMap;
