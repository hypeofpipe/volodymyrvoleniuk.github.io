import React from 'react';
import { Main } from './components/Molecules/Main/Main';
import { Description } from './components/Molecules/Description/Description';
import { Header } from './components/Molecules/Header/Header';
import { GDPRConsent } from './components/Weirdos/GDPRConsent';

const App: React.FC = () => {
  return (
    <div>
      <GDPRConsent />
      <Header />
      <Main>
        <Description />
      </Main>
    </div>
  );
};

export default App;
