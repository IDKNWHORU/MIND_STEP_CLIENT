import "./Counseling.css"
import { List, Avatar, Typography } from 'antd';

const { Text } = Typography;

const chatData = [
    { id: 1, sender: 'User', message: 'Hello there!' },
    { id: 2, sender: 'Bot', message: 'Hi, how can I help you?' },
];

export const Counseling = _ => (
    <>
        <h2>상담 이력</h2>
        <List
            itemLayout="horizontal"
            dataSource={chatData}
            renderItem={(item) => (
                <List.Item className={`chat-bubble ${item.sender.toLowerCase()}`}>
                    <List.Item.Meta
                        avatar={<Avatar>{item.sender[0]}</Avatar>}
                        title={item.sender}
                        description={item.message}
                    />
                </List.Item>
            )}
        />
        <div className="chat-input">
            <input type="text" placeholder="메시지 입력" />
            <button>전송</button>
        </div>
    </>
)