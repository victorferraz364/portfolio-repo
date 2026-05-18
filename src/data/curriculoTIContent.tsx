// Tipos para o Currículo
export interface ExperienciaItem {
  titulo: string;
  instituicao: string;
  periodo: string;
  descricao: string[];
}

export interface EducacaoItem {
  titulo: string;
  instituicao: string;
  periodo: string;
  tipo?: string;
}

export interface CompetenciaGroup {
  categoria: string;
  items: string[];
}

export interface CurriculoData {
  header: {
    nome: string;
    cargo: string;
  };
  perfilProfissional: string;
  experiencia: ExperienciaItem[];
  competenciasTecnicas: CompetenciaGroup[];
  educacao: EducacaoItem[];
  outrasInfo: {
    cnh: string;
    idiomas: string;
  };
}

// Dados do Currículo - Versão TI

export const curriculoTIData: CurriculoData = {
  header: {
    nome: "Victor Angelo Ferraz de Oliveira",
    cargo: "Analista de infraestrutura de TI & desenvolvimento full-stack",
  },

  perfilProfissional:
    "Desenvolvedor formado em ADS e pós-graduado em DevOps, com experiência em aplicações web, APIs, suporte técnico e operações de infraestrutura. Trabalho com integração entre front-end, back-end e ambientes de produção para garantir estabilidade e entrega contínua.",

  experiencia: [
    {
      titulo: "Autônomo — Suporte e Serviços de TI",
      instituicao: "Prestação de serviços · Diferencial",
      periodo: "Paralelo",
      descricao: [
        "Desenvolvimento full-stack com React e Java/Spring",
        "Implantação de ambientes Windows/Linux e virtualização",
        "Suporte técnico, redes e configuração de servidores",
      ],
    },
  ],

  competenciasTecnicas: [
    {
      categoria: "Front-end & Web",
      items: [
        "React + TypeScript",
        "Angular e interfaces responsivas",
        "HTML, CSS e melhores práticas de UI",
      ],
    },
    {
      categoria: "Back-end & APIs",
      items: [
        "Java Spring Boot",
        "APIs REST e integração de serviços",
        "SQL e modelagem de dados",
      ],
    },
    {
      categoria: "Infraestrutura & DevOps",
      items: [
        "Windows Server e Active Directory",
        "Linux e linha de comando",
        "Virtualização e deployment",
      ],
    },
  ],

  educacao: [
    {
      titulo: "Pós-Graduação em DevOps",
      instituicao: "UNOPAR",
      periodo: "Jan/2024 - Dez/2024",
      tipo: "Pós-Graduação",
    },
    {
      titulo: "Análise e Desenvolvimento de Sistemas",
      instituicao: "UNOPAR · Ensino Superior",
      periodo: "Ago/2021 - Ago/2023",
      tipo: "Graduação",
    },
    {
      titulo: "Analista de Sistemas de Automação",
      instituicao: "SENAI · Curso profissionalizante",
      periodo: "Fev/2026 - Jun/2026*",
      tipo: "Curso Profissionalizante",
    },
  ],

  outrasInfo: {
    cnh: "CNH AB",
    idiomas: "Inglês intermediário (leitura)",
  },
};
