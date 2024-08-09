import { Layout } from 'antd';

const WithCustomLayout = (WrappedComponent: React.FC) => {
  const HOC: React.FC = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <WrappedComponent />
      </Layout>
    );
  };
  return HOC;
};

export default WithCustomLayout;
