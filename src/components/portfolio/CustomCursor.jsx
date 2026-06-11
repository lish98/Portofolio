import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    let rafId;
    const animateFollower = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12;
      if (follower) {
        follower.style.transform = `translate(${followerPos.current.x - 16}px, ${followerPos.current.y - 16}px)`;
      }
      rafId = requestAnimationFrame(animateFollower);
    };

    const interactiveEls = document.querySelectorAll('a, button, .svc-card, .port-card');
    const onEnter = () => {
      if (follower) follower.style.opacity = '0.15';
      if (cursor) cursor.style.transform += ' scale(1.8)';
    };
    const onLeave = () => {
      if (follower) follower.style.opacity = '0.5';
    };

    document.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(animateFollower);

    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-[10px] h-[10px] rounded-full pointer-events-none z-[9999]"
        style={{
          background: 'var(--lisa-purple-light)',
          transition: 'transform 0.15s ease',
        }}
      />
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 w-[32px] h-[32px] rounded-full pointer-events-none z-[9998]"
        style={{
          border: '0.5px solid var(--lisa-purple-light)',
          transition: 'transform 0.35s ease, opacity 0.3s',
          opacity: 0.5,
        }}
      />
    </>
  );
}
