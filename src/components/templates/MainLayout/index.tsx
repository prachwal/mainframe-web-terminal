import type { ReactNode } from 'react';
import './styles.scss';

export interface MainLayoutProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export function MainLayout({
  header,
  children,
  footer,
}: MainLayoutProps) {
  return (
    <div className="main-layout">
      {header ? <header className="main-layout__header">{header}</header> : null}
      <main className="main-layout__content">{children}</main>
      {footer ? <footer className="main-layout__footer">{footer}</footer> : null}
    </div>
  );
}
