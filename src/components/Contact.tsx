import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, MapPin, Send, ArrowRight, CheckCircle2, MessageCircle, PhoneOutgoing } from 'lucide-react';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string;

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'thulirinfotechit@gmail.com',
    href: 'mailto:thulirinfotechit@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Odasalpatti X Road, Dharmapuri -635303',
    href: '#',
  },
];

const COMPANY_PHONE = '+91 7094152543';

const SERVICE_OPTIONS = [
  { value: 'landing-page', label: 'Landing Pages' },
  { value: 'static-website', label: 'Static Websites' },
  { value: 'dynamic-website', label: 'Dynamic Websites' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'software-development', label: 'Software Development' },
  { value: 'billing-software', label: 'Billing Software' },
  { value: 'e-commerce', label: 'E-Commerce' },
];

const ACTION_CARDS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/917094152543',
    bgColor: 'bg-green-500/10',
    hoverBg: 'hover:bg-green-500/20',
    borderColor: 'border-green-500/20',
    hoverBorder: 'hover:border-green-500/40',
    iconColor: 'text-green-500',
    hoverIcon: 'group-hover:text-green-400',
  },
  {
    icon: PhoneOutgoing,
    label: 'Call Now',
    href: 'tel:+917094152543',
    bgColor: 'bg-primary/10',
    hoverBg: 'hover:bg-primary/20',
    borderColor: 'border-primary/20',
    hoverBorder: 'hover:border-primary/40',
    iconColor: 'text-primary',
    hoverIcon: 'group-hover:text-primary',
  },
];

interface FieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  focused: boolean;
  onChange: (v: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  required?: boolean;
}

