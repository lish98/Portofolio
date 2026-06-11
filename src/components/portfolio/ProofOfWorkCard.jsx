export default function ProofOfWorkCard({ title, desc, href = '#' }) {
  return (
    <div
      className="flex items-center justify-between gap-4 rounded-xl p-5 flex-wrap"
      style={{
        background: '#110f1e',
        border: '0.5px solid #7c3aed44',
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
          style={{ background: 'var(--lisa-purple-dim)', border: '0.5px solid var(--lisa-border-purple)' }}
        >
          📄
        </div>
        <div>
          <div className="text-[13px] font-medium mb-0.5" style={{ color: 'var(--lisa-text)' }}>{title}</div>
          <div className="text-[11px]" style={{ color: 'var(--lisa-text-dim)' }}>{desc}</div>
        </div>
      </div>
      <a
        href={href}
        className="text-[12px] px-5 py-[9px] rounded-[6px] tracking-wide transition-all duration-200 hover:translate-y-[-1px] flex-shrink-0"
        style={{ background: 'var(--lisa-purple)', color: 'var(--lisa-text)' }}
      >
        Download PDF
      </a>
    </div>
  );
}
