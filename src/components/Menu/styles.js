import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 100%;
  background: #fff;
  top: 0;
  bottom: 0;
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-bottom: 30px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid #e6ecf5;
  padding: 15px;
  padding-bottom: 0;
`;
