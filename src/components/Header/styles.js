import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: #3b5bfd;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  margin-right: 5px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 4px;
  }
`;
