import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin-bottom: 50px;
  margin-top: 500px;
`;

export const WinesContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 20px;
  row-gap: 80px;

  @media (max-width: 800px) {
    grid-template-columns: 500px;
    justify-content: center;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
