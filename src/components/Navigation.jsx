import { navigation } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';

export function Navigation() {
  const active = useActiveSection();
  return (
    <nav className="dock" aria-label="Navegação por seções">
      {navigation.map(({ number, id, label }) => (
        <a key={id} href={`#${id}`} aria-label={label} aria-current={active === id ? 'location' : undefined}>
          <b aria-hidden="true">{number}</b><span className="t">{label}</span>
        </a>
      ))}
    </nav>
  );
}
