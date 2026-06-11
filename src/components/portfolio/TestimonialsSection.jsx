import { RevealWrapper } from "./useScrollReveal";
import SplitText from "./SplitText";

const testimonials = [
  {
    text: '"Lisa delivered exactly what we needed — the campaign results exceeded our target within the first month."',
    name: 'R. Darmawan',
    role: 'Brand Manager · Visio Creative',
    initials: 'RD',
  },
  {
    text: '"The social media designs were on-brand, fast, and always creative. Highly recommend for any brand looking to grow online."',
    name: 'A. Santoso',
    role: 'Owner · Freelance Client',
    initials: 'AS',
  },
  {
    text: '"Very professional, understands both design and marketing. She brings a strategic mindset to every creative deliverable."',
    name: 'M. Wijaya',
    role: 'Marketing Lead · Stevland Bridge',
    initials: 'MW',
  },
];

function Stars() {
  const starClip = 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)';
  return (
    <div className="flex gap-1 mb-3.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-[11px] h-[11px]"
          style={{
            background: 'var(--lisa-purple-light)',
            clipPath: starClip,
          }}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative px-6 md:px-[72px] py-24"
      style={{ borderTop: '0.5px solid var(--lisa-border)' }}
    >
      <RevealWrapper>
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block w-5 h-[0.5px]" style={{ background: 'var(--lisa-purple-light)' }} />
          <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--lisa-purple-light)' }}>
            Client feedback
          </span>
        </div>
      </RevealWrapper>

      <SplitText className="font-heading font-semibold leading-[1.1] mb-12 text-[clamp(28px,3vw,42px)]" style={{ color: 'var(--lisa-text)' }}>
        {"What they "}<em>say</em>
      </SplitText>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {testimonials.map((t, i) => (
          <RevealWrapper key={i} delay={0.1 * (i + 1)}>
            <div
              className="rounded-xl p-5 transition-colors duration-300"
              style={{
                background: 'var(--lisa-bg2)',
                border: '0.5px solid var(--lisa-border)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--lisa-border-purple)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--lisa-border)'}
            >
              <Stars />
              <p className="text-[13px] italic leading-[1.75] mb-5" style={{ color: 'var(--lisa-text-muted)' }}>
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-medium flex-shrink-0"
                  style={{
                    background: 'var(--lisa-purple-dim)',
                    border: '0.5px solid var(--lisa-border-purple)',
                    color: '#c4b5fd',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-medium" style={{ color: 'var(--lisa-text)' }}>{t.name}</div>
                  <div className="text-[11px] mt-0.5" style={{ color: 'var(--lisa-text-dim)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
