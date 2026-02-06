import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThreeStepPlan from "@/components/ThreeStepPlan";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButtons from "@/components/WhatsAppButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ThreeStepPlan />
      <Benefits />
      <ServiceAreas />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButtons />
    </div>
  );
};

export default Index;