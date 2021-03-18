import { DefaultTheme } from 'styled-components';

/**
 * função pra escolher a cor do texto
 */
export function choseTextColor(theme: DefaultTheme) {
  if (theme.title === 'dark') return theme.body.defaultText;
  return theme.body.secondaryText;
}
