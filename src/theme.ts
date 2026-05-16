export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'mainframe-web-terminal:theme-mode';

export interface ThemeDocumentState {
  mode: ThemeMode | null;
  resolved: ResolvedTheme | null;
  colorScheme: ResolvedTheme | null;
}

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

export function readThemeDocumentState(root: HTMLElement = document.documentElement): ThemeDocumentState {
  const colorScheme = root.style.colorScheme;

  return {
    mode: (root.dataset.themeMode as ThemeMode | undefined) ?? null,
    resolved: (root.dataset.theme as ResolvedTheme | undefined) ?? null,
    colorScheme: colorScheme === 'light' || colorScheme === 'dark' ? colorScheme : null,
  };
}

export function isThemeDocumentStateSynced(
  mode: ThemeMode,
  resolved: ResolvedTheme,
  root: HTMLElement = document.documentElement,
): boolean {
  const state = readThemeDocumentState(root);

  return state.mode === mode && state.resolved === resolved && state.colorScheme === resolved;
}

export function applyThemeToDocument(
  mode: ThemeMode,
  resolved: ResolvedTheme,
  root: HTMLElement = document.documentElement,
): ThemeDocumentState {
  root.dataset.themeMode = mode;
  root.dataset.theme = resolved;
  root.style.colorScheme = resolved;

  return readThemeDocumentState(root);
}

export function ensureThemeDocumentState(
  mode: ThemeMode,
  resolved: ResolvedTheme,
  root: HTMLElement = document.documentElement,
): ThemeDocumentState {
  const state = applyThemeToDocument(mode, resolved, root);

  if (!isThemeDocumentStateSynced(mode, resolved, root)) {
    throw new Error('Theme document state could not be synchronized.');
  }

  return state;
}
