import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#how", label: "How it Works" },
  { href: "#menu", label: "Menu" },
  { href: "#partner", label: "Partner" },
  { href: "#calculator", label: "ROI" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center text-primary-foreground font-display font-bold text-xl shadow-soft group-hover:scale-110 transition-transform">
            K
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">The Kachori Times</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Est. Today · Pan India</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="#partner"
            className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-warm text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Become a Partner
          </a>
          <button onClick={() => setOpen((o) => !o)} className="lg:hidden w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base font-medium">{l.label}</a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
