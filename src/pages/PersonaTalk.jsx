import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Typography, Input, Button, List } from 'antd';
import { SearchOutlined, SendOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './PersonaTalk.css';
import { Upload } from './Upload';
import { Counseling } from './Counseling';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

export const PersonaTalk = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputTextChange = (value) => {
    setInputText(value);
  };

  const handleSendMessage = () => {
    if (inputText) {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="dark" style={{ background: '#30475e' }}>
        <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">User 1</Menu.Item>
          <Menu.Item key="2">User 2</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content  >
          <div className="content-container">
            <div className="chat-container">
              <Title level={3} className="chat-title">
                페르소나 톡
              </Title>
              <Counseling />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};