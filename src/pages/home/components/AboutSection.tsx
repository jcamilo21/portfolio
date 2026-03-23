import { useState, useRef } from 'react';
import { CVViewerModal } from '@components';
import { chartNodesData, technologiesData } from '@data';
import { ChartNode } from './ChartNode';
import myCV from '../../../assets/documents/Jhonatan_Camilo_Cv.pdf';
import '../styled-components/AboutSection.css';
import { useIntersectionObserver } from '@hooks';

export function AboutSection() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const isChartVisible = useIntersectionObserver(chartRef, { threshold: 0.3 });

  return (
    <section id="about" className="relative py-16 scroll-mt-16">
      
      <div className="absolute top-0 right-[-10%] w-[40rem] h-[40rem] bg-[var(--color-accent)]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[var(--color-surface)]/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="flex justify-center mb-20 text-center group">
        <h3 className="text-[var(--color-text)] text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight opacity-90 rotate-4 group-hover:rotate-0 transition-transform duration-300">
          SOBRE
        </h3>
        <h3 className="text-[var(--color-accent)] text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight -rotate-2 group-hover:rotate-0 transition-transform duration-300 ml-3 sm:ml-4 lg:ml-6">
          MÍ
        </h3>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="flex flex-col space-y-8 relative">
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl font-medium text-[var(--color-text)] leading-tight">
              Desarrollador apasionado por crear experiencias digitales
              <span className="text-[var(--color-text)]/40 italic"> extraordinarias</span>.
            </p>
            {/* la opacidad aca es para q el texto base no chille tanto de noche */}
            <p className="text-[var(--color-text)]/70 text-lg leading-relaxed font-light">
              Enfocado en tecnologías web modernas, transformo ideas
              complejas en soluciones intuitivas, eficientes y escalables. 
              Me enfoco constantemente en aprender, innovar y ofrecer un impacto real
              en cada proyecto.
            </p>
          </div>
          
          <div className="pt-4 flex justify-between flex-wrap gap-5">
            <button 
              onClick={() => setIsCVModalOpen(true)}
              className="cursor-pointer px-7 py-3.5 rounded-2xl bg-[var(--color-text)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-text)]/90 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5"
            >
              <svg className="w-5 h-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Analizar CV
            </button>
            <a 
              href="#contact"
              className="cursor-pointer px-7 py-3.5 rounded-2xl border border-[var(--color-text)]/10 text-[var(--color-text)]/80 font-medium hover:border-[var(--color-text)]/30 hover:text-[var(--color-text)] hover:bg-[var(--color-text)]/5 transition-all duration-300 flex items-center gap-2.5"
            >
              Contáctame
              <svg className="w-5 h-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div ref={chartRef} className="relative h-[300px] sm:h-96 w-full flex items-center justify-center py-6 sm:pl-10">
          <div className="relative w-full max-w-[280px] sm:max-w-md h-full mx-auto">
            {/* lLinea que conecta con el chart */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M 10 90 C 30 90, 35 50, 50 50 C 65 50, 70 10, 90 10" 
                fill="none" 
                className={`${isChartVisible ? 'chart-line-animate' : 'opacity-0'} drop-shadow-md`}
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            {chartNodesData.map((node) => (
              <ChartNode
                key={node.id}
                {...node}
                isChartVisible={isChartVisible}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mi stack */}
      <div className="w-full mt-32 relative">
        <div className="flex flex-col items-center mb-16">
          <h4 className="text-sm font-bold tracking-[0.3em] text-[var(--color-text)]/50 uppercase mb-4 text-center">
            Mi Stack Tecnológico
          </h4>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)]/80 to-transparent rounded-full"></div>
        </div>

        {/* Contenedor principal con máscara para desvanecer los bordes y hover para pausar */}
        <div className="carrusel-container flex overflow-hidden mask-horizontal py-4 select-none">
          
          {/* Primer bloque de repetición */}
          <div className="flex flex-shrink-0 animate-slide">
            {technologiesData.map((Tech) => (
              <div
                key={Tech.name}
                className="mx-3 flex items-center gap-4 px-8 py-4 bg-[var(--color-text)]/[0.02] backdrop-blur-md border border-[var(--color-text)]/10 rounded-2xl shadow-[0_4px_20px_transparent] hover:shadow-[0_4px_20px_rgba(var(--color-accent),0.1)] hover:border-[var(--color-accent)]/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 group-hover:bg-[var(--color-accent)]/20 transition-colors duration-300">
                  <Tech.icon className="w-7 h-7 text-[var(--color-text)]/70 group-hover:text-[var(--color-accent)] transition-colors duration-300" style={{ fill: "currentColor" }} />
                </div>
                <span className="font-semibold text-lg text-[var(--color-text)]/70 group-hover:text-[var(--color-text)] tracking-wide transition-colors duration-300">
                  {Tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Segundo bloque de repetición exacto para el efecto infinito */}
          <div className="flex flex-shrink-0 animate-slide" aria-hidden="true">
            {technologiesData.map((Tech) => (
              <div
                key={`dup-${Tech.name}`}
                className="mx-3 flex items-center gap-4 px-8 py-4 bg-[var(--color-text)]/[0.02] backdrop-blur-md border border-[var(--color-text)]/10 rounded-2xl shadow-[0_4px_20px_transparent] hover:shadow-[0_4px_20px_rgba(var(--color-accent),0.1)] hover:border-[var(--color-accent)]/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-text)]/5 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-300">
                  <Tech.icon className="w-7 h-7 text-[var(--color-text)]/70 group-hover:text-[var(--color-accent)] transition-colors duration-300" style={{ fill: "currentColor" }} />
                </div>
                <span className="font-semibold text-lg text-[var(--color-text)]/70 group-hover:text-[var(--color-text)] tracking-wide transition-colors duration-300">
                  {Tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      <CVViewerModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
        cvUrl={myCV}
      />
    </section>
  );
}
