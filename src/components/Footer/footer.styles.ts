import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  padding: 20px 10px;
  border-top: 1px solid var(--color-theme-3);

  span {
    color: var(--color-theme-3);
    text-decoration: underline;
    text-decoration-color: var(--color-theme-3);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
