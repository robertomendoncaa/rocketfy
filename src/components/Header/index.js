import React from 'react';
import { MdNotificationsNone, MdMoreVert } from 'react-icons/md';

import { Container, Notification } from './styles';

export default function Header() {
  return (
    <Container>
      <h1>Rocketfy</h1>

      <Notification>
        <MdNotificationsNone size={28} color="rgba(255, 255, 255, 0.6)" />
        <img src="https://avatars0.githubusercontent.com/u/20547884?s=400&u=c1ae6f083f234b259a6abc28d56e026c68d4bb71&v=4'" alt=""/>
        <MdMoreVert size={28} color="rgba(255, 255, 255, 0.6)" />
      </Notification>
    </Container>
  );
}
