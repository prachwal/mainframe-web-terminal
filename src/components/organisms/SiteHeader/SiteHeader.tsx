import { NavLink } from 'react-router-dom';
import { Button, Text } from '@/components/atoms';
import './styles.scss';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Terminal', to: '/terminal' },
  { label: 'Settings', to: '/settings' },
  { label: 'About', to: '/about' },
];

export function SiteHeader() {
  return (
    <div className="site-header">
      <div className="site-header__brand">
        <Text variant="label" as="span" className="site-header__eyebrow">
          Mainframe Web Terminal
        </Text>
        <Text variant="caption" as="span" className="site-header__subtitle">
          Production control surface
        </Text>
      </div>

      <nav className="site-header__nav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `site-header__link${isActive ? ' site-header__link--active' : ''}`
            }
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Button variant="secondary" size="sm" className="site-header__status" disabled>
        Live
      </Button>
    </div>
  );
}
