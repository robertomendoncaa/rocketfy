import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" title="Tarefa" />
      </header>
      <p>Fazer migração completa do servidor</p>
      <img src="https://avatars0.githubusercontent.com/u/20547884?s=460&v=4" alt=""/>
    </Container>
  );
}
