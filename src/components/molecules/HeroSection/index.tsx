import type { ReactNode } from 'react';
import { Heading } from '../../atoms';
import { Text } from '../../atoms';
import { Button } from '../../atoms';
import './styles.scss';

export interface HeroSectionProps {
  title: string;
  subtitle: ReactNode;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  children?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  cta,
  children,
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <Heading level="h1">{title}</Heading>
        <Text variant="body">{subtitle}</Text>
        {cta ? (
          <Button onClick={cta.onClick} size="lg">
            {cta.label}
          </Button>
        ) : null}
      </div>
      {children && <div className="hero-section__visual">{children}</div>}
    </section>
  );
}
