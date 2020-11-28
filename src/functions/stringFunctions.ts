import { DefaultTheme } from 'styled-components';

export function getFirstLetter(string: string) {
  try {
    return string.split('')[0];
  } catch (err) {
    return '';
  }
}

export function countryToFlag(isoCode: string) {
  try {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode;
  } catch (err) {
    return '';
  }
}

export function themeIsLight(theme: DefaultTheme) {
  return theme.title === 'light';
}

export function themeIsDark(theme: DefaultTheme) {
  return theme.title === 'dark';
}
