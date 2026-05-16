import type { ReactNode } from 'react';
import './styles.scss';

export type TextVariant = 'body' | 'muted' | 'code';

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  as?: 'span' | 'p' | 'div';
  className?: string;
}

export function Text({
  children,
  variant = 'body',
  as: Tag = 'p',
  className = '',
}: TextProps) {
  return <Tag className={`text text--${variant} ${className}`.trim()}>{children}</Tag>;
}
