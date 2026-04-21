import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FormacaoSection from "@/components/sections/FormacaoSection";
import CompetenciasSection from "@/components/sections/CompetenciasSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import { infraContent } from "@/data/infraContent";

const TI = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection content={infraContent.hero} />
      <AboutSection content={infraContent.about} />
      <FormacaoSection formacoes={infraContent.formacao} />
      <CompetenciasSection content={infraContent.competencias} />
      <ContactSection content={infraContent.contact} />
      <Footer />
    </div>
  );
};

export default TI;
