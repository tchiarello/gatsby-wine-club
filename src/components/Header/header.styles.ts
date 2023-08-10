import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 150px;
  }
`;

export const EmptyContent = styled.div`
  width: 40px;
`;
