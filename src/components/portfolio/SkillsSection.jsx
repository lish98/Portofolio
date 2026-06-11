import { RevealWrapper } from "./useScrollReveal";
import SplitText from "./SplitText";

const skills = [
  'SEO & SEM', 'Google Ads', 'Facebook Ads', 'Social Media Strategy',
  'A/B Testing', 'Email Marketing', 'Content Creation', 'Graphic Design',
  'Logo Design', 'AI Creative Tools', 'Copywriting', 'Data Analysis',
  'CRM', 'Web Design'
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-[72px] py-24"
      style={{ borderTop: '0.5px solid var(--lisa-border)' }}
    >
      <RevealWrapper>
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block w-5 h-[0.5px]" style={{ background: 'var(--lisa-purple-light)' }} />
          <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--lisa-purple-light)' }}>
            Skill set
          </span>
        </div>
      </RevealWrapper>

      <SplitText className="font-heading font-semibold leading-[1.1] mb-12 text-[clamp(28px,3vw,42px)]" style={{ color: 'var(--lisa-text)' }}>
        {"What I work "}<em>with</em>
      </SplitText>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => (
          <RevealWrapper key={skill} delay={0.1 * ((i % 3) + 1)}>
            <span
              className="text-[12px] px-4 py-[7px] rounded-full transition-all duration-200 hover:translate-y-[-2px] cursor-default"
              style={{
                background: 'var(--lisa-bg2)',
                border: '0.5px solid var(--lisa-border-purple)',
                color: '#c4b5fd',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--lisa-purple-dim)';
                e.currentTarget.style.borderColor = 'var(--lisa-purple-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--lisa-bg2)';
                e.currentTarget.style.borderColor = 'var(--lisa-border-purple)';
              }}
            >
              {skill}
            </span>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
