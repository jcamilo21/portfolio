import React from 'react';
import type { ChartNodeProps } from '@models';

const nodeIcons = {
  ux: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  code: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  perf: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export const ChartNode: React.FC<ChartNodeProps> = ({
  id,
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
    <div className={`absolute ${positionClasses} z-10 w-8 h-8 sm:w-10 sm:h-10`}>
      <div className="relative group w-full h-full">
        <div
          className={`relative flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-alt)] cursor-pointer transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg shadow-[var(--color-accent)]/30 ${
            isChartVisible ? 'animate-pop node-pulse' : 'opacity-0'
          }`}
          style={{
            animationDelay: animationDelays.pop,
            animationFillMode: 'forwards, none',
          }}
        >
          <div className="text-white scale-75 group-hover:scale-90 transition-transform duration-300">
            {nodeIcons[id as keyof typeof nodeIcons]}
          </div>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        <div
          className={`absolute ${
            titlePosition === 'top' ? 'top-full mt-3' : 'bottom-full mb-3'
          } text-center whitespace-nowrap pointer-events-none ${
            isChartVisible
              ? titlePosition === 'top'
                ? 'animate-title-up'
                : 'animate-title-down'
              : 'opacity-0'
          }`}
          style={{ animationDelay: animationDelays.title }}
        >
          <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--color-text)] drop-shadow-sm">
            {title.split('<br/>').map((line, i, arr) => (
              <React.Fragment key={line}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h3>
        </div>

        <div
          className={`absolute ${tooltipPositionClasses} p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[var(--color-primary)]/98 backdrop-blur-xl border-2 border-[var(--color-accent)]/30 shadow-2xl shadow-[var(--color-accent)]/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50 overflow-hidden w-max max-w-[200px] sm:max-w-[280px]`}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/60 to-transparent"></div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-[var(--color-accent)] scale-75">
              {nodeIcons[id as keyof typeof nodeIcons]}
            </div>
            <h4 className="text-[var(--color-accent)] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              {subtitle}
            </h4>
          </div>
          <p className="text-[var(--color-text)]/80 text-xs sm:text-sm leading-relaxed font-medium text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
