import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  applyThemeToDocument,
  getStoredThemeMode,
  resolveTheme,
  type ResolvedTheme,
  type ThemeMode,
  THEME_STORAGE_KEY,
} from '@/theme';

export interface ThemeState {
  mode: ThemeMode;
  resolved: ResolvedTheme;
}

function prefersDarkColorScheme(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function readInitialState(): ThemeState {
  if (typeof window === 'undefined') {
    return { mode: 'system', resolved: 'light' };
  }

  const mode = getStoredThemeMode(window.localStorage);
  const prefersDark = prefersDarkColorScheme();
  const resolved = resolveTheme(mode, prefersDark);

  applyThemeToDocument(mode, resolved);

  return { mode, resolved };
}

const initialState = readInitialState();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      const prefersDark = prefersDarkColorScheme();
      state.resolved = resolveTheme(state.mode, prefersDark);
      window.localStorage.setItem(THEME_STORAGE_KEY, state.mode);
      applyThemeToDocument(state.mode, state.resolved);
    },
    syncSystemTheme(state) {
      const prefersDark = prefersDarkColorScheme();
      state.resolved = resolveTheme(state.mode, prefersDark);
      applyThemeToDocument(state.mode, state.resolved);
    },
  },
});

export const { setThemeMode, syncSystemTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
