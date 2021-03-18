import React from 'react';
import { Container } from './styles';
import { ListRepositoriesProps } from './types';
import FindUser from './components/FindUser';

function MainPage(props: ListRepositoriesProps) {
  return (
    <Container>
      <FindUser />
    </Container>
  );
}

export default MainPage;
