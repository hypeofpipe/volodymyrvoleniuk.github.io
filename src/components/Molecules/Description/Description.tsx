import React from 'react';
import { Link } from '../../Quarks/Link';
import { P } from '../../Quarks/P';
import { Colors } from '../../../theme/colors';
import { FontSizes } from '../../../theme/fonts';

export const Description: React.FC = () => {
  return (
    <section id="one">
      <header className="major">
        <P color={Colors.TUNDORA} fontSize={FontSizes.BIG}>
          Welcome to my website, where I'm going to
          <br />
          share my experience as a Full Stack Web Developer!
        </P>
      </header>
      <P color={Colors.DOVE_GRAY} fontSize={FontSizes.MEDIUM}>
        Hello! I'm a Node.js Web Developer. I like to learn things by doing and
        breaking (hopefully, not in production). When I was a kid, I was
        inspired by games I've played (Half-Life 2, Team Fortress 2, Portal ...
        2), so I decided, that one day I would develop games. In any form or
        shape. At first, I thought about designing and started to experiment
        with modeling at age of 12. Then I moved to Photoshop. For some reason I
        decided, that I want to be a game programmer. I have released one simple
        Android game on{' '}
        <Link
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.hypeofpipe.westernshooter&hl=en_US"
        >
          Google Play
        </Link>
        . I never started my career as a game progammer though, but I've opened
        the wide world of possibilites being a programmer. I've started my
        web-developer career in February 2018, when I was recruited to be a
        manual QA tester at 7ninjas (now a part of{' '}
        <Link target="_blank" href="https://netguru.com">
          Netguru
        </Link>
        ). I liked it a lot, it gave me the understanding of how product line
        works, and of course, how does the web work. At the same time, I've got
        an freelance project to make backend on Node.js for an anonymous clone
        of Instagram with simple functionalities (such as likes). While I was
        working on this side-project, I have learned E2E automated testing using{' '}
        <Link target="_blank" href="https://www.cypress.io/">
          Cypress
        </Link>
        . Then I've started my official career as a junior developer at Netguru.
        Now I have been raised to a middle dev.
      </P>
    </section>
  );
};
