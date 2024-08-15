import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import WithCustomLayout from '../layout/with-custom-layout';
import { openExternalLink } from '../utils/utils';

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  const handleContactUsClick = () => {
    const url = 'https://github.com/ArcMichael/neolexicon/issues';
    openExternalLink(url);
  };

  return (
    <div style={{ padding: '24px' }}>
      <header>
        <Title>Welcome to Our Platform</Title>
        <Paragraph>
          Explore the future of decentralized trading with us. Join a community
          dedicated to transparency and security.
        </Paragraph>
      </header>

      <section>
        <Title level={2}>About Us</Title>
        <Paragraph>
          Our platform is designed to empower users with a secure and efficient
          trading environment. We prioritize user experience and low transaction
          fees.
        </Paragraph>
      </section>

      <section>
        <Title level={2}>Features</Title>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card title='Marketplace'>
              <Paragraph>
                Engage in a dynamic and user-friendly marketplace where you can
                trade with confidence.
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='Secure Transactions'>
              <Paragraph>
                Experience top-notch security with our blockchain-powered
                transaction processes.
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='User-Friendly Interface'>
              <Paragraph>
                Navigate through an intuitive interface designed for both new
                and experienced traders.
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='Low Fees'>
              <Paragraph>
                Benefit from low transaction fees, making trading more
                profitable for you.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      <section>
        <Title level={2}>Our Mission</Title>
        <Paragraph>
          Our mission is to provide a transparent, secure, and decentralized
          platform for global traders. We believe in empowering users with the
          tools they need to succeed.
        </Paragraph>
      </section>

      <section>
        <Title level={2}>How It Works</Title>
        <Paragraph>
          Our platform utilizes the latest blockchain technology to ensure
          secure transactions. Get started in just a few steps and join the
          decentralized trading revolution.
        </Paragraph>
      </section>

      <section>
        <Title level={2}>Contact Us</Title>
        <Paragraph>
          Have questions or need support? We're here to help. Visit our GitHub
          page to report issues or get in touch with us.
          <Button
            type='link'
            icon={<GithubOutlined />}
            onClick={handleContactUsClick}
          >
            Contact Us
          </Button>
        </Paragraph>
      </section>
    </div>
  );
};

export default WithCustomLayout(HomePage);
