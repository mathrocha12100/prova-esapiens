import React, { useContext, useState } from 'react';
import githubLogo from '~/assets/GitHub_Logo_White.svg';
import { FindUserProps } from '../../types';
import ThemeSwitch from '~/components/ThemeSwitch';
import SearchInput from '../SearchInput';
import githubCatLogo from '~/assets/githubCatLogo.svg';
import Menu from '~/components/Menu';
import { AppContext } from '~/App';
import { countryToFlag } from '~/functions/stringFunctions';

function FindUser(props: FindUserProps) {
  const [open, setOpen] = useState(false);
  const { language, changeLanguage } = useContext(AppContext);

  return (
    <div className={`find-repository-wrapper`}>
      <header className="find-repositories-header-container">
        <img className="github-logo" src={githubLogo} alt="githubLogo" />

        <div className="header-actions-buttons">
          <ThemeSwitch />
          <Menu
            open={open}
            onClose={() => setOpen(false)}
            anchorClassName="change-language-button"
            anchor={
              <button
                id="change-language-button"
                className="change-language-button"
                onClick={() => setOpen(true)}
              >
                {countryToFlag(language.flag)}
              </button>
            }
            options={[
              {
                key: 1,
                label: `${countryToFlag('BR')} Português`,
                onClick: () => {
                  changeLanguage('ptBr');
                  setOpen(false);
                },
                className: 'portuguese-menu-item',
              },
              {
                key: 2,
                label: `${countryToFlag('US')} English`,
                onClick: () => {
                  changeLanguage('enUs');
                  setOpen(false);
                },
                className: 'english-menu-item',
              },
            ]}
          />
        </div>
      </header>
      <main
        className="find-repository-container"
        id="find-repository-container"
      >
        <div className="find-repository-form-container">
          <h1 className="title">{language.mainPage.title}</h1>
          <SearchInput />
        </div>
        <div className="github-icon-container">
          <img
            className="github-cat-logo"
            src={githubCatLogo}
            alt="github-cat-logo"
          />
        </div>
      </main>
    </div>
  );
}

export default FindUser;
