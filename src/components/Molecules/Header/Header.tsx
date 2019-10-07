import React from 'react';
import avatar from './avatar.png';

export const Header: React.FC = () => {
  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src={avatar} alt="avatar" />
        </a>
        <h1>
          <h2>Hello!</h2>
          <strong className="preventCopy">
            I am Volod<strong className="preventCopy">ymyr Vo</strong>leniuk
          </strong>
          , a Full Stack Web Developer.
        </h1>
      </div>
    </header>
  );
};
