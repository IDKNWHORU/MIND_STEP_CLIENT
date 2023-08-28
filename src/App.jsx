import './App.css';
import { Counseling } from './pages/Counseling';
import { MyHistory } from './pages/MyHistory';
import { Upload } from './pages/Upload';
import { Layout, Menu } from 'antd';
import { UserOutlined, CheckCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const { Header, Content, Footer } = Layout;

function App() {
  const [selectedMenuKey, setSelectedMenuKey] = useState(localStorage.getItem('selectedMenuKey') ?? 'home');

  useEffect(() => {
    // 페이지 로딩 시 localStorage에서 selectedMenuKey 값을 가져옴
    const storedKey = localStorage.getItem('selectedMenuKey');
    if (storedKey) {
      setSelectedMenuKey(storedKey);
    }
  }, []);

  const handleMenuSelect = (e) => {
    const selectedKey = e.key;
    setSelectedMenuKey(selectedKey);

    // 선택된 메뉴를 localStorage에 저장
    localStorage.setItem('selectedMenuKey', selectedKey);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Header className="nav-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>MIND STEP</h1>
          <Menu theme="light" mode="horizontal" selectedKeys={[selectedMenuKey]} onSelect={handleMenuSelect}>
            <Menu.Item key="home" icon={<UserOutlined />}>
              <Link to="/">상담 하기</Link>
            </Menu.Item>
            <Menu.Item key="history" icon={<CheckCircleOutlined />}>
              <Link to="/history">분석 결과</Link>
            </Menu.Item>
            <Menu.Item key="upload" icon={<UploadOutlined />}>
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
        <Footer style={{ textAlign: 'center' }}><h1>MIND STEP</h1></Footer>
      </Layout>
    </Router>
  );
}

export default App;
