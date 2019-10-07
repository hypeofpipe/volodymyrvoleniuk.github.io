import React from 'react';
import { Main } from './components/Molecules/Main/Main';
import { Description } from './components/Molecules/Description/Description';
import { Header } from './components/Molecules/Header/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <Description />
      </Main>
    </div>
  );
};

export default App;
