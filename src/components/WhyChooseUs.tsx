import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Server, Star } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+', icon: TrendingUp },
  { label: 'Happy Clients', value: 80, suffix: '+', icon: Users },
  { label: 'Uptime Guarantee', value: 99.9, suffix: '%', icon: Server },
  { label: 'Team Members', value: 25, suffix: '+', icon: Star },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-display font-bold shimmer-text">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="section-accent-tl" />

      {/* Background grid */}
      <div className="tech-grid-dots absolute inset-0 opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 hover-underline-slide inline-block">Results</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tighter">
            Why Choose <span className="shimmer-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group text-center glass-card p-8 rounded-2xl relative overflow-hidden cursor-default border border-white/5 hover:border-primary/30 transition-colors duration-500 neon-pulse-card"
            >
              {/* Hover bg */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-primary mb-3 flex justify-center opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-300">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-3 text-muted-foreground text-sm font-body">{stat.label}</p>
              </div>

              {/* Corner glow */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
