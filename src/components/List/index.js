import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

import Card from '../Card';

export default function List({ data }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        { data.creatable && (
          <button type="button">
            <MdAdd size={22} color="#fff" />
          </button>
        ) }
      </header>
      <ul>
        { data.cards.map(card => <Card key={data.id} data={card} />) }
      </ul>
    </Container>
  );
}
