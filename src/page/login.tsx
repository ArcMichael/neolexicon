import { Button, message } from 'antd';
import React, { useCallback } from 'react';
// import { FormattedMessage } from 'react-intl';
import WithSimpleLayout from '../layout/with-simple-layout';
import { useAccount } from '../context/account-context';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { token, login } = useAccount();
  const navigate = useNavigate();
  const handleLogin = useCallback(async () => {
    const knownPrivateKey =
      '0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef1234567'; // 已知的 PrivateKey
    // sessionStorage.setItem('privateKey', knownPrivateKey);
    message.success(`Login Successful! ${knownPrivateKey}`);
    // navigate('/'); // 跳转到首页或指定页面
    login(knownPrivateKey);
  }, [login]);

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '24px' }}>
      <h1>Login Page</h1>
      {token ? (
        <Button
          style={{
            backgroundColor: 'green',
            color: 'white',
            margin: '16px 0',
          }}
          block
          onClick={() => navigate('/')}
        >
          Go
        </Button>
      ) : (
        <Button
          type='primary'
          block
          onClick={handleLogin}
          style={{ marginTop: '16px' }}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default WithSimpleLayout(LoginPage);
