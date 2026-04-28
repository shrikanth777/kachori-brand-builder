import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Flame, Zap, IndianRupee, Store, Sparkles, TrendingUp, Heart, Star, Quote } from "lucide-react";
import stall from "@/assets/partner-stall.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-4 gradient-warm opacity-20 blur-3xl rounded-3xl" />
          <img src={stall} alt="Branded Kachori Times mini counter outside an Indian bakery" loading="lazy" width={1400} height={1000} className="relative rounded-3xl shadow-elevated w-full" />
          <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-5 shadow-soft max-w-[220px]">
            <div className="flex items-center gap-1 text-secondary">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-4 h-4 fill-secondary"/>)}</div>
            <p className="mt-2 text-sm font-medium">"Crispiest kachori I've had in years."</p>
            <p className="text-xs text-muted-foreground mt-1">— Verified customer, Jaipur</p>
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">About the brand</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">
            A snack empire,<br/> built on <span className="text-gradient italic">trust</span> & taste.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">The Kachori Times</strong> is reimagining India's favourite snacks with hygiene, branding, and profitable micro-partnership outlets. We turn unused storefronts into thriving kachori counters — bringing fresh, hot, irresistible bites to every neighbourhood.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, t: "FSSAI Certified", d: "Centralised hygienic kitchens" },
              { icon: Sparkles, t: "Premium Branding", d: "Counters that turn heads" },
              { icon: TrendingUp, t: "Scalable Model", d: "Built for 1000+ outlets" },
              { icon: Heart, t: "Loved by Locals", d: "Authentic Indian taste" },
            ].map((f) => (
              <div key={f.t} className="flex gap-3 p-4 rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center text-primary-foreground shrink-0">
                  <f.icon className="w-5 h-5"/>
                </div>
                <div>
                  <div className="font-semibold">{f.t}</div>
                  <div className="text-sm text-muted-foreground">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", t: "You Offer Space", d: "Bakery, tea stall or supermarket front — even 4×4 ft works." },
    { n: "02", t: "We Install Counter", d: "Premium branded mini stall, fully fitted at zero cost to you." },
    { n: "03", t: "Daily Fresh Supply", d: "Hot kachori & samosa delivered daily from our central kitchen." },
    { n: "04", t: "You Earn 35%", d: "Sit back. Collect a generous share of every single sale." },
  ];
  return (
    <section id="how" className="relative py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">How it works</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">From empty corner to <span className="text-gradient italic">cash machine</span>.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Four simple steps to transform unused storefront space into a daily revenue stream.</p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-7 rounded-3xl bg-card border border-border hover:border-primary transition-all hover:shadow-glow hover:-translate-y-2"
            >
              <div className="font-display text-7xl font-black text-secondary/30 group-hover:text-secondary transition-colors leading-none">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl font-bold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 text-secondary text-2xl">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyCustomers() {
  const items = [
    { icon: Leaf, t: "100% Fresh Daily", d: "Made each morning, never reused.", c: "from-green-500/20" },
    { icon: ShieldCheck, t: "Hygienic Kitchen", d: "FSSAI certified, gloves & checks.", c: "from-blue-500/20" },
    { icon: Flame, t: "Authentic Taste", d: "Recipes from Rajasthan's gullies.", c: "from-orange-500/20" },
    { icon: Zap, t: "Lightning Service", d: "Hot in your hand in <60 seconds.", c: "from-yellow-500/20" },
    { icon: IndianRupee, t: "Affordable Always", d: "Premium taste at street prices.", c: "from-rose-500/20" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div {...fadeUp} className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Why customers love us</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">Five reasons they keep <span className="text-gradient italic">coming back</span>.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">Every kachori is a tiny ambassador of trust — and we treat it that way.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-3xl border border-border bg-card hover:bg-foreground hover:text-background transition-all duration-500 hover:-translate-y-2 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl gradient-warm text-primary-foreground flex items-center justify-center shadow-soft">
                <it.icon className="w-6 h-6"/>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{it.t}</h3>
              <p className="mt-2 text-sm opacity-80">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyPartners() {
  const items = [
    "No cooking, no kitchen, no hassle",
    "Zero setup investment from you",
    "Steady passive income — paid weekly",
    "Monetise unused front-shop space",
    "High footfall draws to YOUR shop",
    "Pan-India brand strength behind you",
  ];
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-warm" />
      <div className="absolute inset-0 grain opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 text-primary-foreground">
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Why partners join us</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">Your shop. Our brand.<br/><span className="italic text-accent">Shared profit.</span></h2>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15 hover:bg-primary-foreground/15 transition"
            >
              <div className="w-10 h-10 rounded-full bg-accent text-charcoal flex items-center justify-center font-display font-black text-lg shrink-0">
                {i + 1}
              </div>
              <span className="text-lg font-medium">{it}</span>
            </motion.div>
          ))}
        </div>
        <motion.a
          {...fadeUp}
          href="#partner"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-primary-foreground text-primary px-8 py-4 font-bold shadow-elevated hover:scale-105 transition"
        >
          Apply in 2 minutes <Store className="w-5 h-5"/>
        </motion.a>
      </div>
    </section>
  );
}

