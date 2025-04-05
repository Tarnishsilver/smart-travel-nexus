
import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatbotSection = () => {
  return (
    <section className="py-16 relative" id="chatbot">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary-light font-poppins">
            Smart Itinerary Planner
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-light-gray">
            Ask our AI assistant anything about your travel plans and get personalized recommendations.
          </p>
        </div>
        
        <div className="glass-card max-w-4xl mx-auto overflow-hidden">
          <div className="bg-[#1a1f2c] p-4 flex items-center gap-3 border-b border-white/10">
            <div className="bg-primary-light rounded-full p-2">
              <MessageSquare className="w-5 h-5 text-darker" />
            </div>
            <h3 className="font-medium">Travel Assistant</h3>
          </div>
          
          <div className="p-0">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/k02nLd-9lz_j0No33lcaN"
              width="100%"
              style={{ height: "600px", minHeight: "600px" }}
              frameBorder="0"
              className="bg-transparent"
            ></iframe>
            <script
              src="https://www.chatbase.co/embed.min.js"
              id="chatbase-script"
              defer
            ></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
