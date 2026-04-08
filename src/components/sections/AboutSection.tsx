import { motion } from "framer-motion";

const AboutSection = () => {
  const info = [
    { label: "Idade", value: "24 anos" },
    { label: "Localização", value: "Alto Araguaia, MT" },
    { label: "Perfil", value: "Versátil — Analítico e Executivo" },
    { label: "Disponibilidade", value: "Aberto a diversas áreas" },
  ];

  return (
    <section id="sobre" className="py-24 px-6 md:px-12 lg:px-24">
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
            <p className="text-secondary-foreground leading-relaxed text-base md:text-lg">
              Profissional com formação técnica em <span className="text-primary font-medium">Análise e Desenvolvimento de Sistemas</span>, pós-graduação em <span className="text-primary font-medium">Engenharia de Software</span> e curso profissionalizante em <span className="text-primary font-medium">Analista de Sistemas de Automação</span> (SENAI) — um conjunto que combina raciocínio analítico, visão sistêmica e entendimento de processos físicos e digitais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meu diferencial está na Profissional com base técnica 
              em tecnologia e processos, com facilidade 
              para entender operações, organizar informações e apoiar 
              rotinas estruturadas. Tenho perfil analítico, atenção a 
              detalhes e facilidade em aprender rapidamente, buscando 
              sempre contribuir com eficiência e melhoria contínua.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sou movido por aprendizado contínuo e estou sempre disposto a mergulhar em novos domínios. Acredito que profissionais que entendem o todo — da regra de negócio à solução — são os que geram mais valor em qualquer equipe.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {info.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-sm border border-border hover:border-primary/30 transition-colors"
                style={{ background: 'var(--gradient-card)' }}
              >
                <p className="font-heading text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-foreground font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
