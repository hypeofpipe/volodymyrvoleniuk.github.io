import React from 'react';
import avatar from './avatar.png';
import { P } from '../../Quarks/P';
import { Colors } from '../../../theme/colors';
import { FontSizes } from '../../../theme/fonts';

export const Header: React.FC = () => {
  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src={avatar} alt="avatar" />
        </a>
        <P color={Colors.WHITE} fontSize={FontSizes.BIG}>
          <P color={Colors.WHITE} fontSize={FontSizes.GIANT}>
            Hello!
          </P>
          <strong className="preventCopy">
            I am Volod<strong className="preventCopy">ymyr Vo</strong>leniuk
          </strong>
          , a Full Stack Web Developer.
        </P>
      </div>
    </header>
  );
};
