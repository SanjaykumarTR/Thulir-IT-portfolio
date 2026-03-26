import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: "hsl(var(--neon))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "border-flow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "float-code": {
          "0%": { transform: "translateY(110vh)", opacity: "0" },
          "5%": { opacity: "0.8" },
          "90%": { opacity: "0.8" },
          "95%": { opacity: "0" },
          "100%": { transform: "translateY(-120px)", opacity: "0" },
        },
        "scan-down": {
          "0%": { top: "-2px", opacity: "0" },
          "2%": { opacity: "1" },
          "98%": { opacity: "0.4" },
          "100%": { top: "100%", opacity: "0" },
        },
        "orb-drift-1": {
          "0%, 100%": { transform: "translate(0%, 0%)" },
          "25%": { transform: "translate(8%, 15%)" },
          "50%": { transform: "translate(-5%, 28%)" },
          "75%": { transform: "translate(12%, 8%)" },
        },
        "orb-drift-2": {
          "0%, 100%": { transform: "translate(0%, 0%)" },
          "33%": { transform: "translate(-12%, -8%)" },
          "66%": { transform: "translate(10%, 18%)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "neon-border-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(16,185,129,0.15), inset 0 0 5px rgba(16,185,129,0.05)" },
          "50%": { boxShadow: "0 0 25px rgba(16,185,129,0.4), 0 0 50px rgba(16,185,129,0.15), inset 0 0 15px rgba(16,185,129,0.1)" },
        },
        "slide-up-reveal": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "text-clip-reveal": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        "glitch-1": {
          "0%, 84%, 100%": { clipPath: "inset(0)", transform: "translate(0)", opacity: "0" },
          "85%": { clipPath: "inset(20% 0 55% 0)", transform: "translate(-3px, -2px)", opacity: "0.7" },
          "87%": { clipPath: "inset(55% 0 15% 0)", transform: "translate(3px, 1px)", opacity: "0.7" },
          "89%": { clipPath: "inset(35% 0 40% 0)", transform: "translate(-2px, 2px)", opacity: "0.7" },
          "91%": { clipPath: "inset(0)", transform: "translate(0)", opacity: "0" },
        },
        "glitch-2": {
          "0%, 87%, 100%": { clipPath: "inset(0)", transform: "translate(0)", opacity: "0" },
          "88%": { clipPath: "inset(50% 0 20% 0)", transform: "translate(3px, -1px)", opacity: "0.5" },
          "90%": { clipPath: "inset(10% 0 60% 0)", transform: "translate(-3px, 2px)", opacity: "0.5" },
          "92%": { clipPath: "inset(0)", transform: "translate(0)", opacity: "0" },
        },
        "binary-fall": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-flow": "border-flow 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "count-up": "count-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "shimmer": "shimmer 3s linear infinite",
        "float-code": "float-code linear infinite",
        "scan-down": "scan-down 12s linear infinite",
        "orb-drift-1": "orb-drift-1 22s ease-in-out infinite",
        "orb-drift-2": "orb-drift-2 30s ease-in-out infinite",
        "marquee-x": "marquee-x 28s linear infinite",
        "cursor-blink": "cursor-blink 0.8s step-end infinite",
        "neon-border-pulse": "neon-border-pulse 3s ease-in-out infinite",
        "slide-up-reveal": "slide-up-reveal 0.4s ease-out forwards",
        "glitch-1": "glitch-1 6s infinite",
        "glitch-2": "glitch-2 6s infinite",
        "binary-fall": "binary-fall 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
