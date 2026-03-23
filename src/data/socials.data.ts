import { Github, Linkedin } from '@thesvg/react';
import { LucideCodepen } from '@components/ui/icons/LucideCodepen';
import type { Social } from '@models';

export const emailContact = 'jhonatancamilo1535@gmail.com';

export const socials: Social[] = [
  { icon: Github,   href: 'https://github.com/jcamilo21', angle: -60,  delay: 3000, bg: 'var(--blue-950)' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jcampos21/',          angle: 180,  delay: 3500, bg: 'var(--blue-200)' },
  { icon: LucideCodepen, href: 'https://codepen.io/jcampos21',             angle: 60,   delay: 4000, bg: 'var(--blue-950)'  },
];
