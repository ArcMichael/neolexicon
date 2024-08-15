import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import WithCustomLayout from '../layout/with-custom-layout';

const NotFound: React.FC = () => (
  <Result
    status='404'
    title='404'
    subTitle='对不起，您访问的页面不存在。'
    extra={
      <Link to={'/'}>
        <Button type='primary'>返回首页</Button>
      </Link>
    }
  />
);

export default WithCustomLayout(NotFound);
