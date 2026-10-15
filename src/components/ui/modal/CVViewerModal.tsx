import type { CVViewerModalProps } from '@models';
import { useModalScrollLock } from '@hooks';
import { useTheme } from '@contexts';

export function CVViewerModal({ isOpen, onClose, cvUrl }: CVViewerModalProps) {
  const { theme } = useTheme();
  useModalScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--color-primary)]/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClose();
        }}
        role="button"
        tabIndex={0}
        aria-label="Cerrar fondo del modal"
      />
      
      <div className="relative z-50 w-full max-w-5xl bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]/50 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-[var(--color-text)] tracking-tight">
                Análisis de CV
              </h3>
              <p className="text-xs text-[var(--color-text)]/80 font-medium uppercase tracking-wider mt-0.5">
                Jhonatan Camilo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={cvUrl}
              download
              className="flex items-center justify-center p-2.5 rounded-xl hover:bg-[var(--color-surface)] text-[var(--color-text)]/80 hover:text-[var(--color-accent)] transition-all duration-300"
              aria-label="Descargar CV"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <button 
              onClick={onClose}
              className="flex items-center justify-center p-2.5 rounded-xl hover:bg-[var(--color-surface)] text-[var(--color-text)]/80 hover:text-[var(--color-accent)] hover:rotate-90 transition-all duration-300"
              aria-label="Cerrar modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden p-4 sm:p-6 bg-[var(--color-primary)]/30">
          <div className="w-full h-full bg-[var(--color-primary)] rounded-2xl border border-[var(--color-border)]/50 overflow-hidden shadow-inner">
            <iframe
              src={`${cvUrl}#view=FitH`}
              className="w-full h-full"
              title="Curriculum Vitae"
              style={{ 
                colorScheme: theme === 'dark' ? 'dark' : 'light'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
