"use client"
import React from "react"
import { IPropsChatModal } from "../utilities/interfaces"
import { TextField } from "@mui/material"
import axios from 'axios';

const backendApiUrl = 'http://localhost:8000';

export interface ChatMessage {
  text: string;
  user: 'user' | 'bot';
}

interface SendMessageResponse {
  success: boolean;
  message: string;
}

export async function sendMessageToBackend(message: string): Promise<ChatMessage | null> {
  try {
    const response = await axios.post<SendMessageResponse>(`${backendApiUrl}/send-message`, {
      message,
    });

    if (response.data.success) {
      return {
        text: response.data.message,
        user: 'bot',
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error sending message to backend:', error);
    return null;
  }
}

const ChatOption1Modal  = (props: IPropsChatModal) => {
    const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = React.useState<string>('');

  const handleSendMessage = async () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, { text: currentMessage, user: 'user' }]);

      const botResponse = await sendMessageToBackend(currentMessage);
      if (botResponse) {
        setMessages([...messages, botResponse]);
      }

      setCurrentMessage('');
    }
  };

    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                Flipkart
            </div>
            <div className="flex flex-col bg-white flex-grow-1">

            </div>
            <div className="flex flex-row">
                <TextField 
                    id="multiline-flexible"
                    label="Type your message"
                    multiline
                    maxRows={4}>
                </TextField>
            </div>
        </div>
    )
}
export default ChatOption1Modal