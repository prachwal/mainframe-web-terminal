import '@testing-library/jest-dom/vitest';
import { afterEach, beforeEach, vi } from 'vitest';

function createMatchMedia(matches = false) {
  return vi.fn((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

function createLocalStorage(): Storage {
  const store = new Map<string, string>();

  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
  } as Storage;
}

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: createMatchMedia(false),
  });

  const localStorage = createLocalStorage();

  Object.defineProperty(window, 'localStorage', {
    configurable: true,
    writable: true,
    value: localStorage,
  });

  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    writable: true,
    value: localStorage,
  });
});

afterEach(() => {
  document.documentElement.removeAttribute('data-theme-mode');
  document.documentElement.removeAttribute('data-theme');
  document.documentElement.style.removeProperty('color-scheme');
});
