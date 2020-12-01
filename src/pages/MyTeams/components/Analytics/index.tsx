import React from 'react';
import  Avatar from '@components/Avatar';
import { Container } from './styles';
import { Props } from './types';

const Analytics: React.FC<Props> = ({ lowest, highest }) => {
  return (
    <Container>
      <div className="first">
        <h4>{lowest.label}</h4>
        <aside>
          <Avatar textColor="#fff" size={8} sizeUnit="vw"  imgPath="" description={lowest.player} />
          <span>{lowest.percent}</span>
        </aside>
      </div>
      <div>
        <h4>{highest.label}</h4>
        <aside>
          <Avatar textColor="#fff" size={8} sizeUnit="vw" imgPath="" description={highest.player} />
          <span>{highest.percent}</span>
        </aside>
      </div>
    </Container>
  );
}

export default Analytics;