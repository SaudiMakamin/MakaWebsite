import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguageContext } from './language-provider';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AiAssistant() {
  const { language } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const smartPrompts = language === 'ar' ? [
    'ما هي خدمات مكامن البحرية؟',
    'أخبرني عن مشاريع الأوف شور',
    'ما هي مؤهلات أرامكو لديكم؟',
    'كيف يمكنني الشراكة معكم؟'
  ] : [
    'What are Makamin\'s offshore services?',
    'Tell me about your marine fleet',
    'How can I partner with Makamin?',
    'What are your Aramco qualifications?'
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response (placeholder for future OpenAI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: language === 'ar' 
          ? 'مرحباً! أنا مساعد مكامن الذكي. نحن شركة رائدة في الخدمات البحرية والبترولية مع مؤهلات أرامكو. كيف يمكنني مساعدتك اليوم؟'
          : 'Hello! I\'m Makamin\'s AI assistant. We\'re a leading offshore and petroleum services company with Aramco qualifications. How can I help you today?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <>
      {/* AI Assistant Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl group"
        >
          <div className="relative">
            <Bot className="w-8 h-8 text-white" />
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </motion.div>
          </div>
        </Button>
        
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity 
          }}
        />
      </motion.div>

      {/* AI Assistant Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {language === 'ar' ? 'مساعد مكامن الذكي' : 'Ask Makamin AI'}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {language === 'ar' ? 'مدعوم بالذكاء الاصطناعي' : 'Powered by AI'}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="h-80 overflow-y-auto p-6 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <Bot className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {language === 'ar' ? 'مرحباً! كيف يمكنني مساعدتك؟' : 'Hi! How can I help you?'}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {language === 'ar' ? 'اسأل عن خدماتنا، مشاريعنا، أو أي شيء آخر' : 'Ask about our services, projects, or anything else'}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                )}

                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: i * 0.2 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Smart Prompts */}
              {messages.length === 0 && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-600 mb-3">
                    {language === 'ar' ? 'اقتراحات ذكية:' : 'Smart prompts:'}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {smartPrompts.map((prompt, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handlePromptClick(prompt)}
                        className="text-left p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span>{prompt}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message...'}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {language === 'ar' ? 'مدعوم بالذكاء الاصطناعي - قيد التطوير' : 'AI-powered - Coming Soon'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}