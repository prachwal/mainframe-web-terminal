import type { ReactNode } from 'react';
import heroImage from '../../../assets/hero.png';
import { HeroSection } from '../../molecules';
import { SocialLinks } from '../../molecules';
import type { SocialLink } from '../../molecules';
import './styles.scss';

export interface HeroBannerProps {
  title: string;
  subtitle: ReactNode;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  socialLinks?: SocialLink[];
}

export function HeroBanner({
  title,
  subtitle,
  cta,
  socialLinks,
}: HeroBannerProps) {
  return (
    <div className="hero-banner">
      <HeroSection
        title={title}
        subtitle={subtitle}
        cta={cta}
      >
        <figure className="hero-banner__figure">
          <img className="hero-banner__image" src={heroImage} alt="" />
        </figure>
      </HeroSection>
      {socialLinks && socialLinks.length > 0 && (
        <SocialLinks links={socialLinks} />
      )}
    </div>
  );
}
