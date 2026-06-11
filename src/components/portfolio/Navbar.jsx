import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Reviews', href: '/#testimonials' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center transition-all duration-400"
      style={{
        padding: scrolled ? '14px 72px' : '20px 72px',
        background: scrolled ? 'rgba(10,9,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid var(--lisa-border)' : '0.5px solid transparent',
      }}
    >
      <a
        href="#"
        className="font-heading text-xl font-semibold tracking-wide"
        style={{ color: 'var(--lisa-text)' }}
      >
        Lisa Anggraini
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(link => {
          const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href.replace('/#', '/#')));
          return (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.1em] transition-colors duration-200 hover:text-[var(--lisa-purple-light)]"
              style={{ color: isActive ? 'var(--lisa-purple-light)' : 'var(--lisa-text-muted)' }}
            >
              {link.label}
            </a>
          );
        })}
        <a
          href="/contact"
          className="text-[11px] px-[22px] py-[9px] rounded-md tracking-wider transition-all duration-200 hover:translate-y-[-1px]"
          style={{
            background: 'var(--lisa-purple)',
            color: 'var(--lisa-text)',
          }}
        >
          Let's Connect
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-[1.5px] transition-transform duration-300" 
          style={{ 
            background: 'var(--lisa-text)',
            transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none'
          }} />
        <span className="block w-5 h-[1.5px] transition-opacity duration-300"
          style={{ 
            background: 'var(--lisa-text)',
            opacity: mobileOpen ? 0 : 1 
          }} />
        <span className="block w-5 h-[1.5px] transition-transform duration-300"
          style={{ 
            background: 'var(--lisa-text)',
            transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none'
          }} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col items-center gap-6 py-8 md:hidden"
          style={{
            background: 'rgba(10,9,20,0.97)',
            backdropFilter: 'blur(12px)',
            borderBottom: '0.5px solid var(--lisa-border)',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[12px] uppercase tracking-[0.1em] transition-colors duration-200"
              style={{ color: 'var(--lisa-text-muted)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-[12px] px-6 py-2 rounded-md"
            style={{ background: 'var(--lisa-purple)', color: 'var(--lisa-text)' }}
          >
            Let's Connect
          </a>
        </div>
      )}
    </nav>
  );
}
