import { darken } from 'polished';

export default {
  title: 'dark',
  body: {
    primary: '#0E162D',
    secondary: '#5b337a',
    background: '#121212',
    backgroundSecondary: '#222222',
    backgroundTertiary: '#333333',
    backgroundQuaternary: '#5555',
    defaultText: darken(0.2, '#eee'),
    secondaryText: '#333',
  },
  header: {
    primary: '#0E162D',
    text: darken(0.15, '#eee'),
  },
  dialog: {
    primary: '#424242',
    text: '#eee',
  },
};
