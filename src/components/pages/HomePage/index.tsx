import { Button, Text } from '../../atoms';
import { HeroBanner } from '../../organisms';
import { MainLayout } from '../../templates';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', iconName: 'github' as const },
  { name: 'Twitter', href: 'https://x.com', iconName: 'twitter' as const },
  { name: 'LinkedIn', href: 'https://linkedin.com', iconName: 'linkedin' as const },
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
        title="Get started"
        subtitle={
          <>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>.
          </>
        }
        cta={{
          label: 'Explore the terminal',
        }}
        socialLinks={socialLinks}
      />
      <div className="home-page__actions">
        <Button variant="secondary" size="lg">
          Open settings
        </Button>
        <Button variant="outline" size="lg">
          Read docs
        </Button>
      </div>
    </MainLayout>
  );
}
