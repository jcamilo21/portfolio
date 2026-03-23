export const chartNodesData = [
  {
    id: 'ux',
    title: 'Experiencia<br/>De Usuario',
    subtitle: 'Base',
    description: 'Enfocado en crear interfaces super intuitivas y agradables, siempre pensando primero en la necesidad de la persona que usa el sistema e invirtiendo la carga cognitiva.',
    positionClasses: 'left-[10%] top-[90%] -translate-x-1/2 -translate-y-1/2',
    animationDelays: { pop: '0.2s, 0.7s', title: '0.5s' },
    titlePosition: 'top' as const,
    tooltipPositionClasses: 'left-full ml-3 sm:ml-5 top-1/2 -translate-y-1/2 w-[200px] sm:w-[280px] translate-x-3 group-hover:translate-x-0'
  },
  {
    id: 'code',
    title: 'Código<br/>Escalable',
    subtitle: 'Desarrollo',
    description: 'Diseño arquitecturas robustas para evitar problemas a futuro. Mantengo una base sólida en mis proyectos donde el código fluye de forma modular y ordenada.',
    positionClasses: 'left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2',
    animationDelays: { pop: '0.8s, 1.3s', title: '1.1s' },
    titlePosition: 'bottom' as const,
    tooltipPositionClasses: 'top-full mt-3 sm:mt-5 left-1/2 -translate-x-1/2 w-[200px] sm:w-[280px] -translate-y-3 group-hover:translate-y-0'
  },
  {
    id: 'perf',
    title: 'Rendimiento<br/>Óptimo',
    subtitle: 'Objetivo',
    description: 'Mi cumbre personal. Busco unir una buena estructura con la máxima optimización, asegurando que cada sistema que entrego sea extra rápido y eficiente.',
    positionClasses: 'left-[90%] top-[10%] -translate-x-1/2 -translate-y-1/2',
    animationDelays: { pop: '1.6s, 2.1s', title: '1.9s' },
    titlePosition: 'top' as const,
    titleWrapperClasses: '-right-30 text-right',
    tooltipPositionClasses: 'right-full mr-3 sm:mr-5 top-1/2 -translate-y-1/2 w-[200px] sm:w-[280px] -translate-x-3 group-hover:translate-x-0'
  }
];