export function OutletMap() {
  const cities = [
    { name: "Jaipur", x: 28, y: 42, live: true },
    { name: "Delhi", x: 32, y: 30, live: true },
    { name: "Mumbai", x: 24, y: 60, soon: true },
    { name: "Pune", x: 28, y: 64, soon: true },
    { name: "Ahmedabad", x: 22, y: 50, soon: true },
    { name: "Bengaluru", x: 38, y: 78, soon: true },
    { name: "Hyderabad", x: 38, y: 68, soon: true },
    { name: "Kolkata", x: 60, y: 50, soon: true },
    { name: "Chennai", x: 42, y: 82, soon: true },
    { name: "Lucknow", x: 44, y: 38, soon: true },
    { name: "Indore", x: 30, y: 50, soon: true },
    { name: "Chandigarh", x: 32, y: 22, soon: true },
  ];
  return (
    <section id="outlets" className="py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Outlet map</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">Coming to a corner <span className="text-gradient italic">near you</span>.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Live in 2 cities. Expanding to 10+ more in the next 12 months.</p>
        </motion.div>

        <div className="mt-14 relative aspect-[4/5] sm:aspect-[5/4] max-w-3xl mx-auto rounded-3xl border border-border bg-card overflow-hidden shadow-soft">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="bg">
                <stop offset="0%" stopColor="oklch(0.74 0.18 55 / 0.15)"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
            </defs>
            <rect width="100" height="100" fill="url(#bg)"/>
            {/* India silhouette (stylised) */}
            <path d="M30 18 Q22 28 22 38 Q18 46 22 54 Q20 64 28 72 Q32 82 40 88 Q44 82 46 74 Q52 70 56 60 Q62 54 60 44 Q66 38 62 28 Q54 22 46 22 Q38 18 30 18 Z" fill="oklch(0.74 0.18 55 / 0.12)" stroke="oklch(0.42 0.18 28 / 0.5)" strokeWidth="0.4"/>
          </svg>
          {cities.map((c) => (
            <div
              key={c.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              <div className={`w-3 h-3 rounded-full ${c.live ? "bg-primary" : "bg-secondary"} ring-4 ring-background`}/>
              {c.live && <div className="absolute inset-0 rounded-full bg-primary animate-ping"/>}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 rounded-md bg-foreground text-background text-[10px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                {c.name} {c.live ? "· Live" : "· Soon"}
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary"/>Live</div>
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-secondary"/>Coming Soon</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import raj from "@/assets/raj-kachori.jpg";
import pyaz from "@/assets/pyaz-kachori.jpg";
import mini from "@/assets/mini-samosa.jpg";
import cheese from "@/assets/cheese-samosa.jpg";
import combo from "@/assets/masala-combo.jpg";

export function Menu() {
  const items = [
    { img: raj, name: "Raj Kachori", price: 25, tag: "Signature", d: "Crispy shell loaded with yogurt, sev & pomegranate." },
    { img: pyaz, name: "Pyaz Kachori", price: 20, tag: "Bestseller", d: "Flaky, spicy onion-stuffed Rajasthani classic." },
    { img: mini, name: "Mini Samosa (6 pcs)", price: 25, tag: "Snack Pack", d: "Bite-sized golden triangles, perfect with chai." },
    { img: cheese, name: "Cheese Samosa", price: 25, tag: "New", d: "Molten cheese pull, crispy spiced shell." },
    { img: combo, name: "Masala Combo", price: 25, tag: "Best Value", d: "2 kachori + 2 samosa + chutneys. Pure joy." },
  ];
  return (
    <section id="menu" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div {...fadeUp} className="flex flex-col lg:flex-row items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">The menu</div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">Crafted with <span className="text-gradient italic">love</span>. Priced for everyone.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Five hero products. Endless cravings. Everything fried fresh, served hot.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group relative rounded-3xl overflow-hidden bg-card border border-border hover:shadow-glow transition-all hover:-translate-y-2 ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img src={it.img} alt={it.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur text-xs font-bold uppercase tracking-wider text-primary">{it.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold">{it.name}</h3>
                  <div className="font-display text-2xl font-black text-gradient">₹{it.price}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { name: "Ramesh Sharma", role: "Bakery owner · Jaipur", q: "I had 6 sq.ft. of dead space outside my shop. Now it earns me ₹38,000 a month — without lifting a finger.", earn: "₹38K/mo" },
    { name: "Priya Patel", role: "Tea stall · Ahmedabad", q: "Footfall to my chai stall doubled the day they installed the counter. The brand pulls people in.", earn: "2× footfall" },
    { name: "Mohammed Iqbal", role: "Supermarket · Delhi", q: "Cleanest food vendor I've ever partnered with. My customers actually thank me for it.", earn: "₹52K/mo" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Partner stories</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">Real partners. <span className="text-gradient italic">Real profit.</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-7 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all"
            >
              <Quote className="w-10 h-10 text-secondary/40"/>
              <p className="mt-4 text-lg leading-relaxed">"{t.q}"</p>
              <div className="mt-6 flex items-center justify-between pt-5 border-t border-border">
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="px-3 py-1.5 rounded-full gradient-gold text-charcoal text-sm font-black">{t.earn}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
