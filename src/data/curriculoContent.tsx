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

// Dados do Currículo - Versão Geral

export const curriculoData: CurriculoData = {
  header: {
    nome: "Victor Angelo Ferraz de Oliveira",
    cargo: "Analista de Sistemas & Automação Industrial",
  },

  perfilProfissional:
    "Profissional formado em ADS e pós-graduado em DevOps, com experiência prática em TI, automação industrial e suporte. Atuo na conexão entre software, infraestrutura e processos físicos, entregando soluções que unificam desenvolvimento, operação e controle de máquinas.",

  experiencia: [
    {
      titulo: "Autônomo — TI e Automação Industrial",
      instituicao: "Prestação de serviços · Diferencial",
      periodo: "Paralelo",
      descricao: [
        "Suporte técnico e manutenção de sistemas Windows/Linux",
        "Configuração e suporte de redes, servidores e ambientes virtuais",
        "Implantação de ambientes Windows/Linux e virtualização"
     
      ],
    },
  ],

  competenciasTecnicas: [
    {
      categoria: "TI e Infraestrutura",
      items: [
        "Redes, Windows Server e virtualização",
        "Windows/Linux e instalação de software",
        "Configuração de servidores e ambientes virtuais",
      ],
    },
    {
      categoria: "Desenvolvimento & Dados",
      items: [
        "React + TypeScript e Java/Spring",
        "APIs REST e integração de sistemas",
        "Banco de dados e SQL",
      ],
    },
    {
      categoria: "Automação Industrial",
      items: [
        "Controle de processos e lógica de automação",
        "Integração hardware/software",
        "Suporte a equipamentos e processos industriais",
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
