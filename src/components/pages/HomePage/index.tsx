import { MainLayout } from '../templates/MainLayout';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: 'github' as const },
  { name: 'Twitter', href: 'https://x.com', icon: 'twitter' as const },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' as const },
];

export function HomePage() {
  return (
    <MainLayout
      heroTitle="Get started"
      heroDescription="Edit <code>src/App.tsx</code> and save to test <code>HMR</code>."
      heroButtonLabel="Count is 0"
      socialLinks={socialLinks}
    >
      <div className="ticks" />
    </MainLayout>
  );
}
