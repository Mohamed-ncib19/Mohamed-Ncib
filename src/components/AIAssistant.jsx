import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const SYSTEM_PROMPT = `You are Mohamed Ncib's AI portfolio assistant. Mohamed is a Product Strategist based in Tunisia with a background in web development and data science.

Key information about Mohamed:
- Role: Product Strategist
- Location: Tunisia
- Email: mohamed.ncib@polytechnicien.tn
- Expertise: Market intelligence, product vision, UX strategy, data & analytics, strategic execution
- Current focus: Data Science & AI
- Services: Product strategy, market research, UX research, cross-functional execution

When visitors ask about working with Mohamed, direct them to:
1. Use the "Let's build an experience" button to start a project
2. Reach out via email at mohamed.ncib@polytechnicien.tn
3. Connect on LinkedIn, Instagram, Facebook, GitHub, or WhatsApp

Be helpful, professional, and concise. Keep responses under 150 words unless detailed explanation is needed.`;

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m Mohamed\'s AI assistant. Ask me anything about his work, services, or how to get in touch.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: userMessage },
      ];

      const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_NVIDIA_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'nvidia/nemotron-3-super-120b-a12b',
          messages: apiMessages,
          temperature: 1,
          top_p: 0.95,
          max_tokens: 1024,
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      let reading = true;

      while (reading) {
        const { done, value } = await reader.read();
        if (done) {
          reading = false;
          break;
        }

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                assistantContent += content;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: 'assistant', content: assistantContent };
                  return updated;
                });
              }
            } catch {
              // skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again later or reach out directly via email.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex h-[500px] w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0F]/95 shadow-2xl backdrop-blur-xl sm:w-[380px]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9D4EDD]/20">
                <Bot className="h-4 w-4 text-[#B57EFF]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">AI Assistant</p>
                <p className="text-[0.65rem] text-white/40">Ask about Mohamed&apos;s work</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 transition hover:border-white/20 hover:text-white/70"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      message.role === 'user'
                        ? 'bg-white/10 text-white/60'
                        : 'bg-[#9D4EDD]/20 text-[#B57EFF]'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="h-3.5 w-3.5" />
                    ) : (
                      <Bot className="h-3.5 w-3.5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-white/10 text-white/90'
                        : 'bg-white/[0.06] text-white/75'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.content === '' && (
                <div className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9D4EDD]/20 text-[#B57EFF]">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="rounded-2xl bg-white/[0.06] px-4 py-2.5">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: '0s' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: '0.1s' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-white/[0.06] px-4 py-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9D4EDD] text-white transition hover:bg-[#B57EFF] disabled:opacity-30"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white/80'
            : 'bg-[#9D4EDD] text-white hover:bg-[#B57EFF] hover:shadow-[0_0_40px_-8px_rgb(157_78_221_/_0.5)]'
        }`}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>
    </div>
  );
}
