import { darken } from 'polished';

export default {
  title: 'dark',
  body: {
    primary: '#bf0e4f',
    secondary: '#5b337a',
    background: '#121212',
    backgroundSecondary: '#222222',
    backgroundTertiary: '#333333',
    backgroundQuaternary: '#5555',
    text: darken(0.2, '#eee'),
  },
  header: {
    primary: '#333',
    text: darken(0.15, '#eee'),
  },
  dialog: {
    primary: '#424242',
    text: '#eee',
  },
};
