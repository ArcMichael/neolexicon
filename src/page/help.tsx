import React from 'react';
import { Row, Col, Typography, Card, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { openExternalLink } from '../utils/utils';
import WithCustomLayout from '../layout/with-custom-layout';

const { Title, Paragraph } = Typography;

const HelpPage: React.FC = () => {
  const handleContactUsClick = () => {
    // const url = 'https://github.com/ArcMichael/neolexicon/issues';
    const mailtoLink = 'mailto:hulen_20@hotmail.com';
    openExternalLink(mailtoLink);
  };

  return (
    <div style={{ padding: '24px' }}>
      <header>
        <Title>Help & Support</Title>
        <Paragraph>
          Welcome to the Help & Support page. This platform is designed to help
          you learn and remember English words through visualizations that
          connect related words, enhancing your learning experience. Below
          you'll find answers to common questions, a guide on how to use the
          platform, and ways to contact us for further assistance.
        </Paragraph>
      </header>

      <section>
        <Title level={2}>Frequently Asked Questions</Title>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card title='How does the word visualization feature work?'>
              <Paragraph>
                The platform uses D3.js to create interactive visualizations of
                words and their relationships. This helps you to remember words
                by seeing how they are connected, which can be especially useful
                for users with strong visual or associative memory.
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='How do I start learning new words?'>
              <Paragraph>
                You can begin by navigating to the main page where you can
                search for a word or explore the word network. As you interact
                with the visualizations, you'll see related words and can click
                on them to learn more.
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='Can I customize the visualization?'>
              <Paragraph>
                Yes, you can customize the visualization by adjusting parameters
                like the depth of connections between words, the layout style,
                and whether you prefer a network view or a list view.
              </Paragraph>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='How do I integrate with the Eudic API?'>
              <Paragraph>
                The platform uses the Eudic API to fetch detailed word
                definitions and examples. You can manage your API keys in the
                settings page, and these keys will be used to enrich your
                learning experience with accurate and up-to-date word data.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      {/* <section>
        <Title level={2}>User Guide</Title>
        <Paragraph>
          The user guide provides step-by-step instructions on how to use the
          platform, from setting up your account to exploring the word
          visualizations. You'll also learn how to import and export settings,
          and how to make the most of the customizable features.
        </Paragraph>
        <Button type='primary' onClick={handleContactUsClick}>
          View User Guide
        </Button>
      </section> */}

      <section>
        <Title level={2}>Contact Us</Title>
        <Paragraph>
          If you have any questions or need further assistance, please don't
          hesitate to contact us. Our support team is here to help you make the
          most out of this learning platform.
        </Paragraph>
        <Button
          type='link'
          icon={<MailOutlined />}
          onClick={handleContactUsClick}
        >
          Contact Support
        </Button>
      </section>
    </div>
  );
};

export default WithCustomLayout(HelpPage);
