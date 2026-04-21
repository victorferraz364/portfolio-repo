import { formacaoBase, type PageContent } from "@/data/geralContent";

export const versatilContent: PageContent = {
  hero: {
    tagline: "// Profissional Versátil • Gestão & Tecnologia",
    bio: "Profissional com base técnica sólida e visão de negócio — capaz de atuar em áreas distintas, entender regras de processo e entregar resultado seja numa função de gestão, análise ou operação técnica. Aberto a novos desafios e pronto para aprender.",
    infoTags: [
      "Análise • Gestão • Automação",
      "Engenharia de Software • ADS",
      "SENAI • Sistemas de Automação",
      "Alto Araguaia - MT",
    ],
  },

  about: {
    infoCards: [
      { label: "Idade", value: "24 anos" },
      { label: "Localização", value: "Alto Araguaia, MT" },
      { label: "Perfil", value: "Versátil — Analítico e Executivo" },
      { label: "Disponibilidade", value: "Aberto a diversas áreas" },
    ],
    paragraphs: [
      <>
        Profissional com formação técnica em{" "}
        <span className="text-primary font-medium">Análise e Desenvolvimento de Sistemas</span>,
        pós-graduação em{" "}
        <span className="text-primary font-medium">Engenharia de Software</span> e curso
        profissionalizante em{" "}
        <span className="text-primary font-medium">Analista de Sistemas de Automação</span> (SENAI)
        — um conjunto que combina raciocínio analítico, visão sistêmica e entendimento de processos
        físicos e digitais.
      </>,
      "Meu diferencial está na capacidade de unir base técnica em tecnologia e processos, com facilidade para entender operações, organizar informações e apoiar rotinas estruturadas. Tenho perfil analítico, atenção a detalhes e facilidade em aprender rapidamente, buscando sempre contribuir com eficiência e melhoria contínua.",
      "Sou movido por aprendizado contínuo e estou sempre disposto a mergulhar em novos domínios. Acredito que profissionais que entendem o todo — da regra de negócio à solução — são os que geram mais valor em qualquer equipe.",
    ],
  },

  formacao: [
    { ...formacaoBase.posGrad, tags: ["Arquitetura", "Qualidade de Software", "Processos", "Boas Práticas"] },
    { ...formacaoBase.ads, tags: ["ADS", "Banco de Dados", "Algoritmos", "Gestão de Projetos"] },
    { ...formacaoBase.senai, tags: ["Automação Industrial", "Controle de Processos", "PLC", "Instrumentação"] },
  ],

  competencias: {
    competencias: [
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
    ],
    atuacoes: [
      { label: "Analista de Processos (Jr)", cor: "bg-primary/10 text-primary border-primary/20" },
      { label: "Analista de Planejamento", cor: "bg-primary/10 text-primary border-primary/20" },
      { label: "Analista de Sistemas (Jr)", cor: "bg-primary/10 text-primary border-primary/20" },
      { label: "Analista de Suporte", cor: "bg-primary/10 text-primary border-primary/20" },
      { label: "Assistente de TI", cor: "bg-secondary text-secondary-foreground border-border" },
      { label: "Analista de Automação (Jr)", cor: "bg-secondary text-secondary-foreground border-border" },
      { label: "Funções analíticas em ambiente industrial ou corporativo", cor: "bg-secondary text-secondary-foreground border-border" },
    ],
    atuacoesSubtitle:
      "Perfil maleável — disponível para cargos técnicos, de apoio ou operação em diferentes segmentos.",
    ancorBlock: {
      label: "// Âncora Industrial",
      text: (
        <>
          Interesse em atuar em ambientes industriais, com foco em{" "}
          <span className="text-foreground font-medium">organização de processos</span>,{" "}
          <span className="text-foreground font-medium">controle de atividades</span> e{" "}
          <span className="text-foreground font-medium">apoio ao planejamento operacional</span> —
          conectado a áreas como PCM, manutenção, chão de fábrica e controle de ordens.
        </>
      ),
    },
  },

  contact: {
    intro: (
      <>
        Estou sempre aberto a novas oportunidades e conexões.
        <br />
        <span className="text-muted-foreground">Vamos conversar?</span>
      </>
    ),
    jsonBlock: `{
  "nome": "Victor Angelo",
  "stack": ["Angular", "Java", "Spring"],
  "formação": "ADS — UNOPAR",
  "status": "Disponível"
}`,
  },
};
