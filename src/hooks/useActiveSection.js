import { useEffect, useState } from 'react';
import { navigation } from '../data/site';

export function useActiveSection() {
  const [active, setActive] = useState('topo');

  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id));
    let frame = 0;
    let initialTimer;

    const update = () => {
      frame = 0;
      let current = 0;
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= innerHeight * .3) current = index;
      });
      if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) current = sections.length - 1;
      setActive(navigation[current].id);
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(update); };

    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', queue);
    addEventListener('hashchange', queue);
    queue();
    initialTimer = setTimeout(queue, 150);
    return () => {
      removeEventListener('scroll', queue);
      removeEventListener('resize', queue);
      removeEventListener('hashchange', queue);
      cancelAnimationFrame(frame);
      clearTimeout(initialTimer);
    };
  }, []);

  return active;
}
