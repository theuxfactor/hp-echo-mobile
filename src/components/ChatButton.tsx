import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ChatInterface from "./ChatInterface";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          onClick={() => setIsChatOpen(true)}
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </div>
      </div>
      
      <ChatInterface 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};

export default ChatButton;