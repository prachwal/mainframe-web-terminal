import { useNavigate } from 'react-router-dom';
import { HeroBanner } from '@/components/organisms';
import { PageShell } from '@/components/templates/PageShell';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', iconName: 'github' as const },
  { name: 'Docs', href: 'https://vite.dev', iconName: 'documentation' as const },
  { name: 'Community', href: 'https://react.dev', iconName: 'social' as const },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <PageShell>
      <HeroBanner
        eyebrow="Production terminal interface"
        title="Mainframe Web Terminal"
        subtitle="A composed React 19 command surface with Atomic Design components, SCSS tokens, and fast Vite delivery for focused operator workflows."
        cta={{ label: 'Launch terminal', onClick: () => navigate('/terminal') }}
        socialLinks={socialLinks}
      />
    </PageShell>
  );
}
