import { Layout } from 'antd';

import LayoutHeader from './layout-header';
import LayoutFooter from './layout-footer';
import LayoutContent from './layout-content';

const WithSimpleLayout = (WrappedComponent: React.FC): React.FC => {
  const HOC: React.FC = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <LayoutHeader />
        <LayoutContent>
          <WrappedComponent />
        </LayoutContent>
        <LayoutFooter />
      </Layout>
    );
  };
  return HOC;
};

export default WithSimpleLayout;
