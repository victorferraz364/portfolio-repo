import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FormacaoSection from "@/components/sections/FormacaoSection";
import CompetenciasSection from "@/components/sections/CompetenciasSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FormacaoSection />
      <CompetenciasSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
