import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  shop: z.string().trim().min(2, "Enter shop name").max(80),
  city: z.string().trim().min(2, "Enter city").max(60),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile"),
  space: z.string().min(1, "Select space"),
  business: z.string().min(1, "Select business type"),
});

export function PartnerForm() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("Please check the form");
      return;
    }
    setErrors({});
    setDone(true);
    toast.success("Application received! We'll call within 24 hours.");
  };

  return (
    <section id="partner" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-3xl"/>
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl"/>
      </div>
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Apply to partner</div>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl font-black leading-[1.05]">Two minutes. <span className="text-gradient italic">One form.</span> A new revenue stream.</h2>
        </motion.div>

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative rounded-[2rem] bg-card border border-border p-6 lg:p-12 shadow-elevated">
          {done ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto rounded-full gradient-warm flex items-center justify-center text-primary-foreground">
                <CheckCircle2 className="w-10 h-10"/>
              </div>
              <h3 className="mt-6 font-display text-3xl font-black">Welcome to the family!</h3>
              <p className="mt-3 text-muted-foreground">Our partnership team will call you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Your full name" placeholder="Ramesh Sharma" error={errors.name}/>
              <Field name="shop" label="Shop name" placeholder="Sharma Bakery" error={errors.shop}/>
              <Field name="city" label="City" placeholder="Jaipur" error={errors.city}/>
              <Field name="phone" label="Mobile number" placeholder="9876543210" error={errors.phone}/>
              <Select name="space" label="Space available" error={errors.space} options={["Less than 4×4 ft","4×4 to 6×6 ft","6×6 to 10×10 ft","More than 10×10 ft"]}/>
              <Select name="business" label="Current business type" error={errors.business} options={["Bakery","Tea / Coffee Stall","Supermarket / Kirana","Sweet Shop","Other"]}/>
              <button type="submit" className="sm:col-span-2 mt-4 inline-flex justify-center items-center gap-2 rounded-full gradient-warm text-primary-foreground px-7 py-4 text-base font-bold shadow-glow hover:scale-[1.02] transition">
                Submit my application →
              </button>
              <p className="sm:col-span-2 text-center text-xs text-muted-foreground">By submitting, you agree to be contacted by The Kachori Times team.</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, error }: { name: string; label: string; placeholder: string; error?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input name={name} placeholder={placeholder} className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 ${error ? "border-destructive" : "border-input"}`}/>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

function Select({ name, label, options, error }: { name: string; label: string; options: string[]; error?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <select name={name} defaultValue="" className={`mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 ${error ? "border-destructive" : "border-input"}`}>
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
