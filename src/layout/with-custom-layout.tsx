import { Layout } from 'antd';
import { useSider } from '../context/sider-context';
import LayoutContent from './layout-content';
import LayoutFooter from './layout-footer';
import LayoutHeader from './layout-header';
import LayoutSider from './layout-sider';

const WithCustomLayout = (WrappedComponent: React.FC) => {
  const HOC: React.FC = () => {
    const { collapsed } = useSider();
    const siderWidth = collapsed ? 80 : 200; // 根据侧边栏的实际宽度调整此值
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <LayoutSider />
        <Layout
          style={{ marginLeft: siderWidth, transition: 'margin-left 0.2s' }}
        >
          <LayoutHeader />
          <LayoutContent>
            <WrappedComponent />
          </LayoutContent>
          <LayoutFooter />
        </Layout>
      </Layout>
    );
  };
  return HOC;
};

export default WithCustomLayout;
