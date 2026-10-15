import { useEffect, useState, type RefObject } from 'react';
import type { PDFViewerRef } from '@embedpdf/react-pdf-viewer';

export function usePDFViewer(viewerRef: RefObject<PDFViewerRef | null>, theme: string) {
  const [disabledCategories] = useState<string[]>(['annotation', 'redaction']);

  // Actualizar el tema dependiendo dek tema en mi portafolio
  useEffect(() => {
    viewerRef.current?.container?.setTheme({ preference: theme });
  }, [theme, viewerRef]);

  // configuraciones del plugin para deshabilitar ciertas funciones
  useEffect(() => {
    if (!viewerRef.current?.container) return;

    const updateCategories = async () => {
      const container = viewerRef.current?.container;
      if (!container) return;

      const registry = await container.registry;

      const commandsPlugin = registry.getPlugin('commands');
      if (commandsPlugin?.provides) {
        const commands = commandsPlugin.provides();
        if (commands?.setDisabledCategories) {
          commands.setDisabledCategories(disabledCategories);
        }
      }

      const uiPlugin = registry.getPlugin('ui');
      if (uiPlugin?.provides) {
        const ui = uiPlugin.provides();
        if (ui?.setDisabledCategories) {
          ui.setDisabledCategories(disabledCategories);
        }
      }
    };

    updateCategories();
  }, [disabledCategories, viewerRef]);

  return { disabledCategories };
}