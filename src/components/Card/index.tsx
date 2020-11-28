import React from 'react';
import { Container } from './styles';
import { Props } from './types';

const Card: React.FC<Props> = ({ children, header, button }) => {
  return (
    <Container>
      <header className="card-header">
        <strong>{header.title}</strong>
        {button}
      </header>
      <main className="card-content">{children}</main>
    </Container>
  );
};

export default Card;
