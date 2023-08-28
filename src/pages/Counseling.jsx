import { useState } from "react";
import "./Counseling.css"
import { List, Avatar, Typography, Input, Button } from 'antd';

const { Text } = Typography;

const chatData = [
    { id: 1, sender: 'User', message: 'Hello there!' },
    { id: 2, sender: 'Bot', message: 'Hi, how can I help you?' },
];

export const Counseling = _ => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    return <>
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
            <Input.TextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                autoSize={{ minRows: 1, maxRows: 6 }}
            />
            <button className="send-button" onClick={() => console.log("Sending...")}>
                Send
            </button>
        </div>
    </>
}