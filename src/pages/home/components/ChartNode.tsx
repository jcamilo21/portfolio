import React from 'react';
import type { ChartNodeProps } from '@models';

export const ChartNode: React.FC<ChartNodeProps> = ({
  title,
  subtitle,
  description,
  isChartVisible,
  positionClasses,
  animationDelays,
  titlePosition,
  tooltipPositionClasses,
}) => {
  return (
    <div className={`absolute ${positionClasses} z-10 w-6 h-6`}>
      <div className="relative group w-full h-full">
        {/* Nodo del circulo */}
        <div
          className={`relative flex items-center justify-center w-full h-full rounded-full bg-[var(--color-primary)] border-[3px] border-[var(--color-accent)] cursor-pointer transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--color-accent)] ${
            isChartVisible ? 'animate-pop node-pulse' : 'opacity-0'
          }`}
          style={{
            animationDelay: animationDelays.pop,
            animationFillMode: 'forwards, none',
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] group-hover:bg-[var(--color-primary)] transition-colors"></div>
        </div>

        {/* Titulo */}
        <div
          className={`absolute ${
            titlePosition === 'top' ? 'top-full mt-4' : 'bottom-full mb-4'
          } text-center whitespace-nowrap pointer-events-none ${
            isChartVisible
              ? titlePosition === 'top'
                ? 'animate-title-up'
                : 'animate-title-down'
              : 'opacity-0'
          }`}
          style={{ animationDelay: animationDelays.title }}
        >
          <h5 className="text-sm font-bold tracking-widest uppercase text-[var(--color-text)]/90 drop-shadow-sm">
            {title.split('<br/>').map((line, i, arr) => (
              <React.Fragment key={line}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h5>
        </div>

        {/* Tooltip de la card */}
        <div
          className={`absolute ${tooltipPositionClasses} p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[var(--color-primary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50 overflow-hidden w-max max-w-[200px] sm:max-w-none`}
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]/10"></div>
          <h6 className="text-[var(--color-accent)] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 text-left">
            {subtitle}
          </h6>
          <p className="text-[var(--color-text)]/80 text-sm leading-relaxed font-medium text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
