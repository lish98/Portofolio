import { RevealWrapper } from "./useScrollReveal";
import SplitText from "./SplitText";
import { useNavigate } from "react-router-dom";

export const portfolioItems = [
  {
    slug: 'stevland-bridge-growth',
    cat: 'Social Media Campaign',
    title: 'Stevland Bridge — Growth Strategy',
    metric: '+162% followers · 3 months',
    img: 'https://media.base44.com/images/public/69da8346bdb50e87366c836b/9c1f91b54_generated_5e4b2ef1.png',
  },
  {
    slug: 'facebook-ads-brand-awareness',
    cat: 'Paid Ads',
    title: 'Facebook Ads — Brand Awareness',
    metric: '334k reach · 392k impressions',
    img: 'https://media.base44.com/images/public/69da8346bdb50e87366c836b/786f1073d_generated_a46a2a13.png',
  },
  {
    slug: 'social-media-design-multi-brand',
    cat: 'Design',
    title: 'Social Media Design — Multi Brand',
    metric: '+30% engagement via design',
    img: 'https://media.base44.com/images/public/69da8346bdb50e87366c836b/5259a0c3b_generated_54b8840a.png',
  },
  {
    slug: 'logo-identity-design',
    cat: 'Branding',
    title: 'Logo & Identity Design',
    metric: '+20% customer inquiries post-rebrand',
    img: 'https://media.base44.com/images/public/69da8346bdb50e87366c836b/d555c105f_generated_54c4abd2.png',
  },
  {
    slug: 'google-ads-hr-course',
    cat: 'Google Ads',
    title: 'Google Ads — HR Course',
    metric: '593 clicks · 3.59% CTR',
    img: 'https://media.base44.com/images/public/69da8346bdb50e87366c836b/db6374ac6_generated_6bcbcc44.png',
  },
  {
    slug: 'poster-print-materials',
    cat: 'Content Design',
    title: 'Poster & Print Materials',
    metric: '+20% customer inquiries',
    img: 'https://media.base44.com/images/public/69da8346bdb50e87366c836b/ca47501af_generated_fc91911a.png',
  },
];

export default function PortfolioSection() {
  const navigate = useNavigate();
  return (
    <section
      id="portfolio"
      className="relative px-6 md:px-[72px] py-24"
      style={{ borderTop: '0.5px solid var(--lisa-border)' }}
    >
      <RevealWrapper>
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block w-5 h-[0.5px]" style={{ background: 'var(--lisa-purple-light)' }} />
          <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--lisa-purple-light)' }}>
            Impact & Results
          </span>
        </div>
      </RevealWrapper>

      <SplitText className="font-heading font-semibold leading-[1.1] mb-12 text-[clamp(28px,3vw,42px)]" style={{ color: 'var(--lisa-text)' }}>
        {"Portfolio "}<em>highlights</em>
      </SplitText>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {portfolioItems.map((item, i) => (
          <RevealWrapper key={i} delay={0.1 * ((i % 3) + 1)}>
            <div
              className="port-card group overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-4px] cursor-pointer"
              style={{
                background: 'var(--lisa-bg2)',
                border: '0.5px solid var(--lisa-border)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--lisa-border-purple)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--lisa-border)'}
              onClick={() => navigate(`/portfolio/${item.slug}`)}
            >
              <div
                className="h-[160px] overflow-hidden relative"
                style={{ borderBottom: '0.5px solid var(--lisa-border)' }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                {/* Marketing overlay on hover */}
                <div className="absolute inset-0 bg-[#0a0914]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[11px] uppercase tracking-[0.12em] font-medium" style={{ color: 'var(--lisa-purple-light)' }}>
                    {item.metric}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.1em] mb-1.5" style={{ color: 'var(--lisa-purple-light)' }}>
                  {item.cat}
                </div>
                <div className="text-[13px] font-medium mb-1" style={{ color: 'var(--lisa-text)' }}>
                  {item.title}
                </div>
                <div className="text-[12px]" style={{ color: 'var(--lisa-text-muted)' }}>
                  {item.metric}
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
