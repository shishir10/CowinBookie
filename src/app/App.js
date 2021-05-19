import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const HomePage = React.lazy(() => import('../components/pages/home-page'));

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const loading = (
  <div className='loader'>
    <Spin indicator={antIcon} />
  </div>
);

function App() {
  return (
    <React.Suspense fallback={loading}>
      <div style={{ width: '100%', margin: '0',}}>
            <HomePage />
      </div>
    </React.Suspense>    
  );
}

export default App;
