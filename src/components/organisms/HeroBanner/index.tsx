import type { ReactNode } from 'react';
import { HeroSection } from '../../molecules/HeroSection';
import { SocialLinks } from '../../molecules/SocialLinks';
import type { SocialLink } from '../../molecules/SocialLinks/SocialLinks';
import './styles.scss';

export interface HeroBannerProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick?: () => void;
  socialLinks?: SocialLink[];
  visual?: ReactNode;
}

export function HeroBanner({
  title,
  description,
  buttonLabel,
  onButtonClick,
  socialLinks,
  visual,
}: HeroBannerProps) {
  return (
    <div className="hero-banner">
      <HeroSection
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        onButtonClick={onButtonClick}
      >
        {visual}
      </HeroSection>
      {socialLinks && socialLinks.length > 0 && (
        <SocialLinks links={socialLinks} />
      )}
    </div>
  );
}
