document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  const revealEls = gsap.utils.toArray('[data-reveal]');
  revealEls.forEach((el) => {
    if (prefersReducedMotion) return;
    gsap.fromTo(
      el,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    );
  });

  if (!prefersReducedMotion) {
    gsap.fromTo(
      '.hero-title .line',
      { y: '110%' },
      { y: '0%', duration: 0.9, ease: 'power4.out', stagger: 0.08, delay: 0.2 }
    );
  }
  const scrubberFill = document.getElementById('scrubberFill');
  const scrubberHead = document.getElementById('scrubberHead');
  const scrubberTime = document.getElementById('scrubberTime');

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      const pct = Math.max(0.02, self.progress) * 100;
      if (scrubberFill) scrubberFill.style.width = pct + '%';
      if (scrubberHead) scrubberHead.style.left = pct + '%';
      if (scrubberTime) {
        const totalSeconds = Math.floor(self.progress * 144); 
        const mm = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const ss = String(totalSeconds % 60).padStart(2, '0');
        scrubberTime.textContent = `00:${mm}:${ss}`;
      }
    },
  });

  const ticks = gsap.utils.toArray('.rail-tick');
  const playhead = document.getElementById('railPlayhead');
  const track = document.querySelector('.rail-track');

  const positionPlayhead = () => {
    if (!playhead || !track) return;
    const trackRect = track.getBoundingClientRect();
    const scrollableHeight = document.body.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    const usableHeight = trackRect.height - 48;
    playhead.style.top = 24 + progress * usableHeight + 'px';
  };

  window.addEventListener('scroll', positionPlayhead, { passive: true });
  window.addEventListener('resize', positionPlayhead);
  positionPlayhead();

  ticks.forEach((tick) => {
    tick.addEventListener('click', () => {
      const targetSel = tick.getAttribute('data-target');
      const target = document.querySelector(targetSel);
      if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
});
