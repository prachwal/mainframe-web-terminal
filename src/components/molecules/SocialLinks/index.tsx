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
}

export function SocialLinks({ links, className = '' }: SocialLinksProps) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {links.map((link) => (
        <li key={link.name} className="social-links__item">
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="social-links__link">
            <Icon name={link.iconName} size="sm" decorative />
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
