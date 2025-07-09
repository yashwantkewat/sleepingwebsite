// src/components/Chat.js
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ChatWidget() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-20">
            <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="bg-stone-700 hover:bg-stone-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
                <MessageCircle className="h-6 w-6" />
            </button>

            {isChatOpen && (
                <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-xl border border-stone-200">
                    <div className="bg-stone-700 text-white p-4 rounded-t-lg">
                        <h3 className="font-medium">Chat with us</h3>
                    </div>
                    <div className="p-4 h-64 overflow-y-auto">
                        <div className="bg-stone-100 p-3 rounded-lg mb-3">
                            <p className="text-sm text-stone-700">
                                Hello! How can we help you find the perfect sleep solution today?
                            </p>
                        </div>
                    </div>
                    <div className="p-4 border-t border-stone-200">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full p-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-amber-600"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
