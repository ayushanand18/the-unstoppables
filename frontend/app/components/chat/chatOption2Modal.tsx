import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

interface Message {
  text: string;
  user: 'user' | 'bot';
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, { text: currentMessage, user: 'user' }]);
      // Add logic here to process the message and ask the next question
      setCurrentMessage('');
    }
  };

  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="flex-grow border rounded p-4 bg-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 ${
              message.user === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={currentMessage}
          onChange={(e: any) => setCurrentMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatComponent;
