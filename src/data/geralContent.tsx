import { ReactNode } from "react";
import { GraduationCap, BookOpen, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// --- Tipos --------------------------------------------------------------------

export interface HeroContent {
  tagline: string;
  bio: string;
  infoTags: string[];
}

export interface AboutContent {
  paragraphs: ReactNode[];
  infoCards: { label: string; value: string }[];
}

export interface FormacaoItem {
  icon: LucideIcon;
  titulo: string;
  instituicao: string;
  status: string;
  descricao: string;
  tags: string[];
}

export interface CompetenciaGroup {
  category: string;
  items: string[];
}

export interface AtuacaoItem {
  label: string;
  cor: string;
}

export interface AncorBlock {
  label: string;
  text: ReactNode;
}

export interface CompetenciasContent {
  competencias: CompetenciaGroup[];
  atuacoes: AtuacaoItem[];
  atuacoesSubtitle: string;
  ancorBlock: AncorBlock;
}

export interface ContactContent {
  intro: ReactNode;
  jsonBlock: string;
}

export interface PageContent {
  hero: HeroContent;
  about: AboutContent;
  formacao: FormacaoItem[];
  competencias: CompetenciasContent;
  contact: ContactContent;
}

// --- Formação base compartilhada (mesma pessoa) -------------------------------

export const formacaoBase = {
  posGrad: {
    icon: GraduationCap,
    titulo: "Pós-Graduação em Engenharia de Software",
    instituicao: "Concluída",
    status: "Pós-Graduação",
    descricao:
      "Especialização com foco em arquitetura de software, qualidade, processos de desenvolvimento e boas práticas de engenharia. Amplia a capacidade de estruturar soluções escaláveis e bem documentadas.",
  },
  ads: {
    icon: BookOpen,
    titulo: "Análise e Desenvolvimento de Sistemas",
    instituicao: "Graduação concluída",
    status: "Graduação",
    descricao:
      "Formação base em desenvolvimento, análise de sistemas, banco de dados, algoritmos e gestão de projetos. Fornece a fundamentação técnica e analítica para atuar tanto no desenvolvimento quanto na análise de processos e sistemas.",
  },
  senai: {
    icon: Wrench,
    titulo: "Analista de Sistemas de Automação",
    instituicao: "SENAI — Conclusão prevista: Junho 2026",
    status: "Curso Profissionalizante",
    descricao:
      "Formação profissionalizante em automaçãoe sistemas de controle. Adiciona ao perfil o entendimento de processos físicos, lógica de controle e integração entre hardware e software — habilidade diferenciada para atuar em indústrias e ambientes de automação.",
  },
};
