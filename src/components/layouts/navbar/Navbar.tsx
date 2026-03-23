import { useHideOnScroll } from "@hooks";
import { navItems } from "@data";
import { NavLink, ToggleTheme } from "./components";

export function Navbar() {
  const isVisible = useHideOnScroll(80);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex bg-[var(--color-primary)]/80 backdrop-blur-md border-b border-[var(--color-border)]/20 shadow-[0_1px_30px_rgba(0,0,0,0.2)] justify-between items-center px-6 md:px-10 h-16 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >

      <h1 className="tracking-wide text-[var(--color-text)] font-light text-3xl md:text-4xl m-0">
        Logo
      </h1>

      <div className="flex gap-10 max-sm:hidden items-center">
        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} label={item.label} />
        ))}
        <ToggleTheme />
      </div>

    </nav>
  )
}