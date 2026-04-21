import { formacaoBase, type PageContent } from "@/data/geralContent";

export const infraContent: PageContent = {
  hero: {
    tagline: "// Desenvolvedor Full-Stack • Infraestrutura & Suporte",
    bio: "Desenvolvedor com base sólida em sistemas e infraestrutura, focado em construir soluções eficientes, resolver problemas técnicos e gerar valor real com tecnologia. Atuação com Angular, Java (Spring), APIs e suporte técnico — unindo desenvolvimento e operação no dia a dia.",
    infoTags: [
      "Desenvolvimento • Infraestrutura • DevOps",
      "Front-end • Back-end • Suporte Técnico",
      "Engenharia de Software • ADS",
      "Alto Araguaia - MT",
    ],
  },

  about: {
    infoCards: [
      { label: "Idade", value: "24 anos" },
      { label: "Localização", value: "Alto Araguaia, MT" },
      { label: "Perfil", value: "Desenvolvedor Full-Stack com visão sistêmica" },
      { label: "Disponibilidade", value: "Aberto a oportunidades em TI" },
    ],
    paragraphs: [
      <>
        Profissional de tecnologia com formação em{" "}
        <span className="text-primary font-medium">Análise e Desenvolvimento de Sistemas</span> e
        especialização em{" "}
        <span className="text-primary font-medium">Engenharia de Software</span>, com atuação
        prática tanto no desenvolvimento quanto na infraestrutura.
      </>,
      <>
        Experiência com desenvolvimento full-stack utilizando{" "}
        <span className="text-primary font-medium">Angular</span> e{" "}
        <span className="text-primary font-medium">Java (Spring)</span>, criação de APIs REST e
        integração de sistemas, além de vivência em suporte técnico, redes e ambientes Windows.
      </>,
      "Meu diferencial está na capacidade de entender o sistema como um todo — da regra de negócio à implementação técnica — o que me permite desenvolver soluções mais completas, funcionais e alinhadas com a necessidade real.",
      "Possuo curso profissionalizante complementar em análise de sistemas de automação, agregando visão de processos, lógica de controle e integração entre software e hardware — diferencial em ambientes que combinam TI com operação física.",
    ],
  },

  formacao: [
    {
      ...formacaoBase.posGrad,
      tags: ["Arquitetura de Software", "Qualidade e Testes", "Boas práticas", "Sistemas escaláveis"],
    },
    {
      ...formacaoBase.ads,
      tags: ["Desenvolvimento Web", "Banco de Dados", "Algoritmos", "APIs e integração"],
    },
    {
      ...formacaoBase.senai,
      tags: ["Lógica de controle", "PLC", "Integração hardware/software", "Processos industriais"],
    },
  ],

  competencias: {
    competencias: [
      {
        category: "Desenvolvimento",
        items: [
          "Angular (Front-end)",
          "Java + Spring Boot",
          "APIs REST",
          "Integração de sistemas",
          "SQL / Banco de Dados",
          "Git",
        ],
      },
      {
        category: "Infraestrutura & Suporte",
        items: [
          "Suporte Técnico",
          "Ambientes Windows",
          "Redes",
          "Manutenção de Hardware",
          "Diagnóstico e resolução de problemas",
          "Infraestrutura de TI",
        ],
      },
      {
        category: "Automação & Sistemas",
        items: [
          "Automação de Processos",
          "Sistemas de Controle",
          "PLC",
          "Integração hardware/software",
        ],
      },
      {
        category: "Soft Skills",
        items: [
          "Pensamento analítico",
          "Aprendizado rápido",
          "Comunicação clara",
          "Visão sistêmica",
          "Resolução de problemas",
        ],
      },
    ],
    atuacoes: [
      { label: "Desenvolvedor Full-Stack (Jr)", cor: "bg-primary/10 text-primary border-primary/20" },
      { label: "Desenvolvedor Back-end (Jr)", cor: "bg-primary/10 text-primary border-primary/20" },
      { label: "Analista de Sistemas (Jr)", cor: "bg-primary/10 text-primary border-primary/20" },
      { label: "Analista de Suporte / Infraestrutura", cor: "bg-secondary text-secondary-foreground border-border" },
      { label: "Assistente de TI", cor: "bg-secondary text-secondary-foreground border-border" },
    ],
    atuacoesSubtitle:
      "Foco em tecnologia — disponível para vagas de desenvolvimento, suporte e infraestrutura.",
    ancorBlock: {
      label: "// Diferencial Técnico",
      text: (
        <>
          Possuo uma base híbrida que une{" "}
          <span className="text-foreground font-medium">desenvolvimento</span>,{" "}
          <span className="text-foreground font-medium">infraestrutura</span> e{" "}
          <span className="text-foreground font-medium">entendimento de processos</span> — permitindo
          atuar tanto na construção de sistemas quanto na sustentação e melhoria de ambientes
          tecnológicos. Essa visão facilita a identificação de problemas, otimização de fluxos e
          entrega de soluções mais eficientes.
        </>
      ),
    },
  },

  contact: {
    intro: (
      <>
        Aberto a oportunidades na área de tecnologia, especialmente em{" "}
        <span className="text-foreground font-medium">desenvolvimento e infraestrutura</span>.
        <br />
        <span className="text-muted-foreground">Vamos conversar?</span>
      </>
    ),
    jsonBlock: `{
  "nome": "Victor Angelo",
  "cargo": "Desenvolvedor Full-Stack",
  "stack": ["Angular", "Java", "Spring Boot"],
  "foco": ["Desenvolvimento", "APIs", "Infraestrutura"],
  "status": "Disponível para TI"
}`,
  },
};
