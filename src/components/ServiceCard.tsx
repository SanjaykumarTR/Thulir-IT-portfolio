import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import CornerBrackets from '@/components/ui/CornerBrackets';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 25 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setSpotlight((s) => ({ ...s, visible: false }));
  };

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX, rotateY, transformStyle: 'preserve-3d',
          background: 'rgba(6,6,6,0.85)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(20px)',
        }}
        className="relative group p-7 rounded-2xl overflow-hidden cursor-pointer h-full"
      >
        {/* Corner brackets on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <CornerBrackets size={14} opacity={0.7} />
        </div>

        {/* Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: spotlight.visible ? 1 : 0,
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(16,185,129,0.12) 0%, transparent 55%)`,
          }}
        />

        {/* Hover neon border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.4), 0 0 30px rgba(16,185,129,0.08)' }}
        />

        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        {/* Card number */}
        <div className="absolute top-5 right-6 font-mono text-[11px] tracking-widest text-muted-foreground/25 group-hover:text-primary/50 transition-colors duration-300">
          {num}
        </div>

        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          {/* Glowing icon container */}
          <div className="relative w-14 h-14 mb-7">
            <div
              className="absolute inset-0 rounded-full group-hover:scale-110 transition-all duration-500"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
            />
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: '0 0 20px rgba(16,185,129,0.45)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-primary group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,1)] transition-all duration-300">
              <Icon size={26} strokeWidth={1.5} />
            </div>
          </div>

          <h3 className="text-lg font-display font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground font-body leading-relaxed text-sm group-hover:text-foreground/60 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Bottom reveal strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
          style={{ background: 'linear-gradient(to top, rgba(16,185,129,0.12), transparent)' }}
        >
          <span className="text-primary text-[10px] font-mono tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            Explore Service →
          </span>
        </div>

        {/* Corner ambient glow */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/18 transition-colors duration-700 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
