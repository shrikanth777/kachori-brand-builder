import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import hero from "@/assets/hero-kachori.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 lg:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 backdrop-blur px-4 py-2 text-xs font-semibold text-primary"
          >
            <Sparkles className="w-3.5 h-3.5" />
            India's First Hygienic Kachori Franchise Movement
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter"
          >
            India's <span className="text-gradient italic">Freshest</span><br />
            Kachori <span className="relative">Revolution
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 9 Q 75 2, 150 6 T 298 5" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" />
                <defs><linearGradient id="g" x1="0" x2="1"><stop stopColor="oklch(0.74 0.18 55)"/><stop offset="1" stopColor="oklch(0.42 0.18 28)"/></linearGradient></defs>
              </svg>
            </span><br />
            Starts Here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl"
          >
            Hygienic <span className="text-foreground font-semibold">·</span> Hot <span className="text-foreground font-semibold">·</span> Profitable <span className="text-foreground font-semibold">·</span> Local Partnerships. Reimagining India's favourite snacks — one branded mini-counter at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#partner" className="group inline-flex items-center gap-2 rounded-full gradient-warm text-primary-foreground px-7 py-4 text-base font-semibold shadow-glow hover:scale-[1.03] transition-transform">
              Become a Partner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#outlets" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-card/60 backdrop-blur px-7 py-4 text-base font-semibold hover:border-primary hover:text-primary transition">
              <MapPin className="w-4 h-4" />
              Find Nearby Outlet
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "35%", l: "Partner Share" },
              { n: "12+", l: "Cities Soon" },
              { n: "100%", l: "Fresh Daily" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl lg:text-4xl font-black text-gradient">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square max-w-[520px] mx-auto">
            <div className="absolute inset-0 rounded-full gradient-warm blur-2xl opacity-40 scale-90" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-elevated border-8 border-card float-slow">
              <img src={hero} alt="The Kachori Times signature Raj Kachori with yogurt, sev and pomegranate" className="w-full h-full object-cover" width={1600} height={1280} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-6 bottom-10 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <div className="text-xs">
                <div className="font-bold">Live</div>
                <div className="text-muted-foreground">847 orders today</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute -right-4 top-10 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft"
            >
              <div className="text-2xl font-display font-black text-gradient">₹35K</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">avg monthly partner earn</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-16 lg:mt-24 border-y border-border bg-card/40 overflow-hidden">
        <div className="flex marquee whitespace-nowrap py-5">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {["Hygienic Kitchens", "Daily Fresh Supply", "35% Revenue Share", "Zero Setup Cost", "Branded Counter", "Pan India Vision", "Authentic Taste", "Fast Service"].map((t) => (
                <div key={t} className="flex items-center gap-12">
                  <span className="font-display text-2xl lg:text-3xl font-bold text-foreground/80">{t}</span>
                  <span className="text-secondary text-2xl">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
