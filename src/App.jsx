import './App.css';
import { Counseling } from './pages/Counseling';
import { MyHistory } from './pages/MyHistory';
import { Upload } from './pages/Upload';
import { Layout, Menu } from 'antd';
import { UserOutlined, CheckCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Header className="nav-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>MIND STEP</h1>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">상담 하기</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CheckCircleOutlined />}>
              <Link to="/history">분석 결과</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
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
