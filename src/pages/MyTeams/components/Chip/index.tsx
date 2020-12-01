/* eslint-disable eqeqeq */
import React from 'react';
import { Props } from './types';

import { Container } from './styles';

const Chip: React.FC<Props> = ({ name, value, setSelected, selected }) => {
  return (
    <Container focus={value == selected} onClick={() => setSelected(value as any)}>
      <span>{name}</span>
      <strong>{value}</strong>
    </Container>
  );
}

export default Chip;