import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const SYSTEM_PROMPT = `You are Mohamed Ncib's AI portfolio assistant. Be concise and direct. Keep answers under 80 words.

About Mohamed:
- Product Strategist in Tunisia
- Email: mohamed.ncib@polytechnicien.tn
- Expertise: product strategy, market research, UX, data & analytics
- Contact: LinkedIn, Instagram, Facebook, GitHub, WhatsApp

Direct business inquiries to email or the "Let's build an experience" button. No long explanations.`;

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
  const controllerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  const parseSSE = useCallback((text) => {
    const lines = text.split('\n');
    const results = [];
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || !line.startsWith('data: ')) continue;
      const data = line.slice(6).trim();
      if (data === '[DONE]') continue;
      try {
        const parsed = JSON.parse(data);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) results.push(content);
      } catch {
        // skip invalid JSON
      }
    }
    return results;
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        { role: 'user', content: userMessage },
      ];

      const response = await fetch('/nvidia-api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_NVIDIA_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'nvidia/nemotron-3-ultra-550b-a55b',
          messages: apiMessages,
          temperature: 0.7,
          top_p: 0.9,
          max_tokens: 256,
          stream: true,
          extra_body: {
            chat_template_kwargs: { enable_thinking: true },
            reasoning_budget: 16384,
          },
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error ${response.status}: ${errorText}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';
      let buffer = '';

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      let reading = true;

      while (reading) {
        const { done, value } = await reader.read();
        if (done) {
          reading = false;
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const chunks = parseSSE(buffer);

        if (chunks.length > 0) {
          buffer = buffer.slice(buffer.indexOf(chunks[chunks.length - 1] || '') + (chunks[chunks.length - 1] || '').length);
          assistantContent += chunks.join('');
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: 'assistant', content: assistantContent };
            return updated;
          });
        }
      }

      if (!assistantContent.trim()) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: 'assistant',
            content: 'I received an empty response. Please try again or reach out via email at mohamed.ncib@polytechnicien.tn.',
          };
          return updated;
        });
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('AI Assistant error:', error);
        const message = error?.message || 'Unknown error';
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `Error: ${message}. Please try again later or reach out directly via email.`,
          },
        ]);
      }
    } finally {
      setIsLoading(false);
      controllerRef.current = null;
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
