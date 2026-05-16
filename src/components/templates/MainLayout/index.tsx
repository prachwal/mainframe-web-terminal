import type { ReactNode } from 'react';
import { HeroBanner } from '../organisms/HeroBanner';
import type { SocialLink } from '../organisms/HeroBanner/HeroBanner';
import './styles.scss';

export interface MainLayoutProps {
  children: ReactNode;
  heroTitle: string;
  heroDescription: string;
  heroButtonLabel: string;
  onHeroButtonClick?: () => void;
  socialLinks?: SocialLink[];
  heroVisual?: ReactNode;
}

export function MainLayout({
  children,
  heroTitle,
  heroDescription,
  heroButtonLabel,
  onHeroButtonClick,
  socialLinks,
  heroVisual,
}: MainLayoutProps) {
  return (
    <div className="main-layout">
      <HeroBanner
        title={heroTitle}
        description={heroDescription}
        buttonLabel={heroButtonLabel}
        onButtonClick={onHeroButtonClick}
        socialLinks={socialLinks}
        visual={heroVisual}
      />
      <main className="main-layout__content">{children}</main>
    </div>
  );
}
