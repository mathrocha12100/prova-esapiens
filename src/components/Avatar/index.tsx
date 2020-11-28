import React from 'react';

import { Container } from './styles';
import { Props } from './types';
import { getFirstLetter } from '@functions/stringFunctions';

const Avatar: React.FC<Props> = ({
  imgPath,
  description,
  backgroundColor,
  size,
  textColor,
  ...rest
}) => {
  return (
    <Container
      textColor={textColor}
      size={size}
      backgroundColor={backgroundColor}
      {...rest}
    >
      <strong>{getFirstLetter(description || '')}</strong>
    </Container>
  );
};

export default Avatar;
