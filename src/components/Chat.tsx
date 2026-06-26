import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Trash2,
  User as UserIcon,
} from 'lucide-react';
import { askAI, Message } from '../lib/ai';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const WELCOME_TEXT = 'Hello! I am the IEEE MSIT AI Assistant. Ask me anything about our upcoming events, executive committees (Execom), chapters, achievements, or website details!';

const renderInlineMarkdown = (text: string) => {
  const boldAndLinkRegex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
  const parts = text.split(boldAndLinkRegex);

  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const url = linkMatch[2];
      const isExternal = url.startsWith('http') || url.startsWith('mailto');
      return (
        <a
          key={idx}
          href={url}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-blue-400 hover:underline font-semibold"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
};

const renderMessageText = (text: string) => {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    if (line.startsWith('### ')) {
      return (
        <h3 key={lineIdx} className="text-base font-bold text-blue-400 mt-2 mb-1">
          {renderInlineMarkdown(line.slice(4))}
        </h3>
      );
    }
    if (line.startsWith('#### ')) {
      return (
        <h4 key={lineIdx} className="text-sm font-bold text-slate-300 mt-2 mb-1">
          {renderInlineMarkdown(line.slice(5))}
        </h4>
      );
    }
    if (line.startsWith('## ')) {
      return (
        <h2 key={lineIdx} className="text-lg font-bold text-blue-300 mt-3 mb-2">
          {renderInlineMarkdown(line.slice(3))}
        </h2>
      );
    }
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const bulletContent = line.trim().slice(2);
      return (
        <li key={lineIdx} className="ml-4 list-disc text-slate-200">
          {renderInlineMarkdown(bulletContent)}
        </li>
      );
    }
    const numListMatch = line.trim().match(/^(\d+)\.\s(.*)/);
    if (numListMatch) {
      return (
        <li key={lineIdx} className="ml-4 list-decimal text-slate-200">
          {renderInlineMarkdown(numListMatch[2])}
        </li>
      );
    }
    return (
      <p key={lineIdx} className="min-h-[1em] mb-1">
        {renderInlineMarkdown(line)}
      </p>
    );
  });
};

