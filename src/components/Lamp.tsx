import { useMemo } from 'react';
import './Lamp.css';

interface Props {
  isOn: boolean;
  onToggle: () => void;
}

function Stars({ visible }: { visible: boolean }) {
  const items = useMemo(() =>
    Array.from({ length: 260 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 88,
      r: Math.random() * 1.7 + 0.35,
      delay: Math.random() * 6,
      dur: Math.random() * 3 + 2,
      tone: Math.random(),
      shine: Math.random(),
    }))
  , []);

  return (
    <div className={`night-scene${visible ? ' night-scene--visible' : ''}`}>
      <div className="night-sky" />
      <div className="milky-way" />
      <div className="stars-field">
        {items.map(s => (
          <div
            key={s.id}
            className={`star${s.shine > 0.88 ? ' star--bright' : ''}`}
            style={{
              left: `${s.x}vw`,
              top: `${s.y}vh`,
              width: `${s.r * 2}px`,
              height: `${s.r * 2}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
              ['--star-tone' as string]: s.tone > 0.72 ? '#ffe7b0' : s.tone > 0.38 ? '#d8e6ff' : '#ffffff',
            }}
          />
        ))}
      </div>
      <div className="shooting-star shooting-star--one" />
      <div className="shooting-star shooting-star--two" />
      <div className="shooting-star shooting-star--three" />
    </div>
  );
}

function Moon() {
  return (
    <svg className="celestial-body moon-svg" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="crescent-mask">
          <rect width="44" height="44" fill="white" />
          <circle cx="29" cy="17" r="13.5" fill="black" />
        </mask>
        <radialGradient id="moon-grad" cx="34%" cy="26%" r="72%">
          <stop offset="0%" stopColor="#fff8df" />
          <stop offset="46%" stopColor="#d8cfb9" />
          <stop offset="100%" stopColor="#8b8376" />
        </radialGradient>
        <linearGradient id="moon-rim" x1="11" y1="10" x2="31" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff1bd" stopOpacity="0.95" />
          <stop offset="1" stopColor="#6f685f" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <g mask="url(#crescent-mask)">
        <circle cx="20" cy="23" r="13.5" fill="url(#moon-grad)" />
        <circle cx="16.8" cy="17.6" r="1.25" fill="#9d9485" opacity="0.42" />
        <circle cx="21.7" cy="25.1" r="1.75" fill="#a69d8d" opacity="0.34" />
        <circle cx="14.7" cy="28.4" r="0.85" fill="#f6ebcf" opacity="0.35" />
        <path d="M12.8 18.4C15.9 12.7 23.1 9.8 29.3 13.3" stroke="#fff2c7" strokeOpacity="0.55" strokeWidth="1.1" strokeLinecap="round" />
      </g>
      <circle cx="20" cy="23" r="13.5" stroke="url(#moon-rim)" strokeWidth="0.8" mask="url(#crescent-mask)" />
    </svg>
  );
}

function Sun() {
  return (
    <svg className="celestial-body sun-svg" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sun-grad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff7c7" />
          <stop offset="42%" stopColor="#ffc85c" />
          <stop offset="100%" stopColor="#d86f12" />
        </radialGradient>
        <radialGradient id="sun-glass" cx="34%" cy="26%" r="55%">
          <stop offset="0%" stopColor="#fffaf0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fffaf0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ray-grad" x1="22" y1="1" x2="22" y2="13" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffe7a3" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffad37" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <g className="sun-svg__rays">
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d="M22 3.5C23.4 7.2 23.3 10 22 13.3C20.7 10 20.6 7.2 22 3.5Z"
            fill="url(#ray-grad)"
            transform={`rotate(${i * 30} 22 22)`}
          />
        ))}
      </g>
      <circle cx="22" cy="22" r="14.6" fill="#ffb13b" opacity="0.12" />
      <circle cx="22" cy="22" r="10.8" fill="url(#sun-grad)" />
      <circle cx="18.6" cy="18.1" r="6.4" fill="url(#sun-glass)" />
      <circle cx="22" cy="22" r="10.8" stroke="#ffe0a3" strokeOpacity="0.65" strokeWidth="0.8" />
    </svg>
  );
}

export default function Lamp({ isOn, onToggle }: Props) {
  return (
    <>
      <Stars visible={!isOn} />

      <button
        className={`celestial celestial--${isOn ? 'day' : 'night'}`}
        onClick={onToggle}
        aria-label={isOn ? 'Mudar para noite' : 'Mudar para dia'}
      >
        {isOn ? <Sun /> : <Moon />}
      </button>

      <div className="lamp-halo" style={{ opacity: isOn ? 1 : 0 }} />
    </>
  );
}
