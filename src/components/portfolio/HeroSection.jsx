import { useEffect, useRef } from "react";

const HERO_PORTRAIT = "https://media.base44.com/images/public/69da8346bdb50e87366c836b/e1b6380a3_Gemini_Generated_Image_wlk93pwlk93pwlk9.png"; "https://media.base44.com/images/public/69da8346bdb50e87366c836b/10721bb25_generated_a706fc26.png";

export default function HeroSection() {
  const orbRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (orbRef.current) {
        orbRef.current.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.3}px))`;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" id="about">
      {/* Parallax orbs */}
      <div
        ref={orbRef}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7c3aed18 0%, transparent 70%)',
          top: '50%', right: '-100px',
          transform: 'translateY(-50%)',
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #a855f710 0%, transparent 70%)',
          bottom: '10%', left: '10%',
        }}
      />
      <div
        className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7c3aed10 0%, transparent 70%)',
          top: '20%', left: '40%',
        }}
      />

      {/* Side borders (desktop only) */}
      <div className="hidden md:block fixed top-0 bottom-0 left-12 w-[0.5px] z-10 pointer-events-none" style={{ background: '#ffffff06' }} />
      <div className="hidden md:block fixed top-0 bottom-0 right-12 w-[0.5px] z-10 pointer-events-none" style={{ background: '#ffffff06' }} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-[60px] items-center px-6 md:px-[72px] pt-[140px] pb-20 min-h-screen">
        {/* Left */}
        <div>
          <div
            className="flex items-center gap-3 mb-6 opacity-0 translate-y-5"
            style={{ animation: 'fadeUp 0.7s 0.2s forwards' }}
          >
            <span className="inline-block w-8 h-[0.5px]" style={{ background: 'var(--lisa-purple-light)' }} />
            <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--lisa-purple-light)' }}>
              Digital Marketing Specialist
            </span>
          </div>

          <h1
            className="font-heading font-semibold leading-[1.06] mb-6 opacity-0 translate-y-[30px] text-[clamp(44px,5vw,68px)]"
            style={{ color: 'var(--lisa-text)', animation: 'fadeUp 0.8s 0.35s forwards' }}
          >
            Turning <em className="italic" style={{ color: 'var(--lisa-purple-light)' }}>ideas</em><br />
            into campaigns<br />
            that convert
          </h1>

          <p
            className="text-[14px] leading-[1.8] max-w-[420px] mb-10 opacity-0 translate-y-5"
            style={{ color: 'var(--lisa-text-muted)', animation: 'fadeUp 0.7s 0.5s forwards' }}
          >
            I help brands grow through data-driven marketing and creative execution — bringing strategy, analytics, and content production under one roof.
          </p>

          <div
            className="flex gap-3.5 mb-14 flex-wrap opacity-0 translate-y-5"
            style={{ animation: 'fadeUp 0.7s 0.65s forwards' }}
          >
            <a
              href="#portfolio"
              className="text-[13px] px-7 py-[13px] rounded-[7px] tracking-wide inline-block transition-all duration-200 hover:translate-y-[-2px]"
              style={{ background: 'var(--lisa-purple)', color: 'var(--lisa-text)' }}
            >
              View my work
            </a>
            <a
              href="#"
              className="text-[13px] px-7 py-[13px] rounded-[7px] tracking-wide inline-block transition-all duration-200 hover:translate-y-[-2px] hover:border-[var(--lisa-purple-light)] hover:text-[var(--lisa-purple-light)]"
              style={{
                background: 'transparent',
                color: 'var(--lisa-text-muted)',
                border: '0.5px solid #ffffff25',
              }}
            >
              Download CV
            </a>
          </div>

          <div
            className="flex gap-10 pt-9 opacity-0 translate-y-5 flex-wrap"
            style={{
              borderTop: '0.5px solid var(--lisa-border)',
              animation: 'fadeUp 0.7s 0.8s forwards',
            }}
          >
            {[
              { num: '162%', label: 'Follower growth\nin 3 months' },
              { num: '334k', label: 'Total ad\nreach' },
              { num: '35%', label: 'Engagement\nincrease' },
              { num: '5+', label: 'Years\nexperience' },
            ].map(s => (
              <div key={s.num}>
                <div className="font-heading text-[32px] font-semibold leading-none" style={{ color: 'var(--lisa-text)' }}>
                  {s.num}
                </div>
                <div
                  className="text-[11px] mt-1 leading-[1.4] whitespace-pre-line"
                  style={{ color: 'var(--lisa-text-dim)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Photo frame */}
        <div
          className="hidden lg:flex justify-center items-center relative opacity-0 translate-x-[30px]"
          style={{ animation: 'fadeLeft 0.9s 0.4s forwards' }}
        >
          <div
            className="w-[340px] h-[440px] rounded-2xl overflow-hidden relative"
            style={{
              border: '0.5px solid var(--lisa-border-purple)',
              background: 'var(--lisa-bg2)',
            }}
          >
            <img
              src={HERO_PORTRAIT}
              alt="Lisa Anggraini H — Digital Marketer & Creative Designer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Available badge */}
          <div
            className="absolute bottom-6 -left-6 flex items-center gap-2.5 px-4 py-[11px] rounded-[10px]"
            style={{
              background: 'rgba(17,15,30,0.95)',
              border: '0.5px solid var(--lisa-border-purple)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse-glow"
              style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e88' }}
            />
            <span className="text-[12px]" style={{ color: '#c4b5fd' }}>
              Open to opportunities
            </span>
          </div>

          {/* Location tag */}
          <div
            className="absolute top-6 -right-5 px-3.5 py-[9px] rounded-lg"
            style={{ background: 'var(--lisa-purple)' }}
          >
            <span className="text-[11px] uppercase tracking-[0.06em]" style={{ color: '#f8f8f2' }}>
              Lampung, ID
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeLeft { to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </div>
  );
}
