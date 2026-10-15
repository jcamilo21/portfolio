import { useEffect, useState, type RefObject } from 'react';
import type { PDFViewerRef } from '@embedpdf/react-pdf-viewer';

export function usePDFViewer(viewerRef: RefObject<PDFViewerRef>, theme: string) {
  const [disabledCategories] = useState<string[]>(['annotation', 'redaction']);

  // Actualizar el tema dependiendo dek tema en mi portafolio
  useEffect(() => {
    viewerRef.current?.container?.setTheme({ preference: theme });
  }, [theme, viewerRef]);

  // configuraciones del plugin para deshabilitar ciertas funciones
  useEffect(() => {
    if (!viewerRef.current?.container) return;

    const updateCategories = async () => {
      const registry = await viewerRef.current!.container!.registry;

      const commands = registry
        .getPlugin('commands')
        ?.provides();
      if (commands) {
        commands.setDisabledCategories(disabledCategories);
      }

      const ui = registry.getPlugin('ui')?.provides();
      if (ui) {
        ui.setDisabledCategories(disabledCategories);
      }
    };

    updateCategories();
  }, [disabledCategories, viewerRef]);

  return { disabledCategories };
}