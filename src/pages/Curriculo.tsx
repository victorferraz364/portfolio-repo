import { Printer, ArrowLeft, Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "@/data/profile";
import { curriculoData } from "@/data/curriculoContent";
import { curriculoTIData } from "@/data/curriculoTIContent";

const Curriculo = () => {
  const location = useLocation();
  
  // Determina qual dataset usar baseado na rota
  const isTIRoute = location.pathname.includes("/ti");
  const data = isTIRoute ? curriculoTIData : curriculoData;
  
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
            padding: 16mm 16mm 14mm !important;
            max-width: 100% !important;
            border-radius: 0 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 11px !important;
            line-height: 1.35 !important;
            -webkit-user-select: text !important;
            user-select: text !important;
          }
          .cv-page * {
            font-family: Arial, Helvetica, sans-serif !important;
          }
          .cv-page h1 {
            font-size: 1.8rem !important;
          }
          .cv-page h2 {
            margin-bottom: 0.3rem !important;
          }
          .cv-page .space-y-5 > * + * {
            margin-top: 0.45rem !important;
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
              {data.header.nome}
            </h1>
            <p className="text-sm text-gray-600 mt-1 font-medium tracking-wide">
              {data.header.cargo}
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
              {data.outrasInfo.cnh} · {data.outrasInfo.idiomas}
            </span>
          </div>

          {/* Summary */}
          <div className="cv-section mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1.5">
              Perfil Profissional
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {data.perfilProfissional}
            </p>
          </div>

          {/* Experience */}
          <div className="cv-section mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1.5">
              Experiência Profissional
            </h2>
            <div className="space-y-5">
              {data.experiencia.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{exp.titulo}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{exp.instituicao}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">{exp.periodo}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 list-none pl-0">
                    {exp.descricao.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-gray-400 flex-shrink-0">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="cv-section mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1.5">
              Competências Técnicas
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {data.competenciasTecnicas.map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-xs font-semibold text-gray-800 mb-2">{group.categoria}</h3>
                  <ul className="space-y-1 text-xs text-gray-700 list-none pl-0">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-gray-400 flex-shrink-0 text-[10px]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="cv-section">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1.5">
              Educação
            </h2>
            <div className="space-y-3">
              {data.educacao.map((edu, idx) => (
                <div key={idx} className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{edu.titulo}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{edu.instituicao}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">{edu.periodo}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">* Conclusão prevista para junho/2026.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculo;