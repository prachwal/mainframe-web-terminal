import type { ReactNode } from 'react';
import { MainLayout } from '../MainLayout';
import { SiteFooter, SiteHeader } from '@/components/organisms';
import './styles.scss';

export interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <MainLayout
      className={`page-shell ${className}`.trim()}
      header={<SiteHeader />}
      footer={<SiteFooter />}
    >
      {children}
    </MainLayout>
  );
}
