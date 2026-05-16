import type { ReactNode } from 'react';
import heroImage from '../../../assets/hero.png';
import { Button, Heading, Text } from '@/components/atoms';
import { SocialLinks } from '@/components/molecules';
import type { SocialLink } from '@/components/molecules';
import './styles.scss';

export interface HeroBannerProps {
  eyebrow?: string;
  title: string;
  subtitle: ReactNode;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  socialLinks?: SocialLink[];
}

export function HeroBanner({
  eyebrow,
  title,
  subtitle,
  cta,
  socialLinks,
}: HeroBannerProps) {
  return (
    <section className="hero-banner" aria-labelledby="hero-title">
      <img className="hero-banner__media" src={heroImage} alt="" />
      <div className="hero-banner__shade" />
      <div className="hero-banner__content">
        {eyebrow ? (
          <Text variant="label" as="span" className="hero-banner__eyebrow">
            {eyebrow}
          </Text>
        ) : null}
        <Heading level="h1" className="hero-banner__title">
          <span id="hero-title">{title}</span>
        </Heading>
        <Text variant="body" className="hero-banner__subtitle">
          {subtitle}
        </Text>
        <div className="hero-banner__actions">
          {cta ? (
            <Button size="lg" onClick={cta.onClick}>
              {cta.label}
            </Button>
          ) : null}
          {socialLinks && socialLinks.length > 0 ? <SocialLinks links={socialLinks} /> : null}
        </div>
        <dl className="hero-banner__signals" aria-label="Platform signals">
          <div>
            <dt>React 19</dt>
            <dd>UI runtime</dd>
          </div>
          <div>
            <dt>Vite</dt>
            <dd>Build system</dd>
          </div>
          <div>
            <dt>SCSS</dt>
            <dd>Design tokens</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
