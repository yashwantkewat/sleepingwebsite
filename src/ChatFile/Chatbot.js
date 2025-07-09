import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '👋 Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const updatedMessages = [...messages, { role: 'user', content: input }];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await groq.chat.completions.create({
        model: 'llama3-70b-8192',
        messages: updatedMessages,
      });

      const reply = response.choices[0]?.message;
      if (reply) {
        setMessages((prev) => [...prev, reply]);
      } else {
        throw new Error('No reply from Groq.');
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '⚠️ Sorry, something went wrong.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white p-3 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="absolute bottom-16 right-0 w-[90vw] max-w-md h-[80vh] sm:h-[500px] bg-teal-300 rounded-xl shadow-2xl border border-stone-300 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-stone-700 to-stone-800 text-white p-4 flex justify-between items-center">
            <span className="font-semibold text-lg">💬 Chat Assistant</span>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-red-400 text-sm"
              title="Close"
            >
              ❌
            </button>
          </div>

          {/* Messages */}
          <div className="p-3 flex-1 overflow-y-auto custom-scroll space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-yellow-200 text-right rounded-br-none'
                      : 'bg-slate-400 text-left text-white rounded-bl-none'
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: msg.content.replace(/\n/g, '<br/>'),
                    }}
                  />
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-sm text-gray-400 animate-pulse">Typing...</div>
            )}
            <div ref={messageEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-stone-300 bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className={`bg-amber-500 text-white px-4 py-2 text-sm rounded-lg transition ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-600'
                }`}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
