import { motion } from "framer-motion";
import type { CompetenciasContent } from "@/data/geralContent";

interface Props {
  content: CompetenciasContent;
}

const CompetenciasSection = ({ content }: Props) => {
  const { competencias, atuacoes, atuacoesSubtitle, ancorBlock } = content;
  return (
    <section id="competencias" className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">03.</span> Competências
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {competencias.map((group, i) => (
            <motion.div
              key={group.category}
              className="p-6 rounded-sm border border-border hover:border-primary/30 transition-colors"
              style={{ background: 'var(--gradient-card)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-heading text-primary text-sm uppercase tracking-widest mb-4">
                {`{ ${group.category} }`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-sm bg-secondary text-secondary-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Áreas de atuação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-lg font-bold mb-2">
            Onde posso atuar
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            {atuacoesSubtitle}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {atuacoes.map((item) => (
              <span
                key={item.label}
                className={`px-4 py-2 text-sm font-heading font-medium rounded-sm border ${item.cor} transition-colors`}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div
            className="p-5 rounded-sm border border-primary/20 bg-primary/5"
          >
            <p className="font-heading text-xs text-primary uppercase tracking-widest mb-2">
              {ancorBlock.label}
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {ancorBlock.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetenciasSection;
