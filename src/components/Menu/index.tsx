import React, { useEffect } from 'react';

import { Container } from './styles';
import { Props } from './types';

const Menu: React.FC<Props> = ({
  anchor,
  options,
  anchorClassName,
  open,
  onClose,
}) => {
  useEffect(() => {
    window.onclick = function (event: any) {
      if (!event.target.matches(`.${anchorClassName}`)) onClose();
    };
  }, []);

  return (
    <Container open={open}>
      {anchor}
      <div className="menu-content">
        {options.map((option) => (
          <button
            onClick={option.onClick}
            className={`option ${option.className && option.className}`}
            key={option.key}
          >
            {option.label}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default Menu;
