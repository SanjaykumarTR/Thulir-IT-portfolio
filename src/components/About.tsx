import { motion } from 'framer-motion';
import { Zap, Target, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import CornerBrackets from '@/components/ui/CornerBrackets';

const values = [
  { icon: Zap,    title: 'Innovation First',      text: 'We push boundaries with bleeding-edge technology, never settling for the ordinary.' },
  { icon: Target, title: 'Precision Engineering', text: 'Every line of code is crafted with purpose — performance, scalability, and elegance.' },
  { icon: Rocket, title: 'Future Ready',           text: "We build systems that evolve, anticipating tomorrow's challenges today." },
];

const TERMINAL_LINES = [
  { delay: 0,   text: '$ thulir --init enterprise', color: 'text-primary' },
  { delay: 0.6, text: '> Scanning requirements...', color: 'text-muted-foreground' },
  { delay: 1.2, text: '✓ Web Development     [LOADED]', color: 'text-emerald-400' },
  { delay: 1.8, text: '✓ Software Solutions  [LOADED]', color: 'text-emerald-400' },
  { delay: 2.4, text: '✓ E-Commerce Suite    [LOADED]', color: 'text-emerald-400' },
  { delay: 3.0, text: '✓ Billing Systems     [LOADED]', color: 'text-emerald-400' },
  { delay: 3.7, text: '> Building your vision...', color: 'text-muted-foreground' },
  { delay: 4.4, text: '★ All systems operational.', color: 'text-primary' },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), line.delay * 1000);
    });
  }, []);
  return (
    <div className="terminal-block mt-8 relative">
      <CornerBrackets size={10} opacity={0.3} />
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500/80" />
        <div className="terminal-dot bg-yellow-500/80" />
        <div className="terminal-dot bg-emerald-500/80" />
        <span className="ml-2 text-muted-foreground text-[11px] font-mono">thulir@enterprise ~ </span>
      </div>
      <div className="p-4 space-y-1.5 min-h-[200px]">
        {TERMINAL_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={visibleLines.includes(i) ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className={`text-[11px] font-mono ${line.color}`}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.85 }}
          className="inline-block w-[7px] h-3.5 bg-primary align-middle"
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="section-accent-br" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="text-primary/40 font-mono text-sm">[</span>
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-primary">03 / Our Story</p>
            <span className="text-primary/40 font-mono text-sm">]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tighter">
            Crafting Digital{' '}
            <span className="neon-text glitch-text" data-text="Excellence">Excellence</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-muted-foreground font-body leading-relaxed text-lg mb-5"
            >
              At Thulir Info Tech, we believe technology should amplify human potential.
              Our team of engineers and designers builds digital ecosystems that merge
              aesthetics with raw performance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground font-body leading-relaxed"
            >
              From startups to enterprises, we transform ideas into scalable,
              production-grade systems that stand the test of time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Terminal />
            </motion.div>
          </div>

          <div className="space-y-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-xl overflow-hidden cursor-default"
                style={{ background: 'rgba(6,6,6,0.85)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)' }}
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CornerBrackets size={10} opacity={0.6} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/6 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.3)' }}
                />
                <div className="absolute top-4 right-5 font-mono text-[10px] tracking-widest text-muted-foreground/20 group-hover:text-primary/40 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative z-10 flex gap-5 items-start">
                  <div className="relative w-11 h-11 flex-shrink-0">
                    <div className="absolute inset-0 rounded-xl group-hover:scale-110 transition-all duration-400"
                      style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }} />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ boxShadow: '0 0 16px rgba(16,185,129,0.4)' }} />
                    <div className="absolute inset-0 flex items-center justify-center text-primary group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,1)] transition-all duration-300">
                      <v.icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
