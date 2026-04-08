import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Wrench } from "lucide-react";

const formacoes = [
  {
    icon: GraduationCap,
    titulo: "Pós-Graduação em Engenharia de Software",
    instituicao: "Em andamento",
    status: "Pós-Graduação",
    descricao:
      "Especialização com foco em arquitetura de software, qualidade, processos de desenvolvimento e boas práticas de engenharia. Amplia a capacidade de estruturar soluções escaláveis e bem documentadas.",
    tags: ["Arquitetura", "Qualidade de Software", "Processos", "Boas Práticas"],
  },
  {
    icon: BookOpen,
    titulo: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Graduação concluída",
    status: "Graduação",
    descricao:
      "Formação base em desenvolvimento, análise de sistemas, banco de dados, algoritmos e gestão de projetos. Fornece a fundamentação técnica e analítica para atuar tanto no desenvolvimento quanto na análise de processos e sistemas.",
    tags: ["ADS", "Banco de Dados", "Algoritmos", "Gestão de Projetos"],
  },
  {
    icon: Wrench,
    titulo: "Analista de Sistemas de Automação",
    instituicao: "SENAI — Conclusão prevista: Junho 2026",
    status: "Curso Profissionalizante",
    descricao:
      "Formação profissionalizante em automação industrial e sistemas de controle. Adiciona ao perfil o entendimento de processos físicos, lógica de controle e integração entre hardware e software — habilidade diferenciada para atuar em indústrias e ambientes de automação.",
    tags: ["Automação Industrial", "Controle de Processos", "PLC", "Instrumentação"],
  },
];

const FormacaoSection = () => {
  return (
    <section id="formacao" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">02.</span> Formação
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-12" />
        </motion.div>

        <div className="space-y-6">
          {formacoes.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.titulo}
                className="group p-6 md:p-8 rounded-sm border border-border hover:border-primary/30 transition-all duration-300"
                style={{ background: 'var(--gradient-card)' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                      <h3 className="font-heading text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {f.titulo}
                      </h3>
                      <span className="font-heading text-xs text-primary uppercase tracking-widest whitespace-nowrap">
                        {f.status}
                      </span>
                    </div>
                    <p className="font-heading text-xs text-muted-foreground uppercase tracking-widest mt-1">
                      {f.instituicao}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 md:ml-14">
                  {f.descricao}
                </p>
                <div className="flex flex-wrap gap-2 md:ml-14">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-heading rounded-sm bg-secondary text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FormacaoSection;
