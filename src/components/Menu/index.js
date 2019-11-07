import React from 'react';
import { MdDashboard, MdViewList, MdViewQuilt, MdHelpOutline, MdChat } from 'react-icons/md';
import { FaRobot } from 'react-icons/fa';

import { Container, Body, Footer } from './styles';

export default function Menu() {
  return (
    <Container>
      <Body>
        <MdDashboard size={26} color="#9aaabe" />
        <MdViewList size={26} color="#9aaabe" />
        <MdViewQuilt size={26} color="#9aaabe" />
        <FaRobot size={26} color="#9aaabe" />
      </Body>
      <Footer>
        <MdHelpOutline size={22} color="#9aaabe" />
        <MdChat size={22} color="#9aaabe" />
      </Footer>
    </Container>
  );
}
