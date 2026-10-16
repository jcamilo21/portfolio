/* eslint-disable react-refresh/only-export-components */
import { Javascript, Css, TailwindCss, Laravel, Livewire, Filament, Mariadb } from '@thesvg/react';

// Local SVG components with better contrast
const MySQLIcon = () => {
  return <img src="/logos/mysql.svg" alt="MySQL" className="w-full h-full" />;
};

const PostgreSQLIcon = () => {
  return <img src="/logos/postgresql.svg" alt="PostgreSQL" className="w-full h-full" />;
};

const PHPIcon = () => {
  return <img src="/logos/php.svg" alt="PHP" className="w-full h-full" />;
};

export const technologiesData = [
  { icon: Javascript, name: 'JavaScript' },
  { icon: Css, name: 'CSS' },
  { icon: TailwindCss, name: 'Tailwind CSS' },
  { icon: PHPIcon, name: 'PHP' },
  { icon: Laravel, name: 'Laravel' },
  { icon: Livewire, name: 'Livewire' },
  { icon: Filament, name: 'Filament' },
  { icon: MySQLIcon, name: 'MySQL' },
  { icon: Mariadb, name: 'MariaDB' },
  { icon: PostgreSQLIcon, name: 'PostgreSQL' },
];