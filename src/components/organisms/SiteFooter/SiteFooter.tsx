import { Link } from 'react-router-dom';
import { SocialLinks } from '@/components/molecules';
import type { SocialLink } from '@/components/molecules';
import { Text } from '@/components/atoms';
import './styles.scss';

type FooterLinkItem = {
  label: string;
  to: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  items: FooterLinkItem[];
};

const footerLinks: FooterSection[] = [
  {
    title: 'Resources',
    items: [
      { label: 'Docs', to: 'https://vite.dev', external: true },
      { label: 'GitHub', to: 'https://github.com', external: true },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact', to: '/contact' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Status', to: '/status' },
    ],
  },
];

const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com', iconName: 'github' },
  { name: 'Docs', href: 'https://vite.dev', iconName: 'documentation' },
  { name: 'Community', href: 'https://react.dev', iconName: 'social' },
];

export function SiteFooter() {
  return (
    <div className="site-footer">
      <div className="site-footer__brand">
        <Text variant="label" as="span" className="site-footer__eyebrow">
          Mainframe Web Terminal
        </Text>
        <Text variant="caption" as="span" className="site-footer__copy">
          Built for focused operator workflows with React 19, Redux, and a theme-aware design system.
        </Text>
      </div>

      <div className="site-footer__links">
        {footerLinks.map((section) => (
          <section key={section.title} className="site-footer__section" aria-label={section.title}>
            <Text variant="label" as="span" className="site-footer__title">
              {section.title}
            </Text>
            <ul className="site-footer__list">
              {section.items.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="site-footer__navLink"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className="site-footer__navLink">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="site-footer__meta">
        <SocialLinks links={socialLinks} className="site-footer__social" labelMode="icon-only" />
        <Text variant="caption" as="span" className="site-footer__legal">
          © 2026 Mainframe Web Terminal. All rights reserved.
        </Text>
      </div>
    </div>
  );
}
