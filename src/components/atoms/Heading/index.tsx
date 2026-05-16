import type { ReactNode } from 'react';
import './styles.scss';

export type HeadingLevel = 'h1' | 'h2' | 'h3';

export interface HeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
}

export function Heading({ level = 'h1', children, className = '' }: HeadingProps) {
  const Tag = level;
  return <Tag className={`heading heading--${level} ${className}`.trim()}>{children}</Tag>;
}
