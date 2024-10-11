import React, { useState } from 'react';
import { sendMessage } from '../../api';

const SendMessage = ({ onMessageSent }) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = async () => {
        if (user && message) {
            await sendMessage(user, message);
            setMessage(''); // Clear input
            onMessageSent(); // Trigger message update
        }
    };

    return (
        <div className="send-message">
            <input
                type="text"
                placeholder="Your Name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default SendMessage;
