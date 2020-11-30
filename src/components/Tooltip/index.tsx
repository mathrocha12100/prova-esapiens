import React from 'react';
import { Props } from './types';
import { Container } from './styles';

const Tooltip: React.FC<Props> = ({ children, tooltipText }) => {
  return (
    <Container className="tooltip" >
      {children}
      <span className="tooltipText">{tooltipText}</span>
    </Container>
  );
}

export default Tooltip;