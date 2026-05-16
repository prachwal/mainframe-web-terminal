export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'mainframe-web-terminal:theme-mode';

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark' || value === 'system';
}

export function getStoredThemeMode(storage: Storage | null): ThemeMode {
  if (!storage) {
    return 'system';
  }

  const stored = storage.getItem(THEME_STORAGE_KEY);
  return isThemeMode(stored) ? stored : 'system';
}

export function resolveTheme(mode: ThemeMode, isDarkPreferred: boolean): ResolvedTheme {
  if (mode === 'system') {
    return isDarkPreferred ? 'dark' : 'light';
  }

  return mode;
}

export function applyThemeToDocument(mode: ThemeMode, resolved: ResolvedTheme): void {
  const root = document.documentElement;
  root.dataset.themeMode = mode;
  root.dataset.theme = resolved;
  root.style.colorScheme = resolved;
}
