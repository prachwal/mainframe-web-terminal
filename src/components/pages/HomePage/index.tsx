import { Text } from '@/components/atoms';
import { HeroBanner } from '@/components/organisms';
import { MainLayout } from '@/components/templates';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', iconName: 'github' as const },
  { name: 'Docs', href: 'https://vite.dev', iconName: 'documentation' as const },
  { name: 'Community', href: 'https://react.dev', iconName: 'social' as const },
];

export function HomePage() {
  return (
    <MainLayout
      header={
        <div className="home-page__header">
          <Text variant="label" as="span">
            Mainframe Web Terminal
          </Text>
        </div>
      }
      footer={
        <div className="home-page__footer">
          <Text variant="caption" as="span">
            Crafted with React 19 and Atomic Design
          </Text>
        </div>
      }
    >
      <HeroBanner
        eyebrow="Production terminal interface"
        title="Mainframe Web Terminal"
        subtitle={
          <>
            A composed React 19 command surface with Atomic Design components, SCSS tokens,
            and fast Vite delivery for focused operator workflows.
          </>
        }
        cta={{
          label: 'Launch terminal',
        }}
        socialLinks={socialLinks}
      />
    </MainLayout>
  );
}
