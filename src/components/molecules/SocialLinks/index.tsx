import { Icon } from '../../atoms';
import type { IconName } from '../../atoms';
import './styles.scss';

export interface SocialLink {
  name: string;
  href: string;
  iconName: IconName;
}

export interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  labelMode?: 'visible' | 'sr-only' | 'responsive' | 'icon-only';
}

export function SocialLinks({ links, className = '', labelMode = 'visible' }: SocialLinksProps) {
  return (
    <ul className={`social-links social-links--${labelMode} ${className}`.trim()}>
      {links.map((link) => (
        <li key={link.name} className="social-links__item">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-links__link"
            aria-label={link.name}
          >
            <Icon name={link.iconName} size="sm" decorative />
            {labelMode !== 'icon-only' ? (
              <span className="social-links__label">{link.name}</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
