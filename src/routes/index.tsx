import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About, HowItWorks, WhyCustomers, WhyPartners, OutletMap, Menu, Testimonials } from "@/components/site/Sections";
import { ROICalculator } from "@/components/site/Calculator";
import { PartnerForm } from "@/components/site/PartnerForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWidgets } from "@/components/site/FloatingWidgets";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <WhyCustomers />
        <WhyPartners />
        <OutletMap />
        <Menu />
        <ROICalculator />
        <Testimonials />
        <PartnerForm />
      </main>
      <Footer />
      <FloatingWidgets />
      <Toaster position="top-center" richColors />
    </div>
  );
}
