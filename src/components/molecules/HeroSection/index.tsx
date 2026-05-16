import type { ReactNode } from 'react';
import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button/Button';
import './styles.scss';

export interface HeroSectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick?: () => void;
  children?: ReactNode;
}

export function HeroSection({
  title,
  description,
  buttonLabel,
  onButtonClick,
  children,
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <Heading level="h1">{title}</Heading>
        <Text variant="body">{description}</Text>
        <Button onClick={onButtonClick}>{buttonLabel}</Button>
      </div>
      {children && <div className="hero-section__visual">{children}</div>}
    </section>
  );
}
