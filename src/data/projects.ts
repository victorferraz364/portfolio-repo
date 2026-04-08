export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  github: string;
  live: string;
  /** Exibe o projeto na seção da página principal */
  visible: boolean;
  /** Destaca o projeto com estilo especial */
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão",
    description:
      "Aplicação web completa para gestão de processos internos com autenticação, dashboards e relatórios dinâmicos.",
    techs: ["Angular", "Spring Boot", "PostgreSQL"],
    github: "#",
    live: "#",
    visible: true,
    featured: true,
  },
  {
    id: 2,
    title: "API RESTful",
    description:
      "API robusta com autenticação JWT, CRUD completo e documentação Swagger para integração com múltiplos clientes.",
    techs: ["Java", "Spring Security", "MySQL"],
    github: "#",
    live: "#",
    visible: true,
    featured: false,
  },
  {
    id: 3,
    title: "Landing Page Responsiva",
    description:
      "Página institucional com design moderno, animações suaves e otimização para SEO e performance.",
    techs: ["Angular", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "#",
    visible: true,
    featured: false,
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description:
      "Painel interativo com gráficos em tempo real, filtros avançados e exportação de dados para relatórios.",
    techs: ["Angular", "Chart.js", "REST API"],
    github: "#",
    live: "#",
    visible: true,
    featured: false,
  },
];

export default projects;
