import React from 'react';
import { NotFoundProps } from './types';
import { Container } from './styles';

function NotFound(props: NotFoundProps) {
  const { message, icon } = props;

  return (
    <Container>
      {icon}
      <h1 className="not-found-message">{message}</h1>
    </Container>
  );
}

export default NotFound;
