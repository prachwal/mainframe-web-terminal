import { Button, Text } from '@/components/atoms';
import { HeroBanner } from '@/components/organisms';
import { MainLayout } from '@/components/templates';
import { useAppDispatch, useAppSelector } from '@/store';
import { setThemeMode } from '@/store/themeSlice';
import type { ThemeMode } from '@/theme';
import './styles.scss';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com', iconName: 'github' as const },
  { name: 'Docs', href: 'https://vite.dev', iconName: 'documentation' as const },
  { name: 'Community', href: 'https://react.dev', iconName: 'social' as const },
];

export function HomePage() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);

  const setMode = (mode: ThemeMode) => {
    dispatch(setThemeMode(mode));
  };

  return (
    <MainLayout
      className="home-page"
      header={
        <div className="home-page__header">
          <Text variant="label" as="span">Mainframe Web Terminal</Text>
          <div className="home-page__theme-switch" role="group" aria-label="Theme mode">
            <Button
              size="sm"
              variant={themeMode === 'light' ? 'secondary' : 'outline'}
              onClick={() => setMode('light')}
              disabled={themeMode === 'light'}
              aria-pressed={themeMode === 'light'}
            >
              Light
            </Button>
            <Button
              size="sm"
              variant={themeMode === 'dark' ? 'secondary' : 'outline'}
              onClick={() => setMode('dark')}
              disabled={themeMode === 'dark'}
              aria-pressed={themeMode === 'dark'}
            >
              Dark
            </Button>
            <Button
              size="sm"
              variant={themeMode === 'system' ? 'secondary' : 'outline'}
              onClick={() => setMode('system')}
              disabled={themeMode === 'system'}
              aria-pressed={themeMode === 'system'}
            >
              System
            </Button>
          </div>
        </div>
      }
      footer={
        <div className="home-page__footer">
          <Text variant="caption" as="span">Crafted with React 19 and Atomic Design</Text>
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
