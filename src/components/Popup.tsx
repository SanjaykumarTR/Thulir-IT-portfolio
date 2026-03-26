import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RING_R = 58;
const CIRCUMFERENCE = 2 * Math.PI * RING_R;

const BOOT_MESSAGES = [
  'Initializing digital ecosystem...',
  'Loading enterprise modules...',
  'Compiling excellence...',
  'Calibrating performance layers...',
  'Optimizing user experience...',
  'Building your future...',
  'Almost there...',
];

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

export default function Popup() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [done, setDone] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const TOTAL = 2600;
    const TICK = 24;
    let elapsed = 0;

    // Eased progress: fast start, slows near end
    const ease = (t: number) => t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const ticker = setInterval(() => {
      elapsed += TICK;
      const t = Math.min(elapsed / TOTAL, 1);
      const p = ease(t) * 100;
      progressRef.current = p;
      setProgress(p);

      if (t >= 1) {
        clearInterval(ticker);
        setDone(true);
        setTimeout(() => setVisible(false), 700);
      }
    }, TICK);

    const msgTimer = setInterval(() => {
      setMsgIdx((i) => (i + 1) % BOOT_MESSAGES.length);
    }, 500);

    return () => {
      clearInterval(ticker);
      clearInterval(msgTimer);
    };
  }, []);

  const offset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#030303' }}
        >
          {/* Dot grid */}
          <div className="tech-grid-dots absolute inset-0 opacity-50" />

          {/* Scan line */}
          <div className="scan-line" />

          {/* Ambient orb */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Floating particles */}
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-primary/30"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* Corner bracket decorations */}
          {[
            'top-6 left-6 border-l-2 border-t-2',
            'top-6 right-6 border-r-2 border-t-2',
            'bottom-6 left-6 border-l-2 border-b-2',
            'bottom-6 right-6 border-r-2 border-b-2',
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className={`absolute w-10 h-10 border-primary/40 ${cls}`}
            />
          ))}

          {/* ─── Core loading UI ─── */}
          <div className="relative flex flex-col items-center gap-7 z-10">

            {/* Ring + Logo */}
            <div className="relative w-44 h-44 flex items-center justify-center">

              {/* Outer slow spin */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: '1px dashed rgba(16,185,129,0.18)',
                }}
              />

              {/* SVG progress ring */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 140 140"
                style={{ transform: 'rotate(-90deg)' }}
              >
                {/* Track */}
                <circle
                  cx="70" cy="70" r={RING_R}
                  fill="none"
                  stroke="rgba(16,185,129,0.08)"
                  strokeWidth="2"
                />
                {/* Glow */}
                <circle
                  cx="70" cy="70" r={RING_R}
                  fill="none"
                  stroke="rgba(16,185,129,0.15)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={offset}
                  style={{ transition: 'stroke-dashoffset 0.03s linear' }}
                />
                {/* Main stroke */}
                <circle
                  cx="70" cy="70" r={RING_R}
                  fill="none"
                  stroke="hsl(160,84%,39%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={offset}
                  style={{
                    transition: 'stroke-dashoffset 0.03s linear',
                    filter: 'drop-shadow(0 0 5px rgba(16,185,129,0.9))',
                  }}
                />
                {/* Leading dot */}
                {progress > 1 && (
                  <circle
                    cx={70 + RING_R * Math.cos((progress / 100) * 2 * Math.PI - Math.PI / 2)}
                    cy={70 + RING_R * Math.sin((progress / 100) * 2 * Math.PI - Math.PI / 2)}
                    r="3"
                    fill="hsl(160,84%,39%)"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(16,185,129,1))' }}
                  />
                )}
              </svg>

              {/* Inner glow pulse */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.85, 1, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-24 h-24 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)' }}
              />

              {/* Logo */}
              <motion.img
                src="/thulir-logo.png"
                alt="Thulir Info Tech"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-20 h-20 object-contain"
                style={{ filter: 'drop-shadow(0 0 18px rgba(16,185,129,0.7))' }}
              />
            </div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-[0.25em] uppercase">
                <span className="text-white/90">Thulir</span>
                <span className="neon-text-strong"> Info Tech</span>
              </h1>
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase mt-2 font-body">
                Premium Digital Ecosystems
              </p>
            </motion.div>

            {/* Boot message */}
            <div className="h-5 flex items-center">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.p
                    key="done"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[11px] font-mono tracking-[0.3em] text-primary uppercase"
                  >
                    ✓ &nbsp;All Systems Ready
                  </motion.p>
                ) : (
                  <motion.p
                    key={msgIdx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-[11px] font-mono tracking-[0.15em] text-primary/60"
                  >
                    &gt;&nbsp;{BOOT_MESSAGES[msgIdx]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="w-72 flex flex-col gap-2">
              <div className="relative h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'hsl(160,84%,39%)',
                    boxShadow: '0 0 10px rgba(16,185,129,0.8)',
                    transition: 'width 0.03s linear',
                  }}
                />
                {/* shimmer head */}
                <div
                  className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
                  style={{
                    left: `${Math.max(0, progress - 5)}%`,
                    transition: 'left 0.03s linear',
                  }}
                />
              </div>

              {/* Percentage */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-muted-foreground tracking-widest">LOADING</span>
                <span className="text-[11px] font-mono text-primary/80 tabular-nums">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom neon strip */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Top neon strip */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
