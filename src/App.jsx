import { CheckCircleOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link, Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Counseling } from './pages/Counseling';
import { MyHistory } from './pages/MyHistory';
import { Upload } from './pages/Upload';

const { Header, Content } = Layout;

function App() {
  const currentHash = window.location.hash === ''? '/': window.location.hash.slice(1);

  const [selectedMenuKey, setSelectedMenuKey] = useState(currentHash || 'home');

  const handleMenuSelect = (e) => {
    const selectedKey = e.key;
    setSelectedMenuKey(selectedKey);

  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Header className="nav-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>MIND STEP</h1>
          <Menu theme="light" mode="horizontal" selectedKeys={[selectedMenuKey]} onSelect={handleMenuSelect}>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to="/">상담 하기</Link>
            </Menu.Item>
            <Menu.Item key="/history" icon={<CheckCircleOutlined />}>
              <Link to="/history">분석 결과</Link>
            </Menu.Item>
            <Menu.Item key="/upload" icon={<UploadOutlined />}>
              <Link to="/upload">상담 데이터 업로드</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="chat-container">
            <Routes>
              <Route path="/" element={
                <Counseling />
              } />
              <Route path="/history" element={<MyHistory />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
