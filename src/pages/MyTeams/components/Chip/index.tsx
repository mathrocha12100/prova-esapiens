import React from 'react';
import { Props } from './types';

import { Container } from './styles';

const Chip: React.FC<Props> = ({ name, value }) => {
  return (
    <Container>
      <span>{name}</span>
      <strong>{value}</strong>
    </Container>
  );
}

export default Chip;