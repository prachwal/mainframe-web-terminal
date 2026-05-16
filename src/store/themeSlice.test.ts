import { describe, expect, it, vi } from 'vitest';
import { THEME_STORAGE_KEY } from '@/theme';

function installMatchMedia(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

describe('themeSlice', () => {
  it('hydrates from persisted theme mode on module load', async () => {
    installMatchMedia(true);
    window.localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    vi.resetModules();
    const { themeReducer } = await import('./themeSlice');

    const state = themeReducer(undefined, { type: '@@INIT' });

    expect(state.mode).toBe('dark');
    expect(state.resolved).toBe('dark');
    expect(document.documentElement.dataset.themeMode).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('persists theme changes and syncs the document', async () => {
    installMatchMedia(false);

    vi.resetModules();
    const { setThemeMode, themeReducer } = await import('./themeSlice');

    const initialState = themeReducer(undefined, { type: '@@INIT' });
    const nextState = themeReducer(initialState, setThemeMode('light'));

    expect(nextState.mode).toBe('light');
    expect(nextState.resolved).toBe('light');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
    expect(document.documentElement.dataset.themeMode).toBe('light');
    expect(document.documentElement.dataset.theme).toBe('light');
  });

  it('tracks system preference when syncing the theme', async () => {
    installMatchMedia(true);

    vi.resetModules();
    const { syncSystemTheme, themeReducer } = await import('./themeSlice');

    const nextState = themeReducer(
      { mode: 'system', resolved: 'light' },
      syncSystemTheme(),
    );

    expect(nextState.resolved).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
