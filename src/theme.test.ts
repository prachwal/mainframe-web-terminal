import { describe, expect, it } from 'vitest';
import {
  applyThemeToDocument,
  ensureThemeDocumentState,
  getStoredThemeMode,
  isThemeMode,
  isThemeDocumentStateSynced,
  THEME_STORAGE_KEY,
  readThemeDocumentState,
  resolveTheme,
} from './theme';

describe('theme helpers', () => {
  it('recognizes supported theme modes and falls back for invalid values', () => {
    expect(isThemeMode('light')).toBe(true);
    expect(isThemeMode('dark')).toBe(true);
    expect(isThemeMode('system')).toBe(true);
    expect(isThemeMode('nope')).toBe(false);

    window.localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    expect(getStoredThemeMode(window.localStorage)).toBe('dark');

    window.localStorage.setItem(THEME_STORAGE_KEY, 'broken');
    expect(getStoredThemeMode(window.localStorage)).toBe('system');
  });

  it('resolves system mode and applies document attributes', () => {
    expect(resolveTheme('system', true)).toBe('dark');
    expect(resolveTheme('system', false)).toBe('light');
    expect(resolveTheme('light', true)).toBe('light');

    applyThemeToDocument('dark', 'dark');

    expect(readThemeDocumentState()).toEqual({
      mode: 'dark',
      resolved: 'dark',
      colorScheme: 'dark',
    });
    expect(isThemeDocumentStateSynced('dark', 'dark')).toBe(true);
    expect(ensureThemeDocumentState('dark', 'dark')).toEqual({
      mode: 'dark',
      resolved: 'dark',
      colorScheme: 'dark',
    });
    expect(document.documentElement.dataset.themeMode).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.documentElement.style.colorScheme).toBe('dark');
  });
});
