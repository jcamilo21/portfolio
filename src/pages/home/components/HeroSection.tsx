import perfilImg from '@assets/images/perfil.webp';
import { SocialIcon } from './SocialIcon';
import { socials } from '@data';
import type { HeroSectionProps } from '@models';

export function HeroSection({ radius }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col-reverse md:flex-row justify-between items-center flex-1 gap-10 py-12 md:py-0">
      <div className="flex flex-col items-center w-full md:w-1/2 ml-0 md:ml-[5%]">
        <h1 className="flex flex-col text-(--color-text) text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
          <span className="flex">
            <span className="bg-(--color-surface) p-2.5 rounded-xl relative -rotate-[15deg] right-6 sm:right-12 text-(--color-text)">Hola,</span>
            <span className="flex items-center bg-(--color-accent) relative tracking-widest uppercase font-medium px-2 rounded-xl text-(--color-primary) rotate-[10deg]">soy</span>
          </span>
          <span className="text-(--color-accent)">Jhonatan Camilo</span>
        </h1>
        <p className="text-(--color-text) text-base leading-relaxed max-w-[28rem] mb-8">
          Ingeniero de sistemas apasionado por construir experiencias digitales
          que conectan con las personas. Diseño y desarrollo soluciones
          ingeniosas para problemas reales.
        </p>
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="relative flex items-center justify-center w-[460px] h-[460px]">
          <div className="relative z-10">
            <div className="absolute inset-0 rounded-full bg-(--color-accent)/20 blur-2xl scale-110" />
            <div className="absolute inset-0 rounded-full border border-(--color-border)/30 scale-105" />
            <img src={perfilImg} alt="Foto de perfil" fetchPriority="high" className="relative object-cover w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full border-2 border-(--color-border) shadow-2xl" />
          </div>
          {socials.map((s) => (
            <SocialIcon key={s.href} {...s} radius={radius} />
          ))}
        </div>
      </div>
    </section>
  );
}
