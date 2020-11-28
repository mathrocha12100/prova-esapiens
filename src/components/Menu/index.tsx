import React from 'react';

import { Container } from './styles';
import { Props } from './types';

const Menu: React.FC<Props> = ({ anchor, options, open }) => {
  return (
    <Container>
      {anchor}
      <div className="menu-content">
        {options.map((option) => (
          <button onClick={option.onClick} className="option" key={option.key}>{option.label}</button>
        ))}
      </div>
    </Container>
  );
};

export default Menu;
