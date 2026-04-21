import { Printer, ArrowLeft, Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";

const Curriculo = () => {
  const handlePrint = () => window.print();

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          .no-print { display: none !important; }
          html, body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print-bg {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: unset !important;
          }
          .cv-page {
            box-shadow: none !important;
            margin: 0 !important;
            padding: 18mm 20mm !important;
            max-width: 100% !important;
            border-radius: 0 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            -webkit-user-select: text !important;
            user-select: text !important;
          }
          .cv-page * {
            font-family: Arial, Helvetica, sans-serif !important;
          }
          .cv-section { page-break-inside: avoid; }
        }
      `}</style>

      {/* Toolbar */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 min-h-[44px] px-2 text-sm font-heading text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Voltar</span>
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-5 min-h-[44px] rounded-sm font-heading text-xs sm:text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
          <span className="sm:hidden">PDF</span>
        </button>
      </div>

      {/* CV Page */}
      <div className="min-h-screen bg-gray-100 pt-20 pb-12 px-4 no-print-bg">
        <div
          className="cv-page bg-white text-gray-900 max-w-[794px] mx-auto shadow-xl rounded-sm mt-4 p-6 sm:p-8 md:p-10"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 uppercase leading-tight">
              Victor Angelo Ferraz de Oliveira
            </h1>
            <p className="text-sm text-gray-600 mt-1 font-medium tracking-wide">
              Analista de Sistemas · Processos · Automação
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 border-t border-b border-gray-200 py-3 mb-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              {profile.phone}
            </span>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="break-all">{profile.email}</span>
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="break-all">{profile.linkedin.label}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              {profile.locationFull}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              CNH AB · Inglês intermediário (leitura)
            </span>
          </div>

          {/* Summary */}
          <div className="cv-section mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1.5">
              Perfil Profissional
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Formado em Análise e Desenvolvimento de Sistemas e pós-graduado em Engenharia de Software, com experiência prática em tecnologia, atuando com desenvolvimento full-stack, suporte técnico e infraestrutura. Possuo perfil analítico, organizado e orientado a processos, com facilidade para lidar com dados, sistemas e rotinas operacionais. Tenho familiaridade com controle de informações, padronização de atividades e acompanhamento de indicadores, além de boa capacidade de resolução de problemas e atenção a detalhes. Busco ampliar e colaborar com habilidades técnicas na otimização de processos, contribuindo para maior eficiência, previsibilidade e controle das operações em geral.
            </p>
          </div>

          {/* Experience */}
          <div className="cv-section mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1.5">
              Experiência Profissional
            </h2>
            <div className="space-y-5">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Frentista</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Auto Posto Araguaia</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">Dez/2023 - Dez/2025</span>
                </div>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 list-none pl-0">
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">›</span>Atendimento ao cliente com cordialidade e agilidade</li>
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">›</span>Organização do ambiente de trabalho e apoio à rotina operacional</li>
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">›</span>Orientação ao cliente e suporte em demandas do dia a dia</li>
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">›</span>Responsabilidade com horários, disciplina e postura profissional</li>
                </ul>
              </div>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">Autônomo — Suporte e Serviços de TI</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Prestação de serviços · Diferencial</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">Paralelo</span>
                </div>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 list-none pl-0">
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">›</span>Atendimento ao cliente presencial e remoto</li>
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">›</span>Diagnóstico, manutenção e formatação de computadores</li>
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">›</span>Instalação e configuração de sistemas e softwares</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="cv-section">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1.5">
              Educação
            </h2>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Pós-Graduação em Engenharia de Software</h3>
                  <p className="text-xs text-gray-500 mt-0.5">UNOPAR</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">Jan/2024 - Dez/2024</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Análise e Desenvolvimento de Sistemas</h3>
                  <p className="text-xs text-gray-500 mt-0.5">UNOPAR · Ensino Superior</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">Ago/2021 - Ago/2023</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Analista de Sistemas de Automação</h3>
                  <p className="text-xs text-gray-500 mt-0.5">SENAI · Curso profissionalizante</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">Fev/2026 - Jun/2026*</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">* Conclusão prevista para junho/2026.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculo;