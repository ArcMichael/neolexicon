import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, message, Modal, Row, Col } from 'antd';
import WithCustomLayout from '../layout/with-custom-layout';
import { useToken } from '../context/token-context'; // 假设你的 TokenContext 文件路径

type FormType = {
  token?: string;
};

const App: React.FC = () => {
  const { setToken, removeToken, token } = useToken(); // 获取设置和移除 token 的方法

  const onFinish: FormProps<FormType>['onFinish'] = values => {
    if (values.token) {
      setToken(values.token);
      message.success('Token saved successfully!');
    } else {
      message.warning('Please enter a token.');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error('Submit failed:', errorInfo);
  };

  const showConfirm = () => {
    Modal.confirm({
      title: 'Are you sure you want to clear the token?',
      content: 'This action will remove the token from localStorage.',
      onOk() {
        removeToken();
        message.success('Token cleared successfully!');
      },
      onCancel() {
        message.info('Token clearing cancelled.');
      },
    });
  };

  return (
    <Form
      name='eudic-token'
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      style={{ maxWidth: 600, margin: 'auto', padding: '24px' }}
      initialValues={{ token }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item<FormType>
        label='Eudic Token'
        name='token'
        rules={[{ required: true, message: 'Please input your Eudic Token!' }]}
      >
        <Input placeholder={token || 'Enter your Eudic Token'} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Row gutter={16}>
          <Col>
            <Button type='primary' htmlType='submit'>
              Save Token
            </Button>
          </Col>
          <Col>
            <Button danger onClick={showConfirm}>
              Clear Token
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default WithCustomLayout(App);
