export default function Footer() {
  return (
    <footer
      className="px-6 md:px-[72px] py-7 flex flex-col md:flex-row justify-between items-center gap-4"
      style={{ borderTop: '0.5px solid var(--lisa-border)' }}
    >
      <div className="font-heading text-[17px] font-semibold" style={{ color: 'var(--lisa-text)' }}>
        Lisa Anggraini H.
      </div>
      <div className="flex gap-6">
        <a
          href="mailto:lisaanggrainih@gmail.com"
          className="text-[12px] transition-colors duration-200 hover:text-[var(--lisa-purple-light)]"
          style={{ color: 'var(--lisa-text-dim)' }}
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/lisaanggrainih"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] transition-colors duration-200 hover:text-[var(--lisa-purple-light)]"
          style={{ color: 'var(--lisa-text-dim)' }}
        >
          LinkedIn
        </a>
        <a
          href="/contact"
          className="text-[12px] transition-colors duration-200 hover:text-[var(--lisa-purple-light)]"
          style={{ color: 'var(--lisa-text-dim)' }}
        >
          Contact
        </a>
      </div>
      <div className="text-[11px]" style={{ color: 'var(--lisa-text-dim)' }}>
        © 2026 Lisa Anggraini H.
      </div>
    </footer>
  );
}
