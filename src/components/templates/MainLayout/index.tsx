import type { ReactNode } from 'react';
import './styles.scss';

export interface MainLayoutProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function MainLayout({
  header,
  children,
  footer,
  className = '',
}: MainLayoutProps) {
  const classes = ['main-layout', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {header ? <header className="main-layout__header">{header}</header> : null}
      <main className="main-layout__content">{children}</main>
      {footer ? <footer className="main-layout__footer">{footer}</footer> : null}
    </div>
  );
}
