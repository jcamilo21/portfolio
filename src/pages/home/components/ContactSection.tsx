import { emailContact } from '@data';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 scroll-mt-16 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-[var(--color-accent)]/5 via-[var(--color-surface)]/10 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row justify-center items-center mb-12 text-center group gap-2 sm:gap-0">
          <h3 className="text-[var(--color-text)] text-5xl sm:text-5xl lg:text-6xl font-black tracking-tight opacity-90 rotate-4 group-hover:rotate-0 transition-transform duration-300">
            CONTACTA
          </h3>
          <h3 className="text-[var(--color-accent)] text-5xl sm:text-5xl lg:text-6xl font-black tracking-tight -rotate-2 group-hover:rotate-0 transition-transform duration-300 ml-0 sm:ml-4 lg:ml-6">
            CONMIGO
          </h3>
        </div>

        <p className="text-[var(--color-text)]/60 text-center text-base sm:text-lg max-w-xl mx-auto font-light mb-16">
          ¿Tienes una idea en mente o un proyecto en el que pueda aportar valor? 
          Comunícate conmigo y comencemos a trabajar juntos.
        </p>

        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-12">
          
          <a
            href={`mailto:${emailContact}`}
            className="group relative flex items-center gap-3 sm:gap-4 bg-[var(--color-surface)]/30 hover:bg-[var(--color-surface)]/60 border border-[var(--color-border)]/20 hover:border-[var(--color-accent)]/50 rounded-2xl px-4 sm:px-8 py-4 sm:py-5 transition-all duration-300 backdrop-blur-md max-w-full overflow-hidden"
          >
            {/* animacion del borde iluminado en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/5 to-[var(--color-accent)]/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
            
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-text)]/70 group-hover:text-[var(--color-accent)] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            
            <div className="flex flex-col min-w-0">
              <span className="text-[var(--color-text)]/50 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Envíame un correo</span>
              <span className="text-[var(--color-text)] font-mono text-xs sm:text-base font-medium truncate">
                {emailContact}
              </span>
            </div>

            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-4 text-[var(--color-text)]/20 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}
