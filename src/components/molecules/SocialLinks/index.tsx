import { Icon } from '../../atoms/Icon';
import type { IconName } from '../../atoms/Icon/Icon';
import './styles.scss';

export interface SocialLink {
  name: string;
  href: string;
  icon: IconName;
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
            <Icon name={link.icon} size={18} />
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
