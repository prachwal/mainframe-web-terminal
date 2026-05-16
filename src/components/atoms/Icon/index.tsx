import type { SVGProps } from 'react';
import './styles.scss';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'documentation'
  | 'social'
  | 'arrow-right'
  | 'check';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
}

const ICONS: Record<IconName, string> = {
  github:
    'M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.49 0-.24 0-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.32 9.32 0 012.46-.34c.83.01 1.67.11 2.46.34 1.89-1.32 2.72-1.05 2.72-1.05.55 1.41.21 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.94-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z',
  linkedin:
    'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 013.37-1.85c3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z',
  twitter:
    'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.32 2.25H8.1l4.71 6.23 5.43-6.23zm-1.16 17.52h1.84L7.08 4.2H5.11l12.97 15.57z',
  documentation:
    'M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z',
  social:
    'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm8 3c-.55 0-1-.45-1-1v-.86c0-1.23-1.01-2.24-2.24-2.24h-2.4c.28.61.4 1.29.33 1.99-.17 1.62-1.36 2.98-2.94 3.31-2.27.47-4.3-1.22-4.3-3.41 0-.31.04-.61.12-.9H6.24C5.01 11.89 4 12.9 4 14.14V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z',
  'arrow-right': 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
  check:
    'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
};

const ICON_SIZES = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export function Icon({ name, size = 'md', className = '', ariaLabel, ...rest }: IconProps) {
  const pixelSize = ICON_SIZES[size];
  const isDecorative = !ariaLabel;
  const classes = ['icon', `icon--${size}`, className].filter(Boolean).join(' ');

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={classes}
      aria-hidden={isDecorative}
      role={isDecorative ? 'presentation' : 'img'}
      aria-label={ariaLabel}
      focusable="false"
      {...rest}
    >
      <path d={ICONS[name]} />
    </svg>
  );
}
