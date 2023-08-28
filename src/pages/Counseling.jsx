import { Avatar, Input, List } from 'antd';
import { useState } from "react";
import "./Counseling.css";

const chatData = [
    { id: 1, sender: '사용자', message: '상담 내용1' },
    { id: 2, sender: 'Bot', message: '응답 내용1' },
];

export const Counseling = _ => {
    const [message, setMessage] = useState("");

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