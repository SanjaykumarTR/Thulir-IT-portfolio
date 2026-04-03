import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CornerBrackets from '@/components/ui/CornerBrackets';

const TYPING_FULL = 'Intelligent Tech';

const TECH_STACK = [
  '⚡ React', '🔷 TypeScript', '🐳 Docker', '☁️ Cloud', '🚀 Node.js',
  '🎯 Next.js', '🔐 Security', '📊 Analytics', '🛠️ DevOps', '💡 AI/ML',
  '⚡ React', '🔷 TypeScript', '🐳 Docker', '☁️ Cloud', '🚀 Node.js',
  '🎯 Next.js', '🔐 Security', '📊 Analytics', '🛠️ DevOps', '💡 AI/ML',
];

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 5 + 4,
  delay: Math.random() * 4,
}));

const INLINE_STATS = [
  { value: '150+', label: 'Projects' },
  { value: '80+', label: 'Clients' },
  { value: '99.9%', label: 'Uptime' },
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let i = 0;
    const startDelay = setTimeout(() => {
      const timer = setInterval(() => {
        i++;
        setTypedText(TYPING_FULL.slice(0, i));
        if (i >= TYPING_FULL.length) {
          clearInterval(timer);
          setTimeout(() => setTypingDone(true), 600);
        }
      }, 75);
      return () => clearInterval(timer);
    }, 900);
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Viewport-edge corner brackets */}
      <div className="absolute inset-6 pointer-events-none">
        <CornerBrackets size={28} opacity={0.35} />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.8, 0.5] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Ambient center glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px', height: '700px',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[20, 50, 78].map((top) => (
          <div key={top} className="absolute left-0 right-0 h-px"
            style={{ top: `${top}%`, background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.06) 30%, rgba(16,185,129,0.1) 50%, rgba(16,185,129,0.06) 70%, transparent)' }} />
        ))}
        {[15, 50, 82].map((left) => (
          <div key={left} className="absolute top-0 bottom-0 w-px"
            style={{ left: `${left}%`, background: 'linear-gradient(180deg, transparent, rgba(16,185,129,0.06) 30%, rgba(16,185,129,0.1) 50%, rgba(16,185,129,0.06) 70%, transparent)' }} />
        ))}
      </div>

      {/* Top neon strip */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 relative"
          style={{ border: '1px solid rgba(16,185,129,0.2)', borderRadius: '999px', background: 'rgba(16,185,129,0.05)', backdropFilter: 'blur(12px)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-neon" />
          <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-primary/80">
            Premium Digital Ecosystems
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-neon" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground tracking-tighter leading-[0.9]"
        >
          Innovating the Future
          <br />
          <span className="inline-block mt-3">
            <span aria-hidden="true">with{' '}</span>
            <span
              className={`neon-text-strong glitch-text ${typingDone ? 'typing-cursor-done' : 'typing-cursor'}`}
              data-text={typedText}
              style={{ color: '#34d399', filter: 'drop-shadow(0 0 30px rgba(16,185,129,0.5))' }}
            >
              {typedText}
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto font-body font-light leading-relaxed px-4 sm:px-0"
        >
          Thulir Info Tech delivers enterprise-grade web solutions, software platforms,
          and digital experiences that redefine what's possible.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('services')}
            className="group relative px-10 py-4 text-primary-foreground font-display font-bold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ background: 'hsl(160,84%,39%)', boxShadow: '0 0 20px rgba(16,185,129,0.3)' }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(16,185,129,0.6)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(16,185,129,0.3)')}
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="group relative px-10 py-4 font-display font-bold rounded-full text-lg transition-all duration-300 hover:scale-105"
            style={{ border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.05)', backdropFilter: 'blur(12px)', color: 'white' }}
            onMouseEnter={e => { (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.6)'); (e.currentTarget.style.boxShadow = '0 0 20px rgba(16,185,129,0.15)'); }}
            onMouseLeave={e => { (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'); (e.currentTarget.style.boxShadow = 'none'); }}
          >
            Get Started →
          </button>
        </motion.div>

        {/* Inline stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-0"
        >
          {INLINE_STATS.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="px-8 text-center">
                <p className="text-2xl font-display font-bold neon-text">{s.value}</p>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mt-0.5">{s.label}</p>
              </div>
              {i < INLINE_STATS.length - 1 && (
                <div className="w-px h-10 bg-primary/20" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Technologies We Master
          </p>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {TECH_STACK.map((tech, i) => (
                <div key={i} className="marquee-item text-xs text-muted-foreground font-mono">
                  <span className="text-primary/50 mr-1">//</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
      {/* Bottom neon strip */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
    </section>
  );
}
