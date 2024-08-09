import { Layout } from 'antd';

const WithSimpleLayout = (WrappedComponent: React.FC): React.FC => {
  const HOC: React.FC = () => {
    return (
      <Layout>
        <WrappedComponent />
      </Layout>
    );
  };
  return HOC;
};

export default WithSimpleLayout;
