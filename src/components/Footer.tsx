import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/thulirinfotech-IT-team' },
  { icon: Linkedin, href: '#' },
  { icon: Mail, href: 'mailto:thulirinfotechit@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          <div>
            <h3 className="text-2xl font-display font-bold neon-text tracking-tighter mb-4">
              Thulir Info Tech
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Crafting the digital future with intelligent technology and uncompromising design.
            </p>
            <div className="mt-4 space-y-2">
              <a href="mailto:thulirinfotechit@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail size={14} />
                thulirinfotechit@gmail.com
              </a>
              <a href="tel:+917094152543" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone size={14} />
                +91 7094152543
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={14} />
                Odasalpatti X Road, Dharmapuri -635303
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Services', 'About', 'Portfolio', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-[0_0_15px_rgba(247,255,0,0.3)] transition-all"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} Thulir Info Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
