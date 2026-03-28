import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import CornerBrackets from '@/components/ui/CornerBrackets';

const categories = ['All', 'Web', 'Software', 'E-Commerce'];

const projects = [
  {
    title: 'Meza Beauty Parlour',
    sector: 'Beauty & Wellness',
    category: 'Web',
    tag: 'Dynamic Website',
    description: 'A fully dynamic website for a premium beauty parlour with online booking, service gallery, and customer reviews.',
    tech: ['React', 'Node.js', 'MongoDB'],
    accent: 'rgba(244,63,94,0.7)',
    accentSolid: '#f43f5e',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=680&q=80&fit=crop&crop=center',
  },
  {
    title: 'JRJ Jewellers',
    sector: 'Retail – Jewellery',
    category: 'Software',
    tag: 'Billing Software',
    description: 'Custom billing software for a jewellery shop with gold rate tracking, invoice generation, and inventory management.',
    tech: ['Python', 'SQLite', 'Tkinter'],
    accent: 'rgba(251,191,36,0.7)',
    accentSolid: '#fbbf24',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=680&q=80&fit=crop&crop=center',
  },
  {
    title: 'Kavithedal Publications',
    sector: 'Publishing',
    category: 'E-Commerce',
    tag: 'E-Commerce Platform',
    description: 'An online book selling platform for a Tamil publications house with catalogue browsing, cart, and secure checkout.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    accent: 'rgba(139,92,246,0.7)',
    accentSolid: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=680&q=80&fit=crop&crop=center',
  },
  {
    title: 'Dolphine Naturals',
    sector: 'Organic Products',
    category: 'Web',
    tag: 'Static Website',
    description: 'A clean, fast static website showcasing organic natural products with a modern design and product catalogue.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    accent: 'rgba(20,184,166,0.7)',
    accentSolid: '#14b8a6',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=680&q=80&fit=crop&crop=center',
  },
  {
    title: 'Textiles CRM',
    sector: 'Textiles Industry',
    category: 'Software',
    tag: 'CRM Software',
    description: 'A CRM platform built for a textiles business to manage customer relationships, orders, and follow-up workflows.',
    tech: ['React', 'Node.js', 'MySQL'],
    accent: 'rgba(99,102,241,0.7)',
    accentSolid: '#6366f1',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=680&q=80&fit=crop&crop=center',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);
  const display = filtered.length < 4 ? [...filtered, ...filtered, ...filtered] : [...filtered, ...filtered];

  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden">
      <div className="section-accent-tl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="text-primary/40 font-mono text-sm">[</span>
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-primary">04 / Portfolio</p>
            <span className="text-primary/40 font-mono text-sm">]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tighter">
            Selected <span className="shimmer-text">Work</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative px-5 py-2 rounded-full text-sm font-mono font-bold transition-all duration-300"
              style={
                active === cat
                  ? { background: 'hsl(160,84%,39%)', color: 'white', boxShadow: '0 0 16px rgba(16,185,129,0.4)' }
                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              key={active}
              className="flex gap-5"
              animate={{ x: [0, -(filtered.length * 370)] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: filtered.length * 7, ease: 'linear' } }}
            >
              {display.map((project, i) => (
                <div
                  key={`${project.title}-${i}`}
                  className="group relative flex-shrink-0 w-[340px] rounded-2xl overflow-hidden cursor-pointer"
                  style={{ background: 'rgba(6,6,6,0.95)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <CornerBrackets size={10} opacity={0} />

                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl z-10"
                    style={{ boxShadow: `inset 0 0 0 1px ${project.accent}` }}
                  />

                  {/* Image area */}
                  <div className="h-48 overflow-hidden relative">
                    {/* Browser chrome bar */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2"
                      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}>
                      <div className="w-2 h-2 rounded-full bg-red-500/70" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
                      <div className="ml-2 flex-1 h-2.5 rounded-sm max-w-[130px]"
                        style={{ background: 'rgba(255,255,255,0.08)' }} />
                    </div>

                    {/* Project image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay always visible at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{ background: 'linear-gradient(to top, rgba(6,6,6,0.95), transparent)' }} />

                    {/* Accent color tint on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-400 pointer-events-none"
                      style={{ background: `linear-gradient(135deg, ${project.accentSolid}55, transparent 60%)` }}
                    />

                    {/* Hover overlay with button */}
                    {/* View Project button removed */}

                    {/* Top accent strip */}
                    <div
                      className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span
                        className="text-[9px] font-mono px-2 py-0.5 rounded-full"
                        style={{ background: project.accentSolid + '20', border: `1px solid ${project.accentSolid}45`, color: project.accentSolid }}
                      >
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-display font-bold text-foreground group-hover:text-white transition-colors duration-300 leading-tight mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-widest mb-2.5" style={{ color: project.accent }}>
                      {project.sector}
                    </p>
                    <p className="text-[11px] text-muted-foreground/70 font-body leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
