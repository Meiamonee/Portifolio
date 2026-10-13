import { useEffect } from 'react';

export function usePageEffects() {
  // A espiral preserva o modo leve padrão e só aumenta a qualidade se houver FPS.
  useEffect(() => {
    const root = document.documentElement;
    let cancelled = false;
    let startTimer;
    let mode = 'auto';
    try {
      const query = new URLSearchParams(location.search).get('spiral');
      if (['lite', 'rich', 'auto'].includes(query)) mode = query;
    } catch { /* URL sem query válida: usa o modo automático. */ }

    const setSpiral = (value) => {
      if (cancelled) return;
      root.classList.toggle('spiral-rich', value === 'rich');
      root.setAttribute('data-spiral', value);
    };
    const measureFps = (duration, done) => {
      let frames = 0;
      let started = null;
      const tick = (time) => {
        if (cancelled) return;
        if (document.hidden) return done(null);
        if (started === null) started = time;
        frames += 1;
        if (time - started < duration) requestAnimationFrame(tick);
        else done(frames * 1000 / (time - started));
      };
      requestAnimationFrame(tick);
    };
    const attempt = () => {
      const hero = document.querySelector('.hero');
      if (document.hidden || hero?.classList.contains('is-paused')) return;
      measureFps(1000, (base) => {
        if (base === null || base < 50) return;
        setSpiral('rich');
        measureFps(2200, (rich) => {
          if (rich !== null && rich < 45) {
            setSpiral('lite');
            try { localStorage.setItem('spiral-mode', 'lite'); } catch { /* armazenamento opcional */ }
          }
        });
      });
    };
    const start = () => { startTimer = setTimeout(attempt, 700); };

    setSpiral('lite');
    if (mode === 'rich') setSpiral('rich');
    else if (mode === 'auto') {
      let saved = null;
      try { saved = localStorage.getItem('spiral-mode'); } catch { /* armazenamento opcional */ }
      if (saved !== 'lite') {
        if (document.readyState === 'complete') start();
        else addEventListener('load', start, { once: true });
      }
    }
    return () => {
      cancelled = true;
      clearTimeout(startTimer);
      removeEventListener('load', start);
    };
  }, []);

  // Animações fora da tela não consomem bateria ou processamento.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-paused', !entry.isIntersecting));
    }, { rootMargin: '120px 0px' });
    document.querySelectorAll('[data-pause-offscreen]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // A revelação visual só atua nas larguras menores e nunca oculta conteúdo sem JS.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll('.section-label,.lead-h2,.lead-p,.info>*,.skill,.job,.section-h2,.contact-title,.hero-photo');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    elements.forEach((element) => {
      element.classList.add('rv');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
}
