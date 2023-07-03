import { ThemeKeyType } from './slice/types';

export const isSystemLight = window?.matchMedia
  ? window.matchMedia('(prefers-color-scheme: light)')?.matches
  : undefined;

export function saveTheme(theme: ThemeKeyType) {
  window.localStorage && localStorage.setItem('selectedTheme', theme);
}

export function getThemeFromStorage(): ThemeKeyType | null {
  return window.localStorage
    ? (localStorage.getItem('selectedTheme') as ThemeKeyType) || null
    : null;
}
