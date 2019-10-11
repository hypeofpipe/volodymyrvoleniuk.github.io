import React, { useState } from 'react';
import { Wrapper } from '../Quarks/Wrapper';
import { P } from '../Quarks/P';
import { Button } from '../Quarks/Button';

export const GDPRConsent = () => {
  const [showModal, setShowModal] = useState(true);
  return showModal ? (
    <Wrapper
      display="flex"
      flexDirection="column"
      position="absolute"
      bg="#233C4F"
      zIndex={999}
      width={['100%', '40%']}
      height="auto"
      right="0"
      bottom="0"
      padding={['2vw', '1vw']}
      borderRadius="0.5vw"
    >
      <P
        fontSize={['4vw', '1.5vw', '1vw']}
        lineHeight={['4vw', '1.5vw', '1vw']}
      >
        We use cookies and other tracking technologies to improve your browsing
        experience on our website, to show you personalized content and targeted
        ads, to analyze our website traffic, and to understand where our
        visitors are coming from. By browsing our website, you consent to our
        use of cookies and other tracking technologies.
      </P>
      <Button
        onClick={() => {
          setShowModal(false);
        }}
        width="50%"
        m="auto"
      >
        I agree
      </Button>
      <Button
        onClick={() => {
          (window as any)['ga-disable-UA-149764548-1'] = true;
          setShowModal(false);
        }}
        width="50%"
        m="auto"
      >
        I don't agree
      </Button>
    </Wrapper>
  ) : null;
};
