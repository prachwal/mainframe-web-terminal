import type { SVGProps } from 'react';
import './styles.scss';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'documentation'
  | 'social'
  | 'arrow-right'
  | 'check'
  | 'menu'
  | 'close';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  decorative?: boolean;
}

const ICONS: Record<IconName, string> = {
  github: 'github-icon',
  linkedin: 'linkedin-icon',
  twitter: 'twitter-icon',
  documentation: 'documentation-icon',
  social: 'social-icon',
  'arrow-right': 'arrow-right-icon',
  check: 'check-icon',
  menu: 'menu-icon',
  close: 'close-icon',
};

const ICON_SIZES = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export function Icon({
  name,
  size = 'md',
  className = '',
  ariaLabel,
  decorative,
  ...rest
}: IconProps) {
  const pixelSize = ICON_SIZES[size];
  const isDecorative = decorative ?? !ariaLabel;
  const classes = ['icon', `icon--${size}`, className].filter(Boolean).join(' ');
  const symbolId = ICONS[name];
  const spriteHref = `${import.meta.env.BASE_URL}icons.svg#${symbolId}`;

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 24 24"
      className={classes}
      aria-hidden={isDecorative}
      role={isDecorative ? 'presentation' : 'img'}
      aria-label={!isDecorative ? ariaLabel : undefined}
      focusable="false"
      {...rest}
    >
      <use href={spriteHref} />
    </svg>
  );
}
