import { applyThemeToDocument, getStoredThemeMode, resolveTheme } from '@/theme';

const mode = getStoredThemeMode(window.localStorage);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const resolved = resolveTheme(mode, prefersDark);

applyThemeToDocument(mode, resolved);
