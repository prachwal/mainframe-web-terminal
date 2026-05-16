import { useNavigate } from 'react-router-dom';
import { runtimeConfig } from '@/config/runtimeConfig';
import { HeroBanner } from '@/components/organisms';
import { PageShell } from '@/components/templates/PageShell';

const socialLinks = [
  { name: 'GitHub', href: runtimeConfig.githubUrl, iconName: 'github' as const },
  { name: 'Docs', href: runtimeConfig.docsUrl, iconName: 'documentation' as const },
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
