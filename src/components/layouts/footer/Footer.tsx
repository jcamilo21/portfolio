import { socials } from "@data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-(--color-primary)/80 backdrop-blur-md border-t border-(--color-border)/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <p className="text-(--color-text) text-sm font-light">
              © {currentYear} Jhonatan Camilo.
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: social.bg }}
                  className="group p-2.5 rounded-lg border border-(--color-border)/30 hover:bg-(--color-accent) transition-all duration-300 hover:scale-110"
                  aria-label={social.href.includes('github') ? 'GitHub' : social.href.includes('linkedin') ? 'LinkedIn' : 'CodePen'}
                >
                  <Icon className={`w-3 h-3 ${social.bg === 'var(--blue-950)' ? 'text-white' : 'text-(--color-text)'} group-hover:text-white`} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
