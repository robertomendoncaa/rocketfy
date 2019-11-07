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

  img {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    margin: 15px;
  }
`;
