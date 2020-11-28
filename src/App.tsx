import React, { useCallback, createContext } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';

import Routes from './routes';
import { Router } from 'react-router-dom';

import light from './styles/themes/light';
import dark from '@styles/themes/dark';

import ptBr from './languages/ptBr';

import { LanguageProps, LanguagesAvailableTypes } from './languages/types';
import allLanguages from './languages';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from './services/history';

interface AppContextProps {
  toggleTheme: () => void;
  language: LanguageProps;
  changeLanguage: (arg: LanguagesAvailableTypes) => void;
}

export const AppContext = createContext<AppContextProps>({
  toggleTheme: () => {},
  language: ptBr,
  changeLanguage: () => {},
});

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const [language, setLanguage] = usePersistedState<LanguageProps>(
    'language',
    ptBr
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme]);

  const changeLanguage = useCallback(
    (language: LanguagesAvailableTypes) => {
      const lng = allLanguages.find((l) => l.name === language);
      if (lng) {
        setLanguage(lng.language);
      }
    },
    [setLanguage]
  );

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        changeLanguage,
        language,
      }}
    >
      <ThemeProvider theme={theme}>
        <Router history={history as any}>
          <Routes />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default App;
