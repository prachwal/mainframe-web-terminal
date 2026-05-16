import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon, Text } from '@/components/atoms';
import { ThemeModeSwitch } from '@/components/molecules';
import { useAppDispatch, useAppSelector } from '@/store';
import { setThemeMode } from '@/store/themeSlice';
import type { ThemeMode } from '@/theme';
import './styles.scss';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Terminal', to: '/terminal' },
  { label: 'Settings', to: '/settings' },
  { label: 'About', to: '/about' },
];

function getFocusableElements(container: HTMLElement | null): HTMLElement[] {
  if (!container) {
    return [];
  }

  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute('disabled'));
}

export function SiteHeader() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const setMode = (mode: ThemeMode) => dispatch(setThemeMode(mode));

  const closeMenu = () => {
    setIsMenuOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusable = getFocusableElements(drawerRef.current);
    focusable[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const elements = getFocusableElements(drawerRef.current);
      if (!elements.length) {
        return;
      }

      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div className="site-header">
      <div className="site-header__bar">
        <div className="site-header__brand">
          <Text variant="label" as="span" className="site-header__eyebrow">
            Mainframe Web Terminal
          </Text>
          <Text variant="caption" as="span" className="site-header__subtitle">
            Production control surface
          </Text>
        </div>

        <Button
          ref={triggerRef}
          type="button"
          variant="outline"
          size="sm"
          className="site-header__menuButton"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="site-header-drawer"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} size="sm" decorative />
        </Button>
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

      <div
        className={`site-header__backdrop${isMenuOpen ? ' site-header__backdrop--open' : ''}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <aside
        id="site-header-drawer"
        ref={drawerRef}
        className={`site-header__drawer${isMenuOpen ? ' site-header__drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-header-drawer-title"
      >
        <div className="site-header__drawerHeader">
          <span id="site-header-drawer-title" className="site-header__drawerTitle">
            Menu
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="site-header__drawerClose"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <Icon name="close" size="sm" decorative />
          </Button>
        </div>

        <nav className="site-header__drawerNav" aria-label="Mobile primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-header__drawerLink${isActive ? ' site-header__drawerLink--active' : ''}`
              }
              end={item.to === '/'}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <ThemeModeSwitch
          value={themeMode}
          onChange={setMode}
          className="site-header__drawerTheme"
        />

      </aside>
    </div>
  );
}
