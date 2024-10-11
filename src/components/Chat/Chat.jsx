import React, { useEffect, useState } from 'react';
import { sendMessage, getMessages } from '../../api';
import SendMessage from '../SendMessage/SendMessage';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        const response = await getMessages();
        setMessages(response.data);
    };

    // useEffect(() => {
    //     fetchMessages();
    //     const intervalId = setInterval(fetchMessages, 2000); // Fetch messages every 2 seconds
    //     return () => clearInterval(intervalId); // Cleanup on unmount
    // }, []);

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <strong>{msg[0]}:</strong> {msg[1]} <em>{new Date(msg[2]).toLocaleString()}</em>
                    </div>
                ))}
            </div>
            <SendMessage onMessageSent={fetchMessages} />
        </div>
    );
};

export default Chat;
