/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect, useRef } from 'react';

// Message type definition
interface Message {
  id: string;
  sender: 'user' | 'admin';
  content: string;
  timestamp: string;
  avatar: string;
  name: string;
}

// Mock user data
export function TicketSupport() {
  // State for messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'user',
      content: `I'm having trouble accessing my account. I've tried resetting my password, but I'm not receiving the reset email. Can you please help?`,
      timestamp: '10:00 AM',
      avatar: 'https://i.pravatar.cc/40?u=emily2',
      name: 'Emily Carter'
    },
    {
      id: '2',
      sender: 'admin',
      content: `Hi Emily, I'm sorry to hear you're having trouble. I've checked your account, and it seems there might be an issue with the email address on file. Could you please confirm the email you're trying to use?`,
      timestamp: '10:05 AM',
      avatar: 'https://i.pravatar.cc/40?u=sarah',
      name: 'Sarah Miller'
    },
    {
      id: '3',
      sender: 'user',
      content: `Yes, it's emily.carter@email.com. I've been using this email for years, so I'm not sure why it's not working.`,
      timestamp: '10:10 AM',
      avatar: 'https://i.pravatar.cc/40?u=emily2',
      name: 'Emily Carter'
    },
    {
      id: '4',
      sender: 'admin',
      content: `Thank you for confirming. I've updated your email address in our system. Please try resetting your password again and let me know if you still don't receive the email.`,
      timestamp: '10:15 AM',
      avatar: 'https://i.pravatar.cc/40?u=sarah2',
      name: 'Sarah Miller'
    }
  ]);
  
  // State for input field
  const [inputValue, setInputValue] = useState('');
  // State for loading
  const [isLoading, setIsLoading] = useState(false);
  // Ref for messages container to auto-scroll
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Function to get current time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };
  
  // Function to handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add admin message (current user)
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'admin',
      content: inputValue,
      timestamp: getCurrentTime(),
      avatar: 'https://i.pravatar.cc/40?u=sarah2',
      name: 'Sarah Miller'
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate receiving a response after 2-3 seconds
    setTimeout(() => {
      const responses = [
        "Thank you for your message. I'm looking into this issue for you.",
        "I understand your concern. Let me check our system for more information.",
        "I appreciate your patience. I'm working on a solution for you.",
        "Thanks for the update. I'll make sure this gets resolved as soon as possible.",
        "I see what's happening now. Let me help you with this."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'user',
        content: randomResponse,
        timestamp: getCurrentTime(),
        avatar: 'https://i.pravatar.cc/40?u=emily2',
        name: 'Emily Carter'
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsLoading(false);
    }, 2000 + Math.random() * 1000); // Random delay between 2-3 seconds
  };
  
  // Function to handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-10 relative z-50 bg-gray-50 dark:bg-transparent min-h-screen">
      {/* Users Table */}
      <Card className="bg-white dark:bg-transparent text-gray-800 dark:text-white rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6">
          <div className="w-full space-y-6">
            {/* Header */}
            <p className="text-xl font-bold text-black! dark:text-white!">Ticket #12345</p>

            {/* Order Information */}
            <div>
              <p className="font-semibold text-purple-600 dark:text-purple-400 mb-2 border-b border-gray-200 dark:border-gray-700 pb-4">Ticket Information</p>
              <div className=" rounded-lg overflow-hidden">
                <div className="grid grid-cols-1  md:grid-cols-2 ">
                  {[
                    { label: 'Status', value: 'Open' },
                    { label: 'Priority', value: 'High' },
                    { label: 'Assigned To', value: 'Sarah Miller' },
                    { label: 'Created At', value: '2024-01-15 10:00 AM' },
                    { label: 'Last Updated', value: '2024-01-16 02:00 PM' },
                    { label: 'Customer', value: 'Emily Carter' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col border-b border-gray-200 dark:border-white/5 py-3 "
                    >
                      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Chat Section */}
          <div className="mt-8 bg-white dark:bg-transparent! text-gray-800 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Message Thread</p>
                {/* <div className="text-sm text-gray-400">Ticket #12345 • High Priority</div> */}
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {/* Render messages from state */}
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-3 max-w-[85%] sm:max-w-[70%] ${message.sender === 'admin' ? 'flex-row-reverse' : ''}`}>
                      <img
                        src={message.avatar}
                        alt={message.name}
                        className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 object-cover flex-shrink-0"
                      />
                      <div className={`flex flex-col ${message.sender === 'admin' ? 'items-end' : 'items-start'}`}>
                        <div className={`${message.sender === 'admin' ? 'bg-purple-100 dark:bg-[#46214E]' : 'bg-gray-100 dark:bg-[#241A3E]'} text-gray-800 dark:text-[#CED9E0] px-4 py-3 rounded-2xl ${message.sender === 'admin' ? 'rounded-br-none' : 'rounded-bl-none'}`}>
                          <p className='text-sm'>
                            {message.content}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {message.name} • {message.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-3 max-w-[85%] sm:max-w-[70%]">
                      <img
                        src="https://i.pravatar.cc/40?u=emily2"
                        alt="Emily Carter"
                        className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 object-cover flex-shrink-0"
                      />
                      <div className="flex flex-col items-start">
                        <div className="bg-gray-100 dark:bg-[#241A3E] px-4 py-3 rounded-2xl rounded-bl-none text-gray-800 dark:text-[#CED9E0]">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Ref for auto-scrolling */}
                <div ref={messagesEndRef} />
              </div>

              {/* Reply Input */}
              <div className="border-t border-gray-200 dark:border-white/10 pt-4 space-y-4">
                <div className='flex gap-3'>
                  <img
                    src="https://i.pravatar.cc/40?u=sarah2"
                    alt="Sarah Miller"
                    className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Type your reply here..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-white dark:bg-[#1C192A] border h-12 border-gray-300 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-gray-800 dark:text-[#CED9E0] placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600"
                    />
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div className="flex gap-2">
                    <button className="bg-gray-100 dark:bg-[#1C192A] text-gray-800 dark:text-white px-4 py-2 rounded-lg text-sm transition hover:bg-gray-200 dark:hover:bg-[#2a2438]">
                      Block User
                    </button>
                    <button className="bg-gray-100 dark:bg-[#1C192A] text-gray-800 dark:text-white px-4 py-2 rounded-lg text-sm transition hover:bg-gray-200 dark:hover:bg-[#2a2438]">
                      Change Priority Status
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gray-100 dark:bg-[#1C192A] text-gray-800 dark:text-white px-4 py-2 rounded-lg text-sm transition hover:bg-gray-200 dark:hover:bg-[#2a2438]">
                      Close Ticket
                    </button>
                    <button 
                      onClick={handleSendMessage}
                      className="bg-purple-600 dark:bg-[#FD00E3] rounded-[20px] px-4 py-2 text-white text-sm transition hover:bg-purple-700 dark:hover:bg-[#e100cc]"
                    >
                      Send
                    </button>   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}