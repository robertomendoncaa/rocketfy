import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';
import Menu from './components/Menu';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Menu />
      <Board />
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