function ContactField({ label, type, name, value, focused, onChange, onFocus, onBlur, required }: FieldProps) {
  const isFloated = focused || value.length > 0;
  const borderClass = focused
    ? 'border-primary shadow-[0_0_0_1px_rgba(16,185,129,0.4),0_0_18px_rgba(16,185,129,0.12)]'
    : 'border-white/8 hover:border-white/20';
  const base =
    'w-full bg-white/[0.03] border rounded-xl text-foreground font-body text-sm outline-none transition-all duration-300 placeholder-transparent';

  return (
    <div className="relative group">
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-body z-10 ${
          isFloated
            ? 'top-2.5 text-[10px] text-primary tracking-[0.12em] uppercase font-semibold'
            : type === 'textarea'
            ? 'top-4 text-sm text-muted-foreground'
            : 'top-1/2 -translate-y-1/2 text-sm text-muted-foreground'
        }`}
      >
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          rows={5}
          className={`${base} ${borderClass} pt-8 px-4 pb-3 resize-none`}
        />
      ) : type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          className={`${base} ${borderClass} pt-8 pb-3 px-4 h-16 cursor-pointer appearance-none`}
        >
          <option value="" disabled hidden></option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-background text-foreground">
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          className={`${base} ${borderClass} pt-8 pb-3 px-4 h-16`}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  // Check for selected service from Services page
  useEffect(() => {
    const checkStorage = () => {
      const service = localStorage.getItem('selectedService');
      
      if (service) {
        setForm((f) => ({ ...f, subject: service }));
        localStorage.removeItem('selectedService');
      }
    };

    // Run after a short delay
    const timer = setTimeout(checkStorage, 150);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceLabel = SERVICE_OPTIONS.find(opt => opt.value === form.subject)?.label || form.subject;

    // Create WhatsApp message with form data
    const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${form.name}\n*Mobile:* ${form.email}\n*Service:* ${serviceLabel}\n\n*Message:* ${form.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917094152543?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Backgrounds */}
      <div className="section-accent-tl" />
      <div className="section-accent-br" />
      <div className="tech-grid-lines absolute inset-0 opacity-25 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4 hover-underline-slide inline-block">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tighter">
            Let's Build{' '}
            <span className="shimmer-text">Something</span>
          </h2>
          <p className="mt-5 text-muted-foreground font-body text-lg max-w-xl mx-auto leading-relaxed">
            Ready to transform your idea into a digital masterpiece?<br className="hidden md:block" /> We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* ── Left: Info ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {CONTACT_INFO.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group flex items-center gap-5 glass-card p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors duration-400 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all duration-300 flex-shrink-0 relative z-10">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] text-muted-foreground font-body uppercase tracking-[0.2em] mb-0.5">{item.label}</p>
                  <p className="text-foreground font-display font-semibold group-hover:text-primary transition-colors duration-300 text-sm">{item.value}</p>
                </div>
                <ArrowRight
                  size={15}
                  className="text-primary ml-auto opacity-0 group-hover:opacity-80 translate-x-0 group-hover:translate-x-1 transition-all duration-300 relative z-10 flex-shrink-0"
                />
              </motion.a>
            ))}

            {/* Company Phone Number */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: CONTACT_INFO.length * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-5 rounded-xl border border-white/5"
            >
              <p className="text-[10px] text-muted-foreground font-body uppercase tracking-[0.2em] mb-0.5">Contact Us</p>
              <p className="text-foreground font-display font-semibold text-sm">{COMPANY_PHONE}</p>
            </motion.div>

            {/* Action Cards Row */}
            <div className="grid grid-cols-2 gap-3">
              {ACTION_CARDS.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (CONTACT_INFO.length + 1) * 0.12 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex flex-col items-center justify-center gap-2 glass-card p-4 rounded-xl border ${card.borderColor} ${card.hoverBorder} ${card.bgColor} ${card.hoverBg} transition-all duration-300 cursor-pointer relative overflow-hidden`}
                >
                  <div className={`w-10 h-10 rounded-lg ${card.bgColor} flex items-center justify-center ${card.iconColor} ${card.hoverIcon} group-hover:scale-110 transition-all duration-300`}>
                    <card.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className={`text-xs font-display font-semibold ${card.iconColor} ${card.hoverIcon} transition-colors duration-300`}>
                    {card.label}
                  </span>
                </motion.a>
              ))}
            </div>

          </div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card rounded-2xl p-12 h-full flex flex-col items-center justify-center text-center gap-6 border border-primary/25 min-h-[500px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                    className="w-24 h-24 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center"
                    style={{ boxShadow: '0 0 40px rgba(16,185,129,0.25)' }}
                  >
                    <CheckCircle2 size={44} className="text-primary" strokeWidth={1.5} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="space-y-3"
                  >
                    <h3 className="text-3xl font-display font-bold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground font-body leading-relaxed max-w-sm">
                      We'll get back to you within 24 hours. Excited to build something amazing together.
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-primary text-sm font-display font-semibold hover-underline-slide mt-2"
                  >
                    Send another message →
                  </motion.button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <ContactField
                      label="Your Name"
                      type="text"
                      name="name"
                      value={form.name}
                      focused={focused === 'name'}
                      onChange={update('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                    <ContactField
                      label="Mobile Number"
                      type="tel"
                      name="email"
                      value={form.email}
                      focused={focused === 'email'}
                      onChange={update('email')}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>

                  <ContactField
                    label="Select Service"
                    type="select"
                    name="subject"
                    value={form.subject}
                    focused={focused === 'subject'}
                    onChange={update('subject')}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    required
                  />

                  <ContactField
                    label="Your Message"
                    type="textarea"
                    name="message"
                    value={form.message}
                    focused={focused === 'message'}
                    onChange={update('message')}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full py-4 bg-primary text-primary-foreground font-display font-bold rounded-xl text-base relative overflow-hidden hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full inline-block"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send
                            size={18}
                            strokeWidth={2}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-center text-[11px] text-muted-foreground font-body">
                    We typically respond within{' '}
                    <span className="text-primary font-semibold">24 hours</span>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
