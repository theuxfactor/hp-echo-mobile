import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Smile, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
  quickReplies?: string[];
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface = ({ isOpen, onClose }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your HP Virtual Assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickReplies: ["Product info", "Support", "Pricing"]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you with that! Can you provide more details?",
        "Great question! Let me find the best solution for you.",
        "I understand. Would you like me to connect you with a specialist?",
        "That's a popular request. Here are some options that might work for you.",
      ];
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: ["Yes, please", "Tell me more", "No, thanks"]
      };

      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response to quick reply
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Perfect! I'll help you with that right away.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiResponse]);
    }, 800);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: `📎 Uploaded: ${file.name}`,
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, userMessage]);

      // Simulate AI response to file upload
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "I've received your file! Let me analyze it for you.",
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-end p-4 z-50 sm:items-center sm:justify-center">
      <div className="bg-background rounded-t-3xl sm:rounded-3xl w-full max-w-md h-[90vh] sm:h-[600px] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-4 rounded-t-3xl sm:rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <div className="text-lg font-bold">HP</div>
            </div>
            <div>
              <h3 className="font-semibold text-lg">HP Assistant</h3>
              <p className="text-sm text-primary-foreground/80">Virtual Assistant</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-primary-foreground hover:bg-white/20 rounded-full w-8 h-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="space-y-2">
              <div className={cn(
                "flex",
                message.isUser ? "justify-end" : "justify-start"
              )}>
                <div className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2 break-words",
                  message.isUser
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground ml-4"
                    : "bg-secondary text-foreground mr-4"
                )}>
                  <p className="text-sm">{message.text}</p>
                  <p className={cn(
                    "text-xs mt-1 opacity-70",
                    message.isUser ? "text-right" : "text-left"
                  )}>
                    {message.timestamp}
                  </p>
                </div>
              </div>

              {/* Quick Replies */}
              {message.quickReplies && !message.isUser && (
                <div className="flex flex-wrap gap-2 ml-2">
                  {message.quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-2 bg-secondary rounded-full p-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Send a message..."
              className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full w-8 h-8 p-0 text-muted-foreground hover:text-foreground"
            >
              <Smile className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleFileUpload}
              className="rounded-full w-8 h-8 p-0 text-muted-foreground hover:text-foreground"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              size="sm"
              className="rounded-full w-8 h-8 p-0 bg-gradient-to-r from-primary to-accent hover:shadow-lg disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            className="hidden"
            accept="image/*,application/pdf,.doc,.docx,.txt"
          />
          
          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-3 px-2">
            AI Powered. Double check important details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;