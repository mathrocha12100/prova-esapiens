import React, { useContext } from 'react';
import { LoadingProps } from './types';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { FaCircleNotch } from 'react-icons/fa';

/**
 * componente geral pra loadings
 */
function Loading({ loadingIconSize = 20, loadingIconColor }: LoadingProps) {
  const { body } = useContext(ThemeContext);

  return (
    <Container className="loading-container">
      <FaCircleNotch
        className="search-input-loading-svg"
        size={loadingIconSize}
        color={loadingIconColor || body.primary}
      />
    </Container>
  );
}

export default Loading;
