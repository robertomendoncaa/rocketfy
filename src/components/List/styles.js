import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-size: 16px;
      font-weight: 500;
      padding: 0 10px;
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 16px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;

      &:hover {
        background: #1334de;
      }
    }
  }

  ul {
    margin-top: 30px;
  }
`;
