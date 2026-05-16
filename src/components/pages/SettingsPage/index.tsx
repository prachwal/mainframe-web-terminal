import { Heading, Text } from '@/components/atoms';
import { ThemeModeSwitch } from '@/components/molecules';
import { PageShell } from '@/components/templates/PageShell';
import { useAppDispatch, useAppSelector } from '@/store';
import { setThemeMode } from '@/store/themeSlice';
import type { ThemeMode } from '@/theme';
import './styles.scss';

export function SettingsPage() {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);

  const setMode = (mode: ThemeMode) => dispatch(setThemeMode(mode));

  return (
    <PageShell className="settings-page">
      <section className="settings-page__hero" aria-labelledby="settings-title">
        <Heading level="h1">
          <span id="settings-title">Settings</span>
        </Heading>
        <Text variant="body" className="settings-page__description">
          Configure appearance and behavior for the terminal experience.
        </Text>
      </section>

      <section className="settings-page__panel" aria-labelledby="appearance-title">
        <Heading level="h2">
          <span id="appearance-title">Appearance</span>
        </Heading>
        <ThemeModeSwitch value={themeMode} onChange={setMode} />
      </section>
    </PageShell>
  );
}
