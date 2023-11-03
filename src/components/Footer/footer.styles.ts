import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;

  span {
    color: var(--color-theme-3);
    text-decoration: underline;
    text-decoration-color: var(--color-theme-3);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DividerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    margin: 0 10px;
  }
`;

export const Divider = styled.div`
  border-top: 1px solid var(--color-theme-1);
  width: 100%;
`;
