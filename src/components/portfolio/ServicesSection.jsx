import { RevealWrapper } from "./useScrollReveal";
import SplitText from "./SplitText";
import { useNavigate } from "react-router-dom";

const services = [
  {
    num: '01',
    title: 'Performance Marketing',
    desc: 'Planning and executing paid campaigns across Google Ads, Facebook, and TikTok — focused on ROI, CTR, and conversion metrics.',
    slug: 'performance-marketing',
  },
  {
    num: '02',
    title: 'Social Media Strategy',
    desc: 'Building organic and paid social strategies that grow audiences and drive measurable engagement.',
    slug: 'social-media-strategy',
  },
  {
    num: '03',
    title: 'Content & Creative Production',
    desc: 'End-to-end content creation — copywriting, visual design, and campaign assets that align with brand identity.',
    slug: 'content-creative-production',
  },
  {
    num: '04',
    title: 'Analytics & Reporting',
    desc: 'Tracking campaign performance, interpreting data, and turning insights into actionable improvements.',
    slug: 'analytics-reporting',
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();
  return (
    <section
      id="services"
      className="relative px-6 md:px-[72px] py-24"
      style={{ borderTop: '0.5px solid var(--lisa-border)' }}
    >
      <RevealWrapper>
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block w-5 h-[0.5px]" style={{ background: 'var(--lisa-purple-light)' }} />
          <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--lisa-purple-light)' }}>
            Core Competencies
          </span>
        </div>
      </RevealWrapper>

      <SplitText className="font-heading font-semibold leading-[1.1] mb-12 text-[clamp(28px,3vw,42px)]" style={{ color: 'var(--lisa-text)' }}>
        {"Areas of "}<em>expertise</em>
      </SplitText>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {services.map((svc, i) => (
          <RevealWrapper key={svc.num} delay={0.1 * (i + 1)}>
            <div
              className="svc-card group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:translate-y-[-4px] cursor-pointer"
              style={{
                background: 'var(--lisa-bg2)',
                border: '0.5px solid var(--lisa-border)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--lisa-border-purple)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--lisa-border)'}
              onClick={() => navigate(`/services/${svc.slug}`)}
            >
              {/* Bottom border animation */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
                style={{ background: 'var(--lisa-purple)' }}
              />
              <div className="font-heading text-2xl font-semibold mb-4" style={{ color: '#7c3aed33' }}>
                {svc.num}
              </div>
              <div className="text-[14px] font-medium mb-2.5" style={{ color: 'var(--lisa-text)' }}>
                {svc.title}
              </div>
              <div className="text-[12px] leading-[1.7]" style={{ color: 'var(--lisa-text-muted)' }}>
                {svc.desc}
              </div>
              <div className="text-[11px] mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: 'var(--lisa-purple-light)' }}>
                Learn more →
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
