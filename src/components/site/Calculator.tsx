import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon } from "lucide-react";

export function ROICalculator() {
  const [orders, setOrders] = useState(80);
  const [aov, setAov] = useState(70);

  const { daily, monthly, yearly } = useMemo(() => {
    const d = orders * aov * 0.35;
    return { daily: Math.round(d), monthly: Math.round(d * 30), yearly: Math.round(d * 365) };
  }, [orders, aov]);

  const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");

  return (
    <section id="calculator" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              <CalcIcon className="w-4 h-4"/> Earnings Calculator
            </div>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">See what your <span className="text-gradient italic">corner</span> could earn.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Drag the sliders. Watch the numbers. This is your future passive income.</p>

            <div className="mt-8 space-y-7">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-semibold">Daily orders at your counter</label>
                  <span className="font-display font-black text-xl text-primary">{orders}</span>
                </div>
                <input type="range" min={20} max={300} value={orders} onChange={(e)=>setOrders(+e.target.value)} className="w-full accent-primary h-2"/>
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>20</span><span>300</span></div>
              </div>
              <div>
                <div className="flex justify-between mb-3">
                  <label className="font-semibold">Average order value</label>
                  <span className="font-display font-black text-xl text-primary">₹{aov}</span>
                </div>
                <input type="range" min={40} max={250} value={aov} onChange={(e)=>setAov(+e.target.value)} className="w-full accent-primary h-2"/>
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>₹40</span><span>₹250</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="relative">
            <div className="absolute -inset-6 gradient-warm opacity-25 blur-3xl rounded-3xl"/>
            <div className="relative rounded-3xl gradient-warm text-primary-foreground p-8 lg:p-10 shadow-elevated overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/30 blur-3xl"/>
              <div className="text-xs uppercase tracking-[0.3em] opacity-80">Your 35% Share</div>
              <div className="mt-2 text-sm opacity-80">Estimated monthly earnings</div>
              <div className="mt-3 font-display text-6xl lg:text-7xl font-black tracking-tight">{fmt(monthly)}</div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15">
                  <div className="text-xs uppercase opacity-80">Per Day</div>
                  <div className="font-display text-2xl font-bold mt-1">{fmt(daily)}</div>
                </div>
                <div className="p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15">
                  <div className="text-xs uppercase opacity-80">Per Year</div>
                  <div className="font-display text-2xl font-bold mt-1">{fmt(yearly)}</div>
                </div>
              </div>
              <a href="#partner" className="mt-7 inline-flex w-full justify-center rounded-full bg-primary-foreground text-primary px-6 py-3.5 font-bold hover:scale-[1.02] transition">
                Lock in my counter →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
