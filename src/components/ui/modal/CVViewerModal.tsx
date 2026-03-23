import { useRef, lazy, Suspense } from 'react';
import { useTheme } from '@contexts';
import { useModalScrollLock, usePDFViewer } from '@hooks';
import type { CVViewerModalProps } from '@models';

const PDFViewer = lazy(() => import('@embedpdf/react-pdf-viewer').then(module => ({ default: module.PDFViewer })));

export function CVViewerModal({ isOpen, onClose, cvUrl }: CVViewerModalProps) {
  const viewerRef = useRef<any>(null);
  const { theme } = useTheme();

  const { disabledCategories } = usePDFViewer(viewerRef, theme);
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
      ></div>
      
      <div className="relative z-50 w-full max-w-5xl bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Modal Header */}
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
            <button 
              onClick={onClose}
              className="cursor-pointer flex items-center justify-center p-2.5 rounded-xl hover:bg-[var(--color-surface)] text-[var(--color-text)]/80 hover:text-[var(--color-accent)] hover:rotate-90 transition-all duration-300"
              aria-label="Cerrar modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-6 bg-[var(--color-primary)]/30">
          
          {/* Visor PDF */}
          <div className="flex-1 min-h-[500px] w-full bg-[var(--color-primary)] rounded-2xl border border-[var(--color-border)]/50 overflow-hidden shadow-inner relative flex items-center justify-center">
            {isOpen && (
              <Suspense fallback={<div className="text-[var(--color-text)]/50 font-medium">Cargando PDF...</div>}>
                <PDFViewer
                  ref={viewerRef}
                  config={{
                    src: cvUrl,
                    theme: { preference: theme },
                    disabledCategories: disabledCategories,
                  }}
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                />
              </Suspense>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}