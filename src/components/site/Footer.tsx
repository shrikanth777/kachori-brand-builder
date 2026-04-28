import { Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-cream mt-10 overflow-hidden" style={{ backgroundColor: "var(--charcoal)", color: "var(--cream)" }}>
      <div className="absolute inset-0 grain opacity-20"/>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center text-primary-foreground font-display font-bold text-2xl">K</div>
              <div>
                <div className="font-display text-xl font-bold">The Kachori Times</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">A snack revolution</div>
              </div>
            </div>
            <p className="mt-5 text-base opacity-70 max-w-md">India's freshest, most hygienic kachori & samosa brand — built on community partnerships.</p>
            <div className="mt-6 flex gap-3">
              {[
                { i: Instagram, h: "#", l: "Instagram" },
                { i: MessageCircle, h: "#", l: "WhatsApp" },
                { i: Mail, h: "mailto:hello@kachoritimes.in", l: "Email" },
                { i: Phone, h: "tel:+918431289619", l: "Phone" },
              ].map((s) => (
                <a key={s.l} href={s.h} aria-label={s.l} className="w-11 h-11 rounded-full border border-cream/15 hover:bg-cream hover:text-charcoal flex items-center justify-center transition">
                  <s.i className="w-4 h-4"/>
                </a>
              ))}
            </div>
          </div>

          {[
            { t: "Company", l: ["About", "Franchise", "Careers", "Press"] },
            { t: "Partners", l: ["Apply Now", "ROI Calculator", "Partner Login", "Support"] },
            { t: "Connect", l: ["Contact", "FAQs", "Privacy", "Terms"] },
          ].map((c) => (
            <div key={c.t} className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.25em] opacity-60 font-semibold">{c.t}</div>
              <ul className="mt-4 space-y-3">
                {c.l.map((it) => (
                  <li key={it}><a href="#" className="hover:text-secondary transition">{it}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 flex flex-col gap-2 text-sm opacity-70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0"/>
              <span>HQ Bengaluru,<br/>India 560013</span>
            </div>
            <a href="tel:+918431289619" className="flex items-start gap-2 hover:text-secondary transition">
              <Phone className="w-4 h-4 mt-0.5 shrink-0"/>
              <span>+91 84312 89619</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60">
          <div>© {new Date().getFullYear()} The Kachori Times Pvt. Ltd. All rights reserved.</div>
          <div>Crafted with ❤️ in India · FSSAI Lic. #12345678901234</div>
        </div>
      </div>

      {/* Giant brand wordmark */}
      <div className="relative font-display font-black text-center leading-none select-none -mb-4 text-[18vw] text-cream/[0.04]">
        KACHORI
      </div>
    </footer>
  );
}
