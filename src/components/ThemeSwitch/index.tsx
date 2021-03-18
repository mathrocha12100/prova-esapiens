/**
 * Switch de alterar tema do header
 */

import React, { useState, useContext } from 'react';
import { darken, lighten } from 'polished';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { AppContext } from '~/App';
import Switch from 'react-switch';
import { Container } from './styles';
import { IconContainerProps, ThemeSwitchProps } from './types';

function IconContainer(props: IconContainerProps) {
  const { applicationTheme, sunIconColor, moonIconColor } = props;

  return (
    <Container applicationTheme={applicationTheme}>
      {applicationTheme === 'dark' ? (
        <FaMoon color={moonIconColor || '#fff'} />
      ) : (
        <FaSun color={sunIconColor || '#fff'} />
      )}
    </Container>
  );
}

function ThemeSwitch(props: ThemeSwitchProps) {
  const { moonIconColor, sunIconColor } = props;

  const { header, title: themeTitle } = useContext(ThemeContext);
  const { toggleTheme } = useContext(AppContext);
  const [on, setOn] = useState(themeTitle === 'dark');

  function toggle(value: boolean) {
    setOn(value);
    toggleTheme();
  } 

  return (
    <Switch
      onChange={toggle}
      checked={on}
      id="change-theme-switch"
      checkedIcon={
        <IconContainer
          moonIconColor={moonIconColor}
          sunIconColor={sunIconColor}
          applicationTheme="dark"
        />
      }
      uncheckedIcon={
        <IconContainer
          moonIconColor={moonIconColor}
          sunIconColor={sunIconColor}
          applicationTheme="light"
        />
      }
      handleDiameter={20}
      offColor={darken(0.1, header.primary)}
      onColor={lighten(0.15, header.primary)}
    />
  );
}

export default ThemeSwitch;
