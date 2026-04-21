import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import type { ContactContent } from "@/data/geralContent";

interface Props {
  content: ContactContent;
}

const ContactSection = ({ content }: Props) => {
  return (
    <section id="contato" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-card overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">05.</span> Contato
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-12" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-6 min-w-0">
            <p className="text-secondary-foreground text-lg leading-relaxed">
              {content.intro}
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="group-hover:underline underline-offset-4 break-all">
                  {profile.email}
                </span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Alto Araguaia, MT — Brasil</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-sm border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-sm border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div
            className="p-5 sm:p-8 rounded-sm border border-border glow min-w-0"
            style={{ background: "var(--gradient-card)" }}
          >
            <pre className="font-heading text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap break-words overflow-x-auto">
              <code>{content.jsonBlock}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
