import { motion } from "framer-motion";
import { Download, Github, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(155 60% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(155 60% 45%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <Link
        to="/curriculo"
        className="absolute top-6 right-6 md:right-12 lg:right-24 z-20 inline-flex items-center gap-2 border border-primary/40 text-primary px-5 py-2.5 font-heading text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
      >
        <Download className="w-4 h-4" />
        Currículo
      </Link>

      <div className="max-w-5xl mx-auto w-full relative z-10 pt-16 sm:pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-heading text-primary text-sm md:text-base tracking-widest uppercase mb-6">
                // Profissional Versátil • Gestão & Tecnologia
              </p>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Victor
              <br />
              <span className="text-gradient">Ferraz</span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Profissional com base técnica sólida e visão de negócio — capaz de atuar em áreas distintas, entender regras de processo e entregar resultado seja numa função de gestão, análise ou operação técnica. Aberto a novos desafios e pronto para aprender.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <a
                href="#sobre"
                className="inline-flex items-center justify-center w-[168px] h-12 bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm"
              >
                Sobre mim
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center w-[168px] h-12 border border-border text-foreground font-heading text-sm font-semibold tracking-wider uppercase hover:border-primary hover:text-primary transition-colors rounded-sm"
              >
                Contato
              </a>
            </motion.div>

            
          </div>

          <motion.div
            className="lg:pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="font-heading text-muted-foreground text-xs space-y-2">
              <p>Análise • Gestão • Automação</p>
              <p>Engenharia de Software • ADS</p>
              <p>SENAI • Sistemas de Automação</p>
              <p>Alto Araguaia - MT</p>
            </div>

            <div className="flex gap-4 pt-5">
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-sm border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-sm border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
