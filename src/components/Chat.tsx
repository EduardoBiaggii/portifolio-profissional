import { useState, useEffect, useRef } from 'react';
import './Chat.css';
import { getChatReply } from './chatReplies';

interface Message {
  id: number;
  type: 'user' | 'bot';
  text: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0 && !isTyping) return;

    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const send = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setMessages((prev) => [...prev, { id: Date.now(), type: 'user', text }]);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, type: 'bot', text: getChatReply(text) },
      ]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <section id="chat" className="section-inner">
      <div className="chat__header">
        <p className="chat__kicker">respostas instantaneas</p>
        <h2 className="section-title">Converse comigo</h2>
        <p className="chat__subtitle">
          Essa IA foi treinada com informacoes sobre mim. Pergunte o que quiser.
        </p>
      </div>

      <div className="chat__box">
        <div className="chat__neural" aria-hidden="true">
          <svg className="chat__neural-lines" viewBox="0 0 620 260" preserveAspectRatio="none">
            {/* Glow layer — wide blurred trails */}
            <path className="chat__path--glow" d="M18 190 C120 90 170 100 250 142 S390 210 492 82 S585 46 610 74" />
            <path className="chat__path--glow chat__path--glow-b" d="M40 70 C132 126 188 54 272 84 S396 134 460 116 S556 154 604 118" />
            <path className="chat__path--glow" d="M82 224 C164 180 216 220 302 166 S412 42 548 204" />
            <path className="chat__path--glow chat__path--glow-b" d="M132 28 C202 82 214 140 302 126 S430 66 506 28" />

            {/* Main animated dashed paths */}
            <path className="chat__path" d="M18 190 C120 90 170 100 250 142 S390 210 492 82 S585 46 610 74" />
            <path className="chat__path chat__path--b" d="M40 70 C132 126 188 54 272 84 S396 134 460 116 S556 154 604 118" />
            <path className="chat__path" style={{ animationDuration: '6.5s' }} d="M82 224 C164 180 216 220 302 166 S412 42 548 204" />
            <path className="chat__path chat__path--b" style={{ animationDuration: '8s' }} d="M132 28 C202 82 214 140 302 126 S430 66 506 28" />

            {/* Short connector lines between intersection nodes */}
            <line className="chat__connector" x1="250" y1="142" x2="272" y2="84" />
            <line className="chat__connector" x1="302" y1="166" x2="302" y2="126" />
            <line className="chat__connector" x1="492" y1="82" x2="460" y2="116" />

            {/* Signal particles traveling along paths */}
            <circle className="chat__particle" r="2.8">
              <animateMotion dur="5.8s" repeatCount="indefinite"
                path="M18 190 C120 90 170 100 250 142 S390 210 492 82 S585 46 610 74" />
            </circle>
            <circle className="chat__particle chat__particle--b" r="2.2">
              <animateMotion dur="7.2s" repeatCount="indefinite" begin="-2.4s"
                path="M40 70 C132 126 188 54 272 84 S396 134 460 116 S556 154 604 118" />
            </circle>
            <circle className="chat__particle" r="2.2">
              <animateMotion dur="6.5s" repeatCount="indefinite" begin="-4.1s"
                path="M82 224 C164 180 216 220 302 166 S412 42 548 204" />
            </circle>
            <circle className="chat__particle chat__particle--b" r="2">
              <animateMotion dur="8s" repeatCount="indefinite" begin="-1.6s"
                path="M132 28 C202 82 214 140 302 126 S430 66 506 28" />
            </circle>
          </svg>
          <span className="chat__node chat__node--one" />
          <span className="chat__node chat__node--two" />
          <span className="chat__node chat__node--three" />
          <span className="chat__node chat__node--four" />
          <span className="chat__scan" />
          <span className="chat__scan chat__scan--b" />
        </div>

        <div className="chat__messages">
          {messages.length === 0 && !isTyping && (
            <p className="chat__empty">Sua conversa comeca aqui...</p>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`chat__row chat__row--${msg.type}`}>
              <div className={`chat__bubble chat__bubble--${msg.type}`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat__row chat__row--bot">
              <div className="chat__bubble chat__bubble--bot chat__bubble--typing">
                Respondendo...
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        <div className="chat__input-row">
          <input
            type="text"
            className="chat__input"
            value={input}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            disabled={isTyping}
          />
          <button className="chat__send" onClick={send} disabled={isTyping}>
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}
