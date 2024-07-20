import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        const response = await axios.post('http://localhost:5002/api/chat', { message: input });
        const newMessage = { text: response.data.reply, user: 'bot' };
        setMessages([...messages, { text: input, user: 'user' }, newMessage]);
        setInput('');
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.user === 'user' ? 'user-message' : 'bot-message'}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
                placeholder="Ask about books, recommendations, etc."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
