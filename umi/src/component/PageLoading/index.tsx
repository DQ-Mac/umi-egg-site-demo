import { Spin } from 'antd';

export default () => (
  <div style={{ display: 'flex', width: '100%', height: '100%' }}>
    <Spin style={{ margin: 'auto' }} delay={1000} size="large" />
  </div>
);
