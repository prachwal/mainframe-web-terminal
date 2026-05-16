import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { themeReducer, syncSystemTheme } from '@/store/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

const systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
systemThemeMedia.addEventListener('change', () => {
  store.dispatch(syncSystemTheme());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