const MAX_MESSAGES = 50;
const generateUUID = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uiError, setUiError] = useState<string | null>(null);

  // Avatar image load error states
  const [botAvatarError, setBotAvatarError] = useState(false);
  const [userAvatarError, setUserAvatarError] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Set initial welcome message on mount
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: WELCOME_TEXT,
        timestamp: new Date().toISOString(),
      },
    ]);
  }, []);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    setUiError(null);
    const userMsg: ChatMessage = {
      id: generateUUID(),
      role: 'user',
      text: trimmedInput,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMsg].slice(-MAX_MESSAGES);
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const historyForApi: Message[] = updatedMessages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

      const reply = await askAI(historyForApi);

      const botMsg: ChatMessage = {
        id: generateUUID(),
        role: 'model',
        text: reply,
        timestamp: new Date().toISOString(),
      };

      const finalMessages = [...updatedMessages, botMsg].slice(-MAX_MESSAGES);
      setMessages(finalMessages);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : '';
      const userFriendlyText = msg === 'EMPTY_RESPONSE'
        ? "I couldn't find an answer for that."
        : "Sorry, I couldn't process your request right now. Please try again in a moment.";

      setUiError(userFriendlyText);

      const errorMsg: ChatMessage = {
        id: generateUUID(),
        role: 'model',
        text: userFriendlyText,
        timestamp: new Date().toISOString(),
      };

      setMessages([...updatedMessages, errorMsg].slice(-MAX_MESSAGES));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your chat history?')) {
      const initialMsgs: ChatMessage[] = [
        {
          id: 'welcome',
          role: 'model',
          text: WELCOME_TEXT,
          timestamp: new Date().toISOString(),
        },
      ];
      setMessages(initialMsgs);
      setUiError(null);
    }
  };

  const formatTime = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  return (
    <div
      className="fixed bottom-6 right-10 z-50 font-sans"
      role="region"
      aria-label="IEEE Chat Assistant"
    >
      {/* Floating Toggle Button */}
      {!isOpen && (
        <div className="relative group">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(true);
            }}
            className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg transition-all transform hover:scale-110 active:scale-95 duration-200 cursor-pointer animate-pulse"
            aria-label="Open chat assistant"
            aria-haspopup="dialog"
          >
            <Bot className="w-8 h-8 transition-transform group-hover:rotate-12" />
          </button>
          <span className="absolute bottom-full mb-3 right-0 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            IEEE's own AI agent
          </span>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="w-[360px] sm:w-[410px] h-[580px] sm:h-[630px] max-h-[calc(100vh-100px)] bg-[#101B2E] border border-slate-800 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform scale-100 origin-bottom-right"
          role="dialog"
          aria-modal="true"
          style={{ contentVisibility: 'auto' }}
        >
          {/* Header */}
          <div className="bg-[rgb(11,10,10)] border-b border-slate-800 p-4 rounded-t-2xl flex justify-between items-center relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                {!botAvatarError ? (
                  <img
                    src="/IEEEWhiteLogowithTransparentBG.png"
                    alt="IEEE Logo"
                    className="w-6 h-6 object-contain"
                    onError={() => setBotAvatarError(true)}
                  />
                ) : (
                  <span className="font-bold text-blue-400 text-sm">AI</span>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 text-sm leading-none flex items-center gap-1.5">
                  IEEE <span className="text-blue-400">MSIT</span>
                </h3>
                <span className="text-[10px] text-slate-400">AI Assistant</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClear}
                className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
                title="Clear Chat History"
                aria-label="Clear chat messages"
              >
                <Trash2 className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
                title="Close Chat Panel"
                aria-label="Close chat assistant dialog"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800 scroll-smooth">
            {messages.map((msg) => {
              const isBot = msg.role === 'model';

              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[90%] items-start ${isBot ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                >
                  {/* Circular Avatar */}
                  <div
                    className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs select-none shadow-md border ${
                      isBot
                        ? 'bg-blue-900/30 border-blue-500/30 text-blue-400'
                        : 'bg-indigo-950/40 border-indigo-500/30 text-indigo-400'
                    }`}
                  >
                    {isBot ? (
                      !botAvatarError ? (
                        <img
                          src="/IEEEWhiteLogowithTransparentBG.png"
                          alt="Bot Avatar"
                          className="w-5.5 h-5.5 object-contain"
                          onError={() => setBotAvatarError(true)}
                        />
                      ) : (
                        <span>AI</span>
                      )
                    ) : !userAvatarError ? (
                      <img
                        src="/IEEEBlueLogowithWhiteBG.jpg"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                        onError={() => setUserAvatarError(true)}
                      />
                    ) : (
                      <UserIcon className="w-4.5 h-4.5 text-slate-400" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className="flex flex-col group/message max-w-[calc(100%-48px)]">
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm break-words leading-relaxed whitespace-pre-wrap ${
                        isBot
                          ? 'bg-[rgb(11,10,10)] border border-slate-800/80 text-slate-200 rounded-tl-none shadow-sm'
                          : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none shadow-md'
                      }`}
                    >
                      {isBot ? renderMessageText(msg.text) : msg.text}
                    </div>

                    {/* Timestamp */}
                    <div
                      className={`flex items-center gap-2 mt-1 ${isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <span className="text-[9px] text-slate-500 font-mono">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bouncing Typing Indicator */}
            {isLoading && (
              <div className="flex gap-3 max-w-[90%] mr-auto items-center">
                <div className="w-9 h-9 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center">
                  {!botAvatarError ? (
                    <img
                      src="/IEEEWhiteLogowithTransparentBG.png"
                      alt="Bot"
                      className="w-5.5 h-5.5 object-contain"
                      onError={() => setBotAvatarError(true)}
                    />
                  ) : (
                    <span className="font-bold text-blue-400 text-xs">AI</span>
                  )}
                </div>
                <div className="bg-[rgb(11,10,10)] border border-slate-800/80 text-slate-400 px-4 py-3 rounded-2xl rounded-tl-none text-xs flex items-center gap-1.5 shadow-sm">
                  <span className="text-slate-400 font-medium">Assistant is thinking</span>
                  <div className="flex gap-1 items-center ml-1">
                    <span
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Error Notification */}
            {uiError && (
              <div className="p-3.5 bg-red-950/20 border border-red-900/50 rounded-xl text-xs text-red-300 leading-relaxed shadow-lg">
                {uiError}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="bg-[rgb(11,10,10)] border-t border-slate-800 p-3 rounded-b-2xl flex gap-2 items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about IEEE MSIT..."
              disabled={isLoading}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors disabled:opacity-50"
              aria-label="Type message here"
            />

            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl transition-all flex items-center justify-center cursor-pointer active:scale-95 duration-150 shadow-md"
              aria-label="Send message button"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
