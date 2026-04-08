import { motion } from "framer-motion";

const competencias = [
  {
    category: "Análise & Negócios",
    items: [
      "Levantamento de Requisitos",
      "Mapeamento de Processos",
      "BPMN / UML",
      "Regras de Negócio",
      "Documentação Funcional",
      "Casos de Uso",
    ],
  },
  {
    category: "Organização & Metodologias",
    items: [
      "Scrum / Kanban",
      "Apoio a Projetos",
      "Acompanhamento de Processos",
      "Organização de Demandas",
      "Execução de Mudanças",
      "Indicadores e Métricas",
    ],
  },
  {
    category: "Tecnologia & Sistemas",
    items: [
      "Desenvolvimento Web",
      "SQL / Banco de Dados",
      "APIs REST",
      "Automação de Processos",
      "Sistemas de Controle",
      "Infraestrutura de TI",
    ],
  },
  {
    category: "Perfil & Soft Skills",
    items: [
      "Aprendizado rápido",
      "Adaptabilidade",
      "Comunicação clara",
      "Visão sistêmica",
      "Trabalho em equipe",
      "Resolução de problemas",
    ],
  },
];

const atuacoes = [
  { label: "Analista de Processos (Jr)", cor: "bg-primary/10 text-primary border-primary/20" },
  { label: "Analista de Planejamento", cor: "bg-primary/10 text-primary border-primary/20" },
  { label: "Analista de Sistemas (Jr)", cor: "bg-primary/10 text-primary border-primary/20" },
  { label: "Analista de Suporte", cor: "bg-primary/10 text-primary border-primary/20" },
  { label: "Assistente de TI", cor: "bg-secondary text-secondary-foreground border-border" },
  { label: "Analista de Automação (Jr)", cor: "bg-secondary text-secondary-foreground border-border" },
  { label: "Funções analíticas em ambiente industrial ou corporativo", cor: "bg-secondary text-secondary-foreground border-border" },
];

const CompetenciasSection = () => {
  return (
    <section id="competencias" className="py-24 px-6 md:px-12 lg:px-24">
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

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
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
            Perfil maleável — disponível para cargos técnicos, de apoio ou operação em diferentes segmentos.
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
              // Âncora Industrial
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Interesse em atuar em ambientes industriais, com foco em <span className="text-foreground font-medium">organização de processos</span>, <span className="text-foreground font-medium">controle de atividades</span> e <span className="text-foreground font-medium">apoio ao planejamento operacional</span> — conectado a áreas como PCM, manutenção, chão de fábrica e controle de ordens.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetenciasSection;
