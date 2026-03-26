import { motion } from 'framer-motion';
import { Globe, Layout, Code2, Monitor, Cpu, Receipt, ShoppingCart } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  { title: 'Landing Pages', description: 'High-converting, blazing-fast landing pages that turn visitors into customers.', icon: Layout },
  { title: 'Static Websites', description: 'Lightning-speed static sites built with modern JAMstack architecture.', icon: Globe },
  { title: 'Dynamic Websites', description: 'Interactive, data-driven web applications with real-time capabilities.', icon: Monitor },
  { title: 'Web Development', description: 'Full-stack development from concept to deployment with cutting-edge frameworks.', icon: Code2 },
  { title: 'Software Development', description: 'Custom enterprise software solutions engineered for scale and performance.', icon: Cpu },
  { title: 'Billing Software', description: 'Automated invoicing and billing systems that streamline your revenue ops.', icon: Receipt },
  { title: 'E-Commerce', description: 'Feature-rich online stores with seamless checkout and inventory management.', icon: ShoppingCart },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      <div className="tech-grid-lines absolute inset-0 opacity-25 pointer-events-none" />
      <div className="section-accent-tl" />
      <div className="section-accent-br" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="text-primary/40 font-mono text-sm">[</span>
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-primary">02 / What We Build</p>
            <span className="text-primary/40 font-mono text-sm">]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tighter">
            Our <span className="shimmer-text">Services</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
