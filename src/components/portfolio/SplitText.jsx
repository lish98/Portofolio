import { useEffect, useRef, useState } from "react";

export default function SplitText({ children, className = "", as: Tag = "h2" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Parse children to extract text and em elements
  const renderContent = () => {
    if (typeof children === 'string') {
      return children.split(/\s+/).map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
          }}
        >
          {word}&nbsp;
        </span>
      ));
    }

    // Handle mixed content (text + em elements)
    const elements = Array.isArray(children) ? children : [children];
    let wordIndex = 0;
    
    return elements.map((child, idx) => {
      if (typeof child === 'string') {
        return child.split(/\s+/).filter(Boolean).map((word) => {
          const i = wordIndex++;
          return (
            <span
              key={`word-${i}`}
              className="inline-block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
              }}
            >
              {word}&nbsp;
            </span>
          );
        });
      }
      
      if (child?.type === 'em') {
        const text = child.props.children;
        const words = typeof text === 'string' ? text.split(/\s+/).filter(Boolean) : [text];
        return words.map((word) => {
          const i = wordIndex++;
          return (
            <em
              key={`em-${i}`}
              className="inline-block"
              style={{
                color: 'var(--lisa-purple-light)',
                fontStyle: 'italic',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
              }}
            >
              {word}&nbsp;
            </em>
          );
        });
      }

      return child;
    });
  };

  return (
    <Tag ref={ref} className={className}>
      {renderContent()}
    </Tag>
  );
}
