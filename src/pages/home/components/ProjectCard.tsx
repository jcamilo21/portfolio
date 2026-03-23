import type { ProjectCardProps } from '@models';

export function ProjectCard({ project: proj, index: i, isLast }: ProjectCardProps) {
  const paragraphs = proj.description.split('\n\n').filter(p => p.trim() !== '');

  return (
    <div className={`flex flex-col gap-8 xl:gap-0 ${!isLast ? 'border-b border-(--color-border)/15' : ''} pb-12`}>

      {/* Contenedor Superior: Imagen + Stats/Tags */}
      <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>

        <div className="w-full md:w-3/5 relative group">
        <div className="rounded-xl overflow-hidden border border-(--color-border)/20 shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
          <img 
            src={proj.image} 
            alt={proj.title} 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* el boton de estado */}
        {proj.status === 'public' && (
          <a
            href={proj.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute px-3 py-1.5 sm:px-5 sm:py-2 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-lg border border-[var(--color-accent)] text-xs sm:text-sm font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 shadow-md ${i % 2 === 0 ? 'right-2 top-2 sm:right-3 sm:top-3' : 'left-2 top-2 sm:left-3 sm:top-3'} flex items-center gap-1.5 sm:gap-2`}
          >
            Ver proyecto
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        
        {proj.status === 'private' && (
          <div
            className={`absolute px-3 py-1.5 sm:px-5 sm:py-2 bg-red-500/90 text-white rounded-lg border border-red-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-md ${i % 2 === 0 ? 'right-2 top-2 sm:right-3 sm:top-3' : 'left-2 top-2 sm:left-3 sm:top-3'} flex items-center gap-1.5 sm:gap-2`}
            title="Este repositorio o proyecto es privado"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Privado
          </div>
        )}

        {proj.status === 'in-progress' && (
          <div
            className={`absolute px-3 py-1.5 sm:px-5 sm:py-2 bg-orange-500/90 text-white rounded-lg border border-orange-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-md ${i % 2 === 0 ? 'right-2 top-2 sm:right-3 sm:top-3' : 'left-2 top-2 sm:left-3 sm:top-3'} flex items-center gap-1.5 sm:gap-2`}
            title="Sigo trabajando en este proyecto"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            En proceso
          </div>
        )}
      </div>

      <div className="w-full md:w-2/5 flex flex-col gap-6 py-2">
        
        <div className="flex flex-col">
          <div className="flex gap-8 justify-center flex-row">
            {proj.stats.map((s, j) => (
              <div key={j} className="flex flex-col">
                <span className="text-(--color-accent) text-3xl font-bold tracking-tight text-center">{s.value}</span>
                <span className="text-(--color-text) text-center text-sm font-medium mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* tags de techs utilizadas en el proyecto */}
          <div className="flex flex-wrap gap-2 py-4 justify-center">
            {proj.tags.map((tag, j) => (
              <span key={j} className="px-3 py-1 rounded-md text-xs font-medium bg-(--color-surface) border border-(--color-border)/30 text-(--color-text-muted)">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Textos: Alineados a la derecha SOLO para pantallas Extra Grandes (>= 1280px) */}
        <div className="hidden xl:flex flex-col gap-4 mt-2">
          <div className="relative">
            <h4 className="relative text-[var(--color-text)] text-xl xl:text-2xl font-bold leading-snug break-words">{proj.title}</h4>
          </div>
          <div className="flex flex-col gap-4 text-[var(--color-text)]/80 text-sm leading-relaxed">
            {paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        </div>

      </div>
    </div>

    {/* Textos: Modo Bloque Inferior con 2 Columnas para pantallas Medianas y Pequeñas (< 1280px) */}
    <div className="flex xl:hidden flex-col gap-6 w-full mt-2 md:mt-6">
      <div className="w-full">
        <h4 className="text-[var(--color-text)] text-2xl sm:text-3xl font-bold leading-snug text-center md:text-left break-words">{proj.title}</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-[var(--color-text)]/80 text-base leading-relaxed">
        {paragraphs.map((p, pIdx) => (
          <p key={pIdx}>{p}</p>
        ))}
      </div>
    </div>

  </div>
  );
}
