import React from 'react';
import Header from './components/Header';
import { Container } from './styles';

const Common: React.FC = ({ children }) => {
  return (
    <Container className="AppContainer">
      <Header />
      <main className="AppContent">{children}</main>
    </Container>
  );
};

export default Common;
