import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles } from "lucide-react";

export function FloatingWidgets() {
  const [popup, setPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setPopup(true), 12000);
    return () => clearTimeout(t);
  }, [dismissed]);

  return (
    <>
      <a
        href="https://wa.me/919999999999?text=Hi%20Kachori%20Times%2C%20I'm%20interested%20in%20partnership"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6"/>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"/>
      </a>

      <AnimatePresence>
        {popup && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[320px] bg-card border border-border rounded-2xl shadow-elevated p-5"
          >
            <button onClick={() => { setPopup(false); setDismissed(true); }} className="absolute top-3 right-3 w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center">
              <X className="w-4 h-4"/>
            </button>
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4"/> Limited Spots
            </div>
            <h4 className="mt-2 font-display text-xl font-black leading-tight">Only <span className="text-gradient">12 partner counters</span> left this quarter.</h4>
            <p className="mt-2 text-sm text-muted-foreground">Apply now — average partner earns ₹35K+/month.</p>
            <a href="#partner" onClick={() => { setPopup(false); setDismissed(true); }} className="mt-4 inline-flex w-full justify-center rounded-full gradient-warm text-primary-foreground px-4 py-2.5 text-sm font-bold hover:scale-[1.02] transition">
              Reserve my spot →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
