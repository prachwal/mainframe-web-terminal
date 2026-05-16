import heroImage from '@/assets/hero.png';
import { ensureThemeDocumentState, getStoredThemeMode, resolveTheme } from '@/theme';

const mode = getStoredThemeMode(window.localStorage);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const resolved = resolveTheme(mode, prefersDark);

ensureThemeDocumentState(mode, resolved);

const preload = document.createElement('link');
preload.rel = 'preload';
preload.as = 'image';
preload.href = heroImage;
document.head.append(preload);
