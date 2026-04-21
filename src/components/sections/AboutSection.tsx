import { motion } from "framer-motion";
import type { AboutContent } from "@/data/geralContent";

interface Props {
  content: AboutContent;
}

const AboutSection = ({ content }: Props) => {
  return (
    <section id="sobre" className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">01.</span> Sobre
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {content.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed text-base md:text-lg ${
                  i === 0 ? "text-secondary-foreground" : "text-muted-foreground"
                }`}
              >
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
              {content.infoCards.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-sm border border-border hover:border-primary/30 transition-colors"
                  style={{ background: "var(--gradient-card)" }}
                >
                  <p className="font-heading text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
