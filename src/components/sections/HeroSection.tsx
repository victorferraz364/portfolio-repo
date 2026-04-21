import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import type { HeroContent } from "@/data/geralContent";

interface Props {
  content: HeroContent;
}

const HeroSection = ({ content }: Props) => {
  return (
    <section className="min-h-dvh flex items-center relative overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(155 60% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(155 60% 45%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <Link
        to="/curriculo"
        className="absolute top-4 right-4 sm:top-6 
        sm:right-6 md:right-12 lg:right-24 z-20 inline-flex 
        items-center gap-2 border border-primary/40 text-primary 
        px-4 sm:px-5 py-2.5 font-heading text-xs font-semibold 
        tracking-wider uppercase hover:bg-primary 
        hover:text-primary-foreground transition-colors 
        rounded-sm min-h-[44px]"
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">Currículo</span>
        <span className="sm:hidden">Currículo</span>
      </Link>

      <div className="max-w-5xl mx-auto w-full relative z-10 pt-20 sm:pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-heading text-primary text-xs md:text-base tracking-widest uppercase mb-5 md:mb-6">
                {content.tagline}
              </p>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6 md:mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Victor
              <br />
              <span className="text-gradient">Ferraz</span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground text-base leading-relaxed max-w-xl mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              {content.bio}
            </motion.p>

            {/* Social links — mobile only (desktop shown in side panel) */}
            <motion.div
              className="flex gap-3 mb-8 lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-sm border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors font-heading text-xs uppercase tracking-wider"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-sm border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors font-heading text-xs uppercase tracking-wider"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <a
                href="#sobre"
                className="inline-flex items-center justify-center h-12 sm:w-[168px] bg-primary text-primary-foreground font-heading text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity rounded-sm"
              >
                Sobre mim
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center h-12 sm:w-[168px] border border-border text-foreground font-heading text-sm font-semibold tracking-wider uppercase hover:border-primary hover:text-primary transition-colors rounded-sm"
              >
                Contato
              </a>
            </motion.div>
          </div>

          {/* Desktop info panel — hidden on mobile */}
          <motion.div
            className="hidden lg:block lg:pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="font-heading text-muted-foreground text-xs space-y-2">
              {content.infoTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
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
