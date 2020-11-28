import React, { useState, useContext, useMemo } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container, AnchorButton } from './styles';
import { darken, lighten } from 'polished';
import { AppContext } from '~/App';
import { FaMoon, FaSun } from 'react-icons/fa';
import Avatar from '@components/Avatar';
import Menu from '@components/Menu';
import { countryToFlag } from '@functions/stringFunctions';

const IconContainer: React.FC<{ mode: 'dark' | 'light' }> = ({ mode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      justifyContent: mode === 'dark' ? 'flex-start' : 'flex-end',
      marginRight: mode === 'dark' ? 0 : 10,
      marginLeft: mode === 'light' ? 0 : 10,
    }}
  >
    {mode === 'dark' ? <FaMoon color="#333" /> : <FaSun color="#fff" />}
  </div>
);

const logourl =
  'https://www.venturus.org.br/wp-content/uploads/2019/06/Logo2019-h-semtagOK-300x99.png';

const Header: React.FC = () => {
  const { header, title } = useContext(ThemeContext);
  const [on, setOn] = useState(title === 'dark');
  const { toggleTheme, changeLanguage, language } = useContext(AppContext);

  const languages = useMemo(
    () => [
      {
        key: 1,
        label: `${countryToFlag('BR')} Português`,
        onClick: () => {
          changeLanguage('ptBr');
        },
      },
      {
        key: 2,
        label: `${countryToFlag('US')} English`,
        onClick: () => changeLanguage('enUs'),
      },
    ],
    [changeLanguage]
  );

  function toggle(value: boolean) {
    setOn(value);
    toggleTheme();
  }

  return (
    <Container>
      <div className="wrapper">
        <img src={logourl} alt="Venturus Logo" />
        <strong>{language.header.title}</strong>
      </div>
      <Menu
        anchor={<AnchorButton>{countryToFlag(language.flag)}</AnchorButton>}
        options={languages}
      />
      <strong>Matheus Rocha</strong>
      <Avatar
        style={{ marginLeft: '1vh', marginRight: '1vh' }}
        size={38}
        description="Matheus Rocha"
        imgPath=""
      />

      <Switch
        onChange={toggle}
        checked={on}
        checkedIcon={<IconContainer mode="dark" />}
        uncheckedIcon={<IconContainer mode="light" />}
        handleDiameter={20}
        offColor={darken(0.15, header.primary)}
        onColor={lighten(0.15, header.primary)}
      />
    </Container>
  );
};

export default Header;
